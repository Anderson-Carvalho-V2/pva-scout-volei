import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-fundamentos',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './fundamentos.component.html',
  styleUrls: ['./fundamentos.component.css']
})
export class FundamentosComponent {
  @Output() fundamentoSelecionado = new EventEmitter<string>();

  selecionarFundamento(fundamento: string): void {
    this.fundamentoSelecionado.emit(fundamento);
  }
}
