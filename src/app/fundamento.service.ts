import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FundamentoService {
  private fundamentosMock = {
    'Passe': ['PA', 'PB', 'PC', 'PX'],
    'Saque': ['S1A', 'S5A', 'S6A', 'S1E', 'S5E', 'S6E', 'S1A', 'S5A', 'S6A', 'SX'],
    'Ataque': ['APA', 'ADA', 'ACA', 'APE', 'ADE', 'ACE', 'APP', 'ADP', 'ACP', 'AB', 'AX'],
    'Bloqueio': ['BPE', 'BCE', 'BOE', 'BPP', 'BCP', 'BOP', 'BX'],
    'Defesa': ['DA', 'DE', 'DX'],
    'Levantamento': ['LPP', 'LPR', 'LCP', 'LCR', 'LOP', 'LOR', 'PX'],
    'Cobertura': ['CA', 'CE', 'CX'],
    
  };

  getAcoesPorFundamento(fundamento: keyof typeof this.fundamentosMock): string[] {
    return this.fundamentosMock[fundamento] || [];
  }
}
