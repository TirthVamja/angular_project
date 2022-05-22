import { Component } from '@angular/core';
import '@cds/core/button/register.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  display = ""
  ngOnInit(){
    this.display = "";
  }

  showComponent(x:string){
    this.display=x;
    console.log(x)
  }






}
