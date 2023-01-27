import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
 @Input()  visible:boolean=false;
 @Input()  notFoundMsg :string = 'Items Not Found , Please Check For Other.';
 @Input()  resetlinkText:string='Reset';
 @Input()  resetLinkRoute:any='/';

  constructor() { }

  ngOnInit(): void {
  }

}
