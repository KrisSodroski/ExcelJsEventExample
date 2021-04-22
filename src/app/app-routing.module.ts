import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Addin } from './Pages/Addin/Addin';
import { Main } from './Pages/Main/Main';


const routes: Routes = [
  { path: '', component: Main },
  { path: 'Addin', component: Addin },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
