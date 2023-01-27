import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { Foods } from '../shared/models/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 foods:Foods[]=[];
  constructor( private fs:FoodService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  
       this.activatedRoute.params.subscribe(res=>{
      if(res['searchItem']){
        this.foods = this.fs.getAllImages().filter(food=>food.name.toLowerCase().includes(res['searchItem'].toLowerCase()));
      }else if(res['tag']){
         this.foods=this.fs.getAllFoodByTag(res['tag']);
      }   
      else{
        this.foods= this.fs.getAllImages();
      }

    })

    
  }

}
