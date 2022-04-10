"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelRepository = void 0;
class HotelRepository {
    constructor() {
        this.hoteis = [];
    }
    adicionar(hotel) {
        this.hoteis.push(hotel);
    }
    buscarTodos() {
        return this.hoteis;
    }
}
exports.HotelRepository = HotelRepository;
//# sourceMappingURL=hotelrepository.js.map