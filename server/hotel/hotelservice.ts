import { Hotel } from "../../commons/entidade/hotel";
import { HotelRepository } from "./hotelrepository"; 

export class HotelService {
    hotelRepository: HotelRepository = new HotelRepository();

    cadastrar(hotel: Hotel): void {
        this.hotelRepository.adicionar(hotel);
    }

    buscarTodos(): Hotel[] {
        return this.hotelRepository.buscarTodos();
    }
}