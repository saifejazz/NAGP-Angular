import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from "src/app/auth.service";

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any = '';
  isSubmitted  =  false;
  submitted = false;
  //storageData: string = '';

  get formControls() { return this.loginForm.controls; }

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  // login(){
  //   localStorage.setItem('SeesionUser',this.loginForm);
  //   var x = localStorage.getItem("SeesionUser");
  //   console.log(x);
  //   console.log(this.loginForm.value.email);
  //   this.isSubmitted = true;
  //   if(this.loginForm.invalid || (this.loginForm.value.email!="saif" || this.loginForm.value.password!="saif") ){
  //     return;
  //   }
    
  //   console.log("logged in");
  //   this.authService.login(this.loginForm.value);
  //   this.router.navigateByUrl('/products');
  // }

  login(): void { 
    // Process checkout data here
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    } 
    if (this.loginForm.value.email != '' && this.loginForm.value.password != '') {  
      if (this.authService.login(this.loginForm.value.email, this.loginForm.value.password)) {  
        this.router.navigate(["home"]);  
      }  
      else  
        alert("Wrong username or password");  
    }  
  }
}
