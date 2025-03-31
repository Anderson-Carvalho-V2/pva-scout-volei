import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {
  private atletasMock = [
    { nome: 'Jogador 1', numero: 1, posicao: 1 },
    { nome: 'Jogador 2', numero: 2, posicao: 2 },
    { nome: 'Jogador 3', numero: 3, posicao: 3 },
    { nome: 'Jogador 4', numero: 4, posicao: 4 },
    { nome: 'Jogador 5', numero: 5, posicao: 5 },
    { nome: 'Jogador 6', numero: 6, posicao: 6 },
    { nome: 'Jogador 7', numero: 7, posicao: 0 },
    { nome: 'Jogador 8', numero: 8, posicao: 0 },
    { nome: 'Jogador 9', numero: 9, posicao: 0 },
    { nome: 'Jogador 10', numero: 10, posicao: 0 },
    { nome: 'Jogador 11', numero: 11, posicao: 0 },
    { nome: 'Jogador 12', numero: 12, posicao: 0 },
    { nome: 'Jogador 13', numero: 13, posicao: 0 },
    { nome: 'Jogador 14', numero: 14, posicao: 0 }
  ];

  getAtletasTitulares() {
    return this.atletasMock.filter(atleta => atleta.posicao !== 0).map(atleta => ({
      ...atleta,
      coordenadas: this.getCoordenadas(atleta.posicao)
    }));
  }

  getAtletasReservas() {
    return this.atletasMock.filter(atleta => atleta.posicao === 0);
  }

  private getCoordenadas(posicao: number) {
    const mapaDePosicoes: { [key: number]: { top: string, left: string } } = {
      1: { top: '85%', left: '80%' }, // Posição 1 - Defesa canto inferior direito
      2: { top: '20%', left: '80%' }, // Posição 2 - Ataque canto superior direito
      3: { top: '20%', left: '50%' }, // Posição 3 - Meio da rede
      4: { top: '20%', left: '20%' }, // Posição 4 - Ataque canto superior esquerdo
      5: { top: '85%', left: '20%' }, // Posição 5 - Defesa canto inferior esquerdo
      6: { top: '85%', left: '50%' }  // Posição 6 - Meio da defesa
    };
    return mapaDePosicoes[posicao] || { top: '0%', left: '0%' }; // Caso a posição não exista
  }
}
