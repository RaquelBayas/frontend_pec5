import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character.interface';
import { PotterService } from 'src/services/potter.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  isLoading: boolean = true;
  visibleItems: number = 50;
  itemsPerLoad: number = 50;
  @Input() characters: Character[] = [];

  constructor(private potterService: PotterService) {}

  loadMore(): void {
    const startIndex = this.characters.length;
    const endIndex = startIndex + this.itemsPerLoad;
    this.isLoading = true;
    this.potterService.getAllCharacters().subscribe((data: any) => {
      const newCharacters = data.slice(startIndex, endIndex);
      this.characters = this.characters.concat(newCharacters);
      this.isLoading = false;
    });
  }
}
