import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastrarClienteComponent } from './pagina/cadastrar-cliente/cadastrar-cliente.component';
import { UsuarioService } from './services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pagina/login/login.component';
import { ClienteCasaComponent } from './pagina/cliente/cliente-casa/cliente-casa/cliente-casa.component';
import { ReservasComponent } from './pagina/cliente/reservas/reservas/reservas.component';
import { AdminCasaComponent } from './pagina/admin/admin-casa/admin-casa/admin-casa.component';
import { VoosComponent } from './pagina/admin/voos/voos/voos.component';
import { VooService } from './services/voo.service';
import { ReservaService } from './services/reserva.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarClienteComponent,
    LoginComponent,
    ClienteCasaComponent,
    ReservasComponent,
    AdminCasaComponent,
    VoosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [UsuarioService, VooService, ReservaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
