import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router,private toastr: ToastrService) { }

  logout(){
    localStorage.setItem("loged", "false");
    
    if (localStorage.getItem("loged") == "true"){

    }else{
      this.router.navigate(['/login']);
    }
  }
  ngOnInit() {
    

      if (localStorage.getItem("loged") == "true"){

      }else{
        this.router.navigate(['/login']);
      }
      
  }

}
