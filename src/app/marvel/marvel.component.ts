import { Component, OnInit } from '@angular/core';
import { DataService } from '../servicios/data.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {
  //variables
  public posts = [];

  constructor(private dataService: DataService){
    this.dataService.getData().subscribe(data =>{
      this.posts = data.data.results;
    });
  }

  ngOnInit() {
  }

}
