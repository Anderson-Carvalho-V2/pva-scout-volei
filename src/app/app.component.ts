import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FundamentoService } from './fundamento.service'
import { AtletaService } from './atleta.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  pontosA = 0;
  pontosB = 0;
  painelVisivel: string = 'quadra'; // 'quadra' será o painel padrão, e 'acao' será o painel de "Ação do Atleta"
  acoesDisponiveis: string[] = [];
  atletas:any = [];  // Aqui vamos armazenar os atletas
  atletasTitulares:any = [];  // Apenas os atletas titulares
  atletasReservas:any = [];  // Apenas os atletas reservas

  constructor(private fundamentoService: FundamentoService, private atletaService: AtletaService) {}

  ngOnInit() {
    // Obtendo todos os atletas
    this.atletasTitulares = this.atletaService.getAtletasTitulares();
    this.atletasReservas = this.atletaService.getAtletasReservas();
  }

  selecionarFundamento(fundamento: any): void {
    this.acoesDisponiveis = this.fundamentoService.getAcoesPorFundamento(fundamento);
    this.painelVisivel = 'acao'; // Troca o painel
  }

  // Função para incrementar os pontos
  incrementarPontos(time: string): void {
    if (time === 'A') {
      this.pontosA++;
    } else if (time === 'B') {
      this.pontosB++;
    }
  }

  // Função para decrementar os pontos
  decrementarPontos(time: string): void {
    if (time === 'A' && this.pontosA > 0) {
      this.pontosA--;
    } else if (time === 'B' && this.pontosB > 0) {
      this.pontosB--;
    }
  }

  // Função para alternar entre a quadra e o painel de ação do atleta
  exibirPainelAcao(): void {
    this.painelVisivel = 'acao'; // Muda para o painel de "Ação do Atleta"
  }

  // Função chamada quando um botão de ação é clicado
  exibirAcaoAtleta(acao: string): void {
    console.log(`Ação do Atleta: ${acao}`); // Imprime a ação para fins de depuração

    // Aqui, você pode adicionar a lógica de ações do atleta
    // Exemplo: Mostrar um painel específico baseado na ação
    // Mas, para sua necessidade, altere para mostrar o painel de ação do atleta
    this.painelVisivel = 'acao'; // Isso troca para o painel de ação do atleta
  }

  // Função para voltar para a quadra
  voltarParaQuadra(): void {
    this.painelVisivel = 'quadra'; // Volta para o painel da quadra
  }

   // Método para manipular a ação quando o botão de um atleta for clicado
   posicionarAtleta(nome: string) {
    console.log(`${nome} foi posicionado na quadra!`);
  }

  
}
