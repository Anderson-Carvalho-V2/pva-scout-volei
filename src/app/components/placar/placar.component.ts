import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-placar',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './placar.component.html',
  styleUrls: ['./placar.component.css']
})
export class PlacarComponent {
  pontosA = 0;
  pontosB = 0;

  @Output() pontosAtualizados = new EventEmitter<{ time: string, pontos: number }>();

  incrementarPontos(time: string): void {
    if (time === 'A') {
      this.pontosA++;
    } else if (time === 'B') {
      this.pontosB++;
    }
    this.pontosAtualizados.emit({ time, pontos: time === 'A' ? this.pontosA : this.pontosB });
  }

  decrementarPontos(time: string): void {
    if (time === 'A' && this.pontosA > 0) {
      this.pontosA--;
    } else if (time === 'B' && this.pontosB > 0) {
      this.pontosB--;
    }
    this.pontosAtualizados.emit({ time, pontos: time === 'A' ? this.pontosA : this.pontosB });
  }
}
