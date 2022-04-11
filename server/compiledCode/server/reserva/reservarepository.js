"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservaRepository = void 0;
class ReservaRepository {
    constructor() {
        this.reservas = [];
    }
    cadastrar(reserva) {
        if (this.isReservaHorarioValido(reserva)) {
            this.reservas.push(reserva);
        }
        else {
            throw new Error("Horário de Reserva Inválido!");
        }
    }
    cancelar(reservaCliente) {
        let index = this.reservas.findIndex(reserva => {
            (reserva.cpfCliente === reservaCliente.cpfCliente) && (reserva.pacote.codigovoo === reservaCliente.pacote.codigovoo);
        });
        this.reservas.splice(index, 1);
    }
    buscarTodos() {
        return this.reservas;
    }
    buscarPorCpf(cpf) {
        return this.reservas.filter(reserva => reserva.cpfCliente == cpf);
    }
    isReservaHorarioValido(reservaCliente) {
        var now = new Date();
        let hourAtual = now.getHours();
        let minutesAtual = now.getMinutes();
        let horarioSaida = reservaCliente.pacote.horarioSaida.split(':');
        let hourReserva = parseInt(horarioSaida[0]);
        let minutoReserva = parseInt(horarioSaida[1]);
        return (hourReserva > hourAtual) || ((hourReserva == hourAtual) && (minutoReserva >= minutesAtual));
    }
}
exports.ReservaRepository = ReservaRepository;
//# sourceMappingURL=reservarepository.js.map