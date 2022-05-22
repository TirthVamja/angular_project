import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import {ShowStockPriceService} from '../services/show-stock-price.service';
@Component({
  selector: 'app-show-stock-price',
  templateUrl: './show-stock-price.component.html',
  styleUrls: ['./show-stock-price.component.css']
})
export class ShowStockPriceComponent implements OnInit {

  constructor(
    private stockService:ShowStockPriceService,
    private loginService:LoginService,
    private router:Router,
    ) { }

  data:any
  display = "";
  userIsAuthenticated=false;
  async ngOnInit(){
    this.display = "";
    
    // stockService is also fired even if redired to login page...use some logic of async and await
    this.loginService.IsUserValidated.subscribe(
      x=>{
        if(!x){
          this.router.navigate(['/login'])
        }
      }
      );
    this.stockService.getData().subscribe((data)=>{this.data=data});
    console.log(this.data);
  }

  // navItemClicked($event){
  //   console.log($event);
  // }

  showComponent(x:string){
    this.display=x;
    console.log(x)
  }

}
