import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Clinican';

  //datas
  datas = [];

  constructor(private http: HttpClient,private router: Router,private toastr: ToastrService){
    console.log(this.datas)
    
  }

  startUp(){
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(response => this.datas.push(response));
 
  }

  login(user, password) {
    if(user == "admin" && password == "root"){
      localStorage.setItem("loged", "true");

      if (localStorage.getItem("loged") == "true"){
        this.router.navigate(['/main']);
      }else{
        this.router.navigate(['/login']);
      }
      
    }else{
      this.toastr.success('Alerta', 'Datos Eliminados!');
    }
    
  }

  ngOnInit(){
    this.startUp();
  }

}
