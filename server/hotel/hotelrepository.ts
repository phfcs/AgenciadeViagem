import { Hotel } from "../../commons/entidade/hotel"; 

export class HotelRepository {
    hoteis: Hotel[] = [];

    adicionar(hotel: Hotel): void{
        this.hoteis.push(hotel);
    }

    buscarTodos(): Hotel[] {
        return this.hoteis;
    }

}