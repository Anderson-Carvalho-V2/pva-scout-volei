import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TxtExportService {
  private dadosAtletas: string[] = [];

  constructor() {}

  adicionarAtleta(atleta: any) {
    const linha = `Nome: ${atleta.nome}, Posição: ${atleta.posicao}`;
    this.dadosAtletas.push(linha);
  }

  adicionarFundamento(atleta: any, fundamento: any) {
    const linha = `Nome: ${atleta.nome}, Posicao: ${atleta.posicao}, PosicaoQuadra: ${atleta.posicaoQuadra}, fundamento: ${fundamento}`;
    this.dadosAtletas.push(linha);
  }

  exportarParaTxt() {
    const conteudo = this.dadosAtletas.join('\n'); // Junta os dados em linhas
    const blob = new Blob([conteudo], { type: 'text/plain' });

    // Criar um link para download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'dados_atletas.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
