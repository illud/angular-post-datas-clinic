import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  title = 'Clinican';

  //datas
  datas :any[];
  constructor(private http: HttpClient,private router: Router,private toastr: ToastrService){
    console.log(this.datas)
  }

  trackByFn(index, item) {
    return index;
  }

  patients_page(){
    this.router.navigate(['/patients']);
  }

  showSuccessSaved() {
    this.toastr.success('Alerta', 'Datos guardados!');
    this.updateDatas();
  }

  updateDatas(){
    this.http.get('http://localhost:5000/get_patients').subscribe((response :any[] ) => this.datas = response )
  }

  save_patient(nombre, documento, fecha, medic){
    var patients_data ={
      "name": nombre,
      "document": documento,
      "calender": fecha,
      "medic": medic
    }
    this.http.post("http://localhost:5000/post_patients", patients_data).subscribe(response => console.log("Inserted"));
    //this.toastr.success('Alerta', 'Datos Actualizados!');
    this.updateDatas();
    this.showSuccessSaved();
    console.log(this.datas);
  }

  startUp(){
    this.http.get('http://localhost:5000/get_patients').subscribe((response :any[] ) => this.datas = response )
    }

  ngOnInit(){
    if (localStorage.getItem("loged") == "true"){

    }else{
      this.router.navigate(['/login']);
    }
    this.startUp();
  }

}
