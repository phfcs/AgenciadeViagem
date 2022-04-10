"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelService = void 0;
const hotelrepository_1 = require("./hotelrepository");
class HotelService {
    constructor() {
        this.hotelRepository = new hotelrepository_1.HotelRepository();
    }
    cadastrar(hotel) {
        this.hotelRepository.adicionar(hotel);
    }
    buscarTodos() {
        return this.hotelRepository.buscarTodos();
    }
}
exports.HotelService = HotelService;
//# sourceMappingURL=hotelservice.js.map