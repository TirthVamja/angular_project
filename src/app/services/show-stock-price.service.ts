import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowStockPriceService {

  constructor(public http: HttpClient) { }

  getData():Observable<any>{
    return this.http.get('https://localhost:5001/weatherforecast')
      //   error => {
      //       this.data='Error';
      //   }
      // );
  }

}
