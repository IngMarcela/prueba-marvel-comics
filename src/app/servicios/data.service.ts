import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) {
   }
   //consumo de servicios de la pagina de marvel
   getData(){
     return this.httpClient.get<Post[]>('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b5dd158dd0e856443db7fb726fbc6bc9&hash=80182fcb24c6426319114b9e34eafed6')
     //return this.httpClient.get<Post[]>('./marvel.js')
   }
}
