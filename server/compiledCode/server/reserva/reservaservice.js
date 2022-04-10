"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservaService = void 0;
const reservarepository_1 = require("./reservarepository");
class ReservaService {
    constructor() {
        this.reservaRepository = new reservarepository_1.ReservaRepository();
    }
    cadastrar(reserva) {
        this.reservaRepository.cadastrar(reserva);
    }
    cancelar(reserva) {
        this.reservaRepository.cancelar(reserva);
    }
    buscarTodos() {
        return this.reservaRepository.buscarTodos();
    }
    buscarPorCpf(cpf) {
        return this.reservaRepository.buscarPorCpf(cpf);
    }
}
exports.ReservaService = ReservaService;
//# sourceMappingURL=reservaservice.js.map