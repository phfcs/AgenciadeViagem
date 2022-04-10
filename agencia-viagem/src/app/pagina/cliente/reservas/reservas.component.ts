import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Constants } from '../../../../../../commons/constants';
import { Hotel } from '../../../../../../commons/entidade/hotel';
import { Reserva } from '../../../../../../commons/entidade/reserva'; 
import { HotelService } from 'src/app/services/hotel.service';
import { Usuario } from '../../../../../../commons/entidade/usuario';
import { ReservaService } from 'src/app/services/reserva.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  hoteis: Hotel[] = []
  reservas: Reserva[] = [];

  constructor(
    private title: Title,
    private hotelService: HotelService,
    private reservaService: ReservaService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.title.setTitle(Constants.RESERVAS_TITULO);
    this.reset();
  }

  private reset() {
    this.hotelService.buscarTodos().subscribe(data => this.hoteis = data);
    this.buscarPorCpf();
  }

  reservar(hotel: Hotel): void {
    let usuarioLogado: Usuario = JSON.parse(localStorage.getItem('usuarioLogado') || '{}');
    this.reservaService.cadastrar({
      cpfCliente: usuarioLogado.cpf,
      hotel: hotel
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
      confirm(`Deseja confirmar o cancelamento da Reserva para o Hotel com Check-in no dia ${reserva.hotel.checkin} e Check-out no dia ${reserva.hotel.checkout}?`)
    ) {
      this.reservaService.cancelar(reserva).subscribe({
        next: (response) => {
          this.mostrarAlertSucesso(response.mensagem);
          this.buscarPorCpf();
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

    this.reservaService.buscarPorCpf(cpfCliente).subscribe(data => this.reservas = data);
  }
}
