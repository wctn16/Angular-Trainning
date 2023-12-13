import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  passwordMode: string;
  public loginForm!: FormGroup
  constructor(private http: HttpClient,private router: Router) {
    this.passwordMode = 'password'
  }

login = {
  OrganizationId: 1,
    UserName: "",
    Password: "",
}
  onSubmit(){
    const apiURL = 'http://pg13sql.anykeeps.com/healthnextapi2/Account/Login'
    this.http.post<any>(apiURL,this.login)
    .subscribe(response =>{
      console.log(response)
            if(this.login == response ){
              alert(response.Message)
            }else{
              alert(response.Message)
            }
        },
        err => {
            console.log(err.message);
        }
    )
  //   this.http.post<any>('http://pg13sql.anykeeps.com/healthnextapi2/Account/Login',{
  //     "OrganizationId": 1,
  //     "UserName": "sysadmin",
  //     "Password": "SpApp@09",
  // },{ 'headers': headers})
  //   .subscribe(res=>{
  //     if(true){
  //       alert(res)
  //     }
  //     else{
  //       alert('Unsuccess')
  //     }
  //   })


}
}
