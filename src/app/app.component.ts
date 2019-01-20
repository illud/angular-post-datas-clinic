import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clinican';

  //datas
  datas = [];

  constructor(private http: HttpClient,private router: Router){
    console.log(this.datas)
  }

  startUp(){
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(response => this.datas.push(response));
  }



  ngOnInit(){
    if (localStorage.getItem("loged") == "true"){

    }else{
      this.router.navigate(['/login']);
    }
    this.startUp();
  }

}
