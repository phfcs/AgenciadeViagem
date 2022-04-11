import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Constants } from '../../../../../../commons/constants'; 
import { Voo } from '../../../../../../commons/entidade/voo'; 
import { Reservase } from '../../../../../../commons/entidade/reservase'
import { VooService } from 'src/app/services/voo.service';
import { Usuario } from '../../../../../../commons/entidade/usuario'; 
import { ReservaPassagemService } from 'src/app/services/reservapassagem.service'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reservase',
  templateUrl: './reservase.component.html',
  styleUrls: ['./reservase.component.css']
})
export class ReservaseComponent implements OnInit {

  voos: Voo[] = []
  reservases: Reservase[] = [];

  constructor(
    private title: Title,
    private vooService: VooService,
    private reservapassagemService: ReservaPassagemService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.title.setTitle(Constants.RESERVAS_TITULO);
    this.reset();
  }

  private reset() {
    this.vooService.buscarTodos().subscribe(data => this.voos = data);
    this.buscarPorCpf();
  }

  reservar(voo: Voo): void {
    let usuarioLogado: Usuario = JSON.parse(localStorage.getItem('usuarioLogado') || '{}');
    this.reservapassagemService.cadastrar({
      cpfCliente: usuarioLogado.cpf,
      voo: voo
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

  cancelar(reservase: Reservase): void {
    if (
      confirm(`Deseja confirmar o cancelamento da Reserva para o Vôo com origem ${reservase.voo.localPartida} e destino ${reservase.voo.localDestino}?`)
    ) {
      this.reservapassagemService.cancelar(reservase).subscribe({
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

    this.reservapassagemService.buscarPorCpf(cpfCliente).subscribe(data => this.reservases = data);
  }
}

