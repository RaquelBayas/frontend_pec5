import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Input() characters: Character[] = [];
  
}
