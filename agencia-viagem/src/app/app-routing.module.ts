import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarClienteComponent } from './pagina/cadastrar-cliente/cadastrar-cliente.component'; 
import { ClienteCasaComponent } from './pagina/cliente/cliente-casa/cliente-casa.component'; 
import { LoginComponent } from './pagina/login/login.component'; 
import { ReservasComponent } from './pagina/cliente/reservas/reservas.component'; 
import { AdminCasaComponent } from './pagina/admin/admin-casa/admin-casa.component'; 
import { HotelComponent } from './pagina/admin/hoteis/hoteis.component'; 
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
  path: 'cadastrar-cliente',
  component: CadastrarClienteComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'clientes',
  component: ClienteCasaComponent,
  children: [
    {
      path: '',
      redirectTo: 'reservas',
      pathMatch: 'full'
    }
    ,
    {
      path: 'reservas',
      component: ReservasComponent
    }
  ]
},
{
  path: 'admin',
  component: AdminCasaComponent,
  children: [
    {
      path: '',
      redirectTo: 'hoteis',
      pathMatch: 'full'
    }
    ,
    {
      path: 'hoteis',
      component: HotelComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
