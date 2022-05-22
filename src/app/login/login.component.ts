import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private loginService:LoginService,
    ) { }


  loginForm = this.formBuilder.group({
    type: ['local', [Validators.required]],
    username: ['',  [Validators.required]],
    password: ['',  [Validators.required]],
  })

  ngOnInit(): void {
    this.loginService.changeIsUserValidated(false);
    this.resetLoginForm();
  }

  verifyCredentials(){
    if(this.loginForm.value["type"]=="admin")
    {
      //login for admin login
    }
    else{
  
      let username=this.loginForm.value["username"];
      let password=this.loginForm.value["password"];
      
      //logic for localuser login
      
      if(username==password){
        console.log("perfect");
        this.loginService.changeIsUserValidated(true);
        this.router.navigate(['/dashboard']);
        // yet to decide weather to change link or change behavoiur variable 
      }
      else{
        this.resetLoginForm()
      }

    }
  }


  resetLoginForm(){
    let defaultValues={
      type:'local',
      username: '',
      password:'',
    }
    this.loginForm.setValue(defaultValues);
  }

}
