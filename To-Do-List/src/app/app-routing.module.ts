import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ToDoListComponent} from "./to-do-list/to-do-list.component";
import {NopageFoundComponent} from "./nopage-found/nopage-found.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./authGuard/auth.guard";

const routes: Routes = [
  { path:'',component:ToDoListComponent },
  { path:'login',component:LoginComponent },
  { path:'home', component:HomeComponent },
  { path:'home/toDoList',component:ToDoListComponent },
  {path:'**', component: NopageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

