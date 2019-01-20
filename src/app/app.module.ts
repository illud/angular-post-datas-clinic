import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { PatientsComponent } from './patients/patients.component';
import { MenuComponent } from './menu/menu.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: ' ', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main',  component: MainComponent },
  { path: 'patients', component: PatientsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    PatientsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ToastrModule.forRoot(),
    MatDatepickerModule,
    MatSelectModule,
    MatBadgeModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
