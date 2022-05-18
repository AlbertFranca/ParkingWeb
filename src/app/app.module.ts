import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* import { FormsModule } from '@angular/forms'; */

import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tasks/tela-login/tela-login.component';
import { CadastroUsuarioComponent } from './tasks/cadastro-usuario/cadastro-usuario.component';
import { CadastroNotasComponent } from './tasks/cadastro-notas/cadastro-notas.component';
import { HomeComponent } from './tasks/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    CadastroUsuarioComponent,
    CadastroNotasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    /* FormsModule, */
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
