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
import { ClienteCasaComponent } from './pagina/cliente/cliente-casa/cliente-casa.component'; 
import { ReservasComponent } from './pagina/cliente/reservas/reservas.component'; 
import { AdminCasaComponent } from './pagina/admin/admin-casa/admin-casa.component'; 
import { HotelComponent } from './pagina/admin/hoteis/hoteis.component';
import { HotelService } from './services/hotel.service';
import { ReservaService } from './services/reserva.service'; 
@NgModule({
  declarations: [
    AppComponent,
    CadastrarClienteComponent,
    LoginComponent,
    ClienteCasaComponent,
    ReservasComponent,
    AdminCasaComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [UsuarioService, HotelService, ReservaService],
  bootstrap: [AppComponent]
})
export class AppModule { }