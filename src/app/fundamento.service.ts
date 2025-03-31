import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FundamentoService {
  private fundamentosMock = {
    'Passe': ['PA', 'PB', 'PC', 'PX'],
    'Saque': ['SA1', 'SA4', 'SA6', 'SE1', 'SE4', 'SE6', 'SP1', 'SP4', 'SP6', 'SX'],
    'Ataque': ['AA1', 'AA4', 'AA6', 'AE1', 'AE4', 'AE6', 'AP1', 'AP4', 'AP6', 'AB', 'AX'],
    'Bloqueio': ['BA', 'BP', 'BD', 'BX'],
    'Defesa': ['DA', 'DB', 'DC', 'DX'],
    'Levantamento': ['LA', 'LB', 'LC', 'PX'],
    'Cobertura': ['CA', 'CB', 'CC', 'CX'],
    'Erro': ['Rede', 'Condução', 'Dois toques',]
  };

  getAcoesPorFundamento(fundamento: keyof typeof this.fundamentosMock): string[] {
    return this.fundamentosMock[fundamento] || [];
  }
}
