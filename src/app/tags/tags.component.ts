import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { Tag } from '../shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
   foodpagetags?:string[];

   @Input()
   justifyContent:string ='center';

  tags?:Tag[] =[];
  constructor(private fs:FoodService) { }

  ngOnInit(): void {
    if(!this.foodpagetags){
     this.tags = this.fs.getAllTag();
    }
  }

}
