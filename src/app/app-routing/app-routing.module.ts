import { CadastroNotasComponent } from './../tasks/cadastro-notas/cadastro-notas.component';
import { TelaLoginComponent } from './../tasks/tela-login/tela-login.component';
import { CadastroUsuarioComponent } from './../tasks/cadastro-usuario/cadastro-usuario.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../tasks/home/home.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'home', component: HomeComponent},
{path: 'cadastro-usuario', component: CadastroUsuarioComponent},
{path: 'cadastro-notas', component: CadastroNotasComponent},
{path: 'tela-login', component: TelaLoginComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
