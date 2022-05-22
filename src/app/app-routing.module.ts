import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShowStockPriceComponent } from './show-stock-price/show-stock-price.component';

const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'dashboard' , component: ShowStockPriceComponent},
  {path: '**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
