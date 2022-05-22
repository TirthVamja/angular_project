import { Component, OnInit } from '@angular/core';
import {ShowStockPriceService} from '../services/show-stock-price.service';
@Component({
  selector: 'app-show-stock-price',
  templateUrl: './show-stock-price.component.html',
  styleUrls: ['./show-stock-price.component.css']
})
export class ShowStockPriceComponent implements OnInit {

  constructor(private stockService:ShowStockPriceService) { }

  data:any

  ngOnInit(){
    this.stockService.getData().subscribe((data)=>{this.data=data});
    console.log(this.data);
  }

}
