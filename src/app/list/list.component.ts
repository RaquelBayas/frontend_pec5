import { Component } from '@angular/core';
import { PotterService } from 'src/services/potter.service';
import { Character } from '../models/character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  characters: Character[] = [];
  displayMode: 'cards' | 'table' = 'cards';
  isLoading: boolean = true;
  visibleItems: number = 50;
  itemsPerLoad: number = 50;

  constructor(private potterService: PotterService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.potterService.getAllCharacters().subscribe((data: any) => {
      this.characters = data.slice(0, this.visibleItems);
      this.isLoading = false;
    });
  }

  toggleDisplayMode(mode: 'cards' | 'table') {
    this.displayMode = mode;
  }
}
