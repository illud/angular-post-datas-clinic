import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'Clinican';

  //datas
  datas = [];

  constructor(private http: HttpClient,private router: Router,private toastr: ToastrService){
    console.log(this.datas)
  }

  patients_page(){
    this.router.navigate(['/patients']);
  }

  startUp(){
    this.http.get('http://localhost:5000/get_patients').subscribe(response => this.datas.push(response));
  }

  ngOnInit(){
    // Store

    // false

  if (localStorage.getItem("loged")== "true"){
      
    }else{
      this.router.navigate(['/login']);
    }
    this.startUp();
  }

}
