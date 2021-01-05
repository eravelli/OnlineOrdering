import { Component, Injectable, OnInit } from '@angular/core';
import { report } from 'process';
import { PromtionServicesService } from '../promtion-services.service';
import { searchpromotion } from '../searchpromotion';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
@Injectable()
export class SearchComponent implements OnInit {

  searchpromotions:any;  
  promotionName: string;

  constructor(private service:PromtionServicesService) { }

  public findByPromotionName(){
   let resp = this.service.getPromotionByName(this.promotionName);
   
   resp.subscribe((data)=>this.searchpromotions=data);
  }

  ngOnInit() {
    let resp = this.service.getPromotions();
    resp.subscribe((data)=>this.searchpromotions=data);
   
        
  }

}
