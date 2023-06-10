import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character.interface';

@Injectable({
  providedIn: 'root'
})
export class PotterService {

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(
      'https://hp-api.onrender.com/api/characters'
    );
  }

  getCharacterById(id: string): Observable<any> {
    return this.http.get<any>(`https://hp-api.onrender.com/api/character/${id}`);
  }

}
