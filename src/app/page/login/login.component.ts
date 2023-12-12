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
  public loginForm!: FormGroup
  constructor(private http: HttpClient,private router: Router) { }

login = {
    "OrganizationId": 1,
    "UserName": "sysadmin",
    "Password": "SpApp@09",
}
  loginClick(){
    // const headers = { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' };
    return this.http.post('http://pg13sql.anykeeps.com/Account/Login',this.login)
    .subscribe(
        res =>{
            console.log(res);
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
