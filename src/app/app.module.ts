import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';
import { TodolistPage } from './todolist/todolist.page';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },{
    path: 'login',
    component: LoginPage
  },{
    path: 'home',
    component: HomePage
  },{
    path: 'todolist',
    component: TodolistPage
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    HomePage,
    TodolistPage,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
