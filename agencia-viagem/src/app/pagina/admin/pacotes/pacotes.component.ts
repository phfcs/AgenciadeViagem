import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Pacote } from '../../../../../../commons/entidade/pacote';
import {Constants} from '../../../../../../commons/constants';
import { PacoteService } from 'src/app/services/pacote.service'; 

@Component({
    selector: 'app-pacotes',
    templateUrl: './pacotes.component.html',
    styleUrls: ['./pacotes.component.css']
  })

  export class PacotesComponent implements OnInit {

    pacote: Pacote = new Pacote();
    pacotes: Pacote[] = [];
  
    constructor(
      private titleService: Title,
      private pacoteService: PacoteService,
      private toastr: ToastrService
    ) { }
    ngOnInit(): void {
        this.reset();
        this.titleService.setTitle(Constants.PACOTES_TITULO);
      }
      private reset() {
        this.pacote = new Pacote();
        this.pacoteService.buscarTodos().subscribe(data => this.pacotes = data);
      }
    
      cadastrar(): void {
        this.pacoteService.cadastrar(this.pacote).subscribe(response => {
          this.mostrarAlertSucesso(response.mensagem)
          this.reset();
        });
      }

      cancelar(pacote: Pacote): void {
        if (
          confirm(`Deseja confirmar o cancelamento do Pacote com Vôo com origem ${pacote.localPartida} e destino ${pacote.localDestino}?`)
        ) {
          this.pacoteService.cancelar(pacote).subscribe({
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
    
    }
    