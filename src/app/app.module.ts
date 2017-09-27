import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {HomeComponent} from './homecomponent/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './logincomponent/login.component';
import {RegisterComponent } from './registercomponent/register.component';
import { NoteComponent } from './notecomponent/note.component';
import {LoginService} from './services/login.service';
import {CreateuserService } from './services/createuser.service';
import {NoteserviceService} from './noteservice/noteservice.service';
import {AuthgurdService} from './authgurd/authgurd.service';
import {GetpostService} from './getpost/getpost.service';
import {DeleteService} from './noteservice/delete.service';
import { PostdetailComponent } from './postdetailcomponent/postdetail.component';
import {EmitterService} from './eventemiter/emitter.service';
import {EditService} from './noteservice/edit.service';
import { NoteformComponent } from './noteformcomponent/noteform.component';



const routes = [
  {path : '', component: HomeComponent},
  {path : 'about', component: AboutComponent },
  {path : 'note', component: NoteComponent, canActivate: [AuthgurdService]},
  {path : 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: '/'},


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    NoteComponent,
    PostdetailComponent,
    NoteformComponent,



  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, ReactiveFormsModule, RouterModule.forRoot(routes)
  ],
  providers: [LoginService,
    CreateuserService, NoteserviceService, AuthgurdService, GetpostService, DeleteService, EmitterService, EditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
