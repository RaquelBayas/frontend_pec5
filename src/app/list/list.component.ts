import { Component } from '@angular/core';
import { PotterService } from 'src/services/potter.service';
import { Character } from '../models/character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  characters: Character[] = [];
  displayMode: 'cards' | 'table' = 'cards';
  isLoading: boolean = true;

  constructor(
    private potterService: PotterService,
  ) {
  }

  ngOnInit(): void {
    this.potterService.getAllCharacters().subscribe((data: any) => {
      this.characters = data;
      this.isLoading = false; 
      console.log(this.characters);
    });
  }

  toggleDisplayMode(mode: 'cards' | 'table') {
    this.displayMode = mode;
  }
}
