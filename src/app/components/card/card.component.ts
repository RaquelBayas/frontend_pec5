import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() characters: Character[] = [];
  

}
