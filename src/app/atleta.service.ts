import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {
  private atletasMock = [
    { nome: 'Lucas', numero: 12, posicao: 'Levantador', posicaoQuadra: 1 },
    { nome: 'Anderson', numero: 10, posicao: 'Ponteiro', posicaoQuadra: 2 },
    { nome: 'Andson', numero: 4, posicao: "Central", posicaoQuadra: 3 },
    { nome: 'Robson', numero: 16, posicao: 'Oposto', posicaoQuadra: 4 },
    { nome: 'Jonatas', numero: 15, posicao: 'Ponteiro', posicaoQuadra: 5 },
    { nome: 'Luan', numero: 7, posicao: 'Libero', posicaoQuadra: 6 },
    { nome: 'Jogador 7', numero: 7, posicao: 1, posicaoQuadra: 0 },
    { nome: 'Jogador 8', numero: 8, posicao: 1, posicaoQuadra: 0 },
    { nome: 'Jogador 9', numero: 9, posicao: 1, posicaoQuadra: 0 },
    { nome: 'Jogador 10', numero: 10, posicao: 1, posicaoQuadra: 0 },
    { nome: 'Jogador 11', numero: 11, posicao: 1, posicaoQuadra: 0 },
    { nome: 'Jogador 12', numero: 12, posicao: 1, posicaoQuadra: 0 },
    { nome: 'Jogador 13', numero: 13, posicao: 1, posicaoQuadra: 0 },
    { nome: 'Jogador 14', numero: 14, posicao: 1, posicaoQuadra: 0 }
  ];

  getAtletasTitulares() {
    return this.atletasMock.filter(atleta => atleta.posicaoQuadra !== 0).map(atleta => ({
      ...atleta,
      coordenadas: this.getCoordenadas(atleta.posicaoQuadra)
    }));
  }

  getAtletasReservas() {
    return this.atletasMock.filter(atleta => atleta.posicaoQuadra === 0);
  }

  private getCoordenadas(posicaoQuadra: number) {
    const mapaDePosicoes: { [key: number]: { top: string, left: string } } = {
      1: { top: '85%', left: '80%' }, // Posição 1 - Defesa canto inferior direito
      2: { top: '20%', left: '80%' }, // Posição 2 - Ataque canto superior direito
      3: { top: '20%', left: '50%' }, // Posição 3 - Meio da rede
      4: { top: '20%', left: '20%' }, // Posição 4 - Ataque canto superior esquerdo
      5: { top: '85%', left: '20%' }, // Posição 5 - Defesa canto inferior esquerdo
      6: { top: '85%', left: '50%' }  // Posição 6 - Meio da defesa
    };
    return mapaDePosicoes[posicaoQuadra] || { top: '0%', left: '0%' }; // Caso a posição não exista
  }
}
