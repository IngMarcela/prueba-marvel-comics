import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../servicios/data.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.scss']
})
export class MarvelComponent implements OnInit {
  //variables
  public posts = [];
  public data:string = "";

  //variables para los likes
  public numberOfLikes :Array<number> = [];

  constructor(private dataService: DataService){
   
  }

  

  likeButtonClick(index:number){
    //console.log(index);
    var cont = this.numberOfLikes[index] + 1; 
    this.numberOfLikes[index]=cont;
  }
  dislikeButtonClick(index:number){
    var cont = this.numberOfLikes[index] - 1; 
    if(cont >= 0){
      this.numberOfLikes[index]=cont;
    }
  }

  public showSearchResults(event: any): void {
    if (event.target.value.length >= 3) {
      alert(event.target.value);
      //this.searching = true;
    } else {
      //this.searching = false;
    }
  }


  ngOnInit() {
      this.dataService.getData().subscribe(data =>{
        this.posts = data.data.results;
        //console.log(this.posts);
        for(var i=0; i < this.posts.length; i++)
        {
          this.numberOfLikes.push(0);
        }
      });
  }

}
