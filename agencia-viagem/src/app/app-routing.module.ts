import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './pagina/cadastrar-cliente/cadastro-cliente.component';
import { ClienteCasaComponent } from './pagina/cliente/cliente-casa/cliente-casa.component';
import { LoginComponent } from './pagina/login/login.component';
import { ReservasComponent } from './pagina/cliente/reservas/reservas.component';
import { AdminCasaComponent } from './pagina/admin/admin-casa/admin-casa.component';
import { PacotesComponent } from './pagina/admin/pacotes/pacotes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'cadastro-cliente',
    component: CadastroClienteComponent
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
        redirectTo: 'pacotes',
        pathMatch: 'full'
      }
      ,
      {
        path: 'pacotes',
        component: PacotesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
