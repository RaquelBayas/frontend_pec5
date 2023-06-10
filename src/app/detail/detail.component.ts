import { Component, OnInit } from '@angular/core';
import { PotterService } from 'src/services/potter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../models/character.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  character!: Character;
  showContainer: boolean = false;

  constructor(private potterService: PotterService,
    private activatedRoute: ActivatedRoute,
    private router: Router,) {

  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getCharacterDetails(id!);
  }

  getCharacterDetails(id: string) {
    this.potterService.getCharacterById(id).subscribe((data:any) => {
      this.character = data[0];
      console.log(data);
    })
  }

  goBack() {
    this.router.navigate(['']); 
  }
  


}
