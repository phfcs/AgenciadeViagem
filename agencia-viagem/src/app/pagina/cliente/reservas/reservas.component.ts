import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Constants } from '../../../../../../commons/constants';
import { Pacote } from '../../../../../../commons/entidade/pacote'; 
import { Reserva } from '../../../../../../commons/entidade/reserva'; 
import { PacoteService } from 'src/app/services/pacote.service'; 
import { Usuario } from '../../../../../../commons/entidade/usuario'; 
import { ReservaService } from 'src/app/services/reserva.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  pacotes: Pacote[]=[]
  reservas: Reserva[] = [];

  constructor(
    private title: Title,
    private pacoteService: PacoteService,
    private reservaService: ReservaService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.title.setTitle(Constants.RESERVAS_TITULO);
    this.reset();
  }

  private reset() {
    this.pacoteService.buscarTodos().subscribe(data => this.pacotes = data);
    this.buscarPorCpf();
  }
  reservar(pacote: Pacote): void {
    let usuarioLogado: Usuario = JSON.parse(localStorage.getItem('usuarioLogado') || '{}');
    this.reservaService.cadastrar({
      cpfCliente: usuarioLogado.cpf,
      pacote: pacote
    }).subscribe({
      next: (response) => {
        this.mostrarAlertSucesso(response.mensagem);
        this.buscarPorCpf();
      },
      error: (err) => {
        this.mostrarAlertErro(err.error.mensagem);
      }
    })
  }

  cancelar(reserva: Reserva): void {
    if (
      confirm(`Deseja confirmar o cancelamento da Reserva para o Vôo com origem ${reserva.pacote.localPartida} e destino ${reserva.pacote.localDestino}?`)
    ) {
      this.reservaService.cancelar(reserva).subscribe({
        next: (response) => {
          this.mostrarAlertSucesso(response.mensagem);
          this.reset();
        },
        error: (err) => {
          this.mostrarAlertErro(err.error.mensagem);
        }
      })
    }
  }

  mostrarAlertSucesso(mensagem: string): void {
    this.toastr.success(mensagem, "Sucesso!");
  }

  mostrarAlertErro(mensagem: string): void {
    this.toastr.error(mensagem, "Erro!");
  }

  buscarPorCpf(): void {
    let usuarioLogado: Usuario = JSON.parse(localStorage.getItem('usuarioLogado') || '{}');
    let cpfCliente = usuarioLogado.cpf;
    this.reservaService.buscarPorCpf(cpfCliente).subscribe(data => {
      this.reservas = data
      let pacotereservado = this.pacotes.filter(item=>this.reservas.some(reserva=>item.codigovoo==reserva.pacote.codigovoo))[0];
      console.log(pacotereservado);
      let indice = this.pacotes.indexOf(pacotereservado);
      console.log(indice);
      if(indice>-1)  this.pacotes.splice(indice,1);
    });
  }
}
