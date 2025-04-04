import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quadra',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quadra.component.html',
  styleUrls: ['./quadra.component.css']
})
export class QuadraComponent {
  @Input() atletasTitulares: any[] = [];

  posicionarAtleta(nome: string) {
    console.log(`${nome} foi posicionado na quadra!`);
  }
}
