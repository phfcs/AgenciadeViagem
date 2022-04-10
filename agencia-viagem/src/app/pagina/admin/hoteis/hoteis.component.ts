import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { HotelService } from 'src/app/services/hotel.service'; 
import {Constants} from '../../../../../../commons/constants';
import { Hotel} from '../../../../../../commons/entidade/hotel';
@Component({
    selector: 'app-hoteis',
    templateUrl: './hoteis.component.html',
    styleUrls: ['./hoteis.component.css']
  })
  export class HotelComponent implements OnInit{
      hotel: Hotel = new Hotel();
      hoteis: Hotel[] = [];

      constructor(
        private titleService: Title,
        private hotelService: HotelService,
        private toastr: ToastrService
      ) { }
      ngOnInit(): void {
        this.reset();
        this.titleService.setTitle(Constants.HOTEIS_TITULO);   
      }
      private reset() {
        this.hotel = new Hotel();
        this.hotelService.buscarTodos().subscribe(data => this.hoteis = data);
      }
    
      cadastrar(): void {
        this.hotelService.cadastrar(this.hotel).subscribe(response => {
          this.mostrarAlertSucesso(response.mensagem)
          this.reset();
        });
      }
      remover(): void {
        this.hotelService
      }
    
      mostrarAlertSucesso(mensagem: string): void {
        this.toastr.success(mensagem, "Sucesso!");
      }
    
    }
      