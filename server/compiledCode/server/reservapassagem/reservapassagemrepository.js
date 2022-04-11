"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservaPassagemRepository = void 0;
class ReservaPassagemRepository{
    constructor(){
        this.reservapassagem = [];
    }
    cadastrar(reservapassagem){
        if (this.isReservaHorarioValido(reservapassagem)) {
            this.reservas.push(reservapassagem);
        }
        else {
            throw new Error("Horário de Reserva Inválido!");
        }
    }
    cancelar(reservaCliente) {
        let index = this.reservas.findIndex(reservapassagem => {
            (this.reservapassagem.cpfCliente === reservaCliente.cpfCliente) && (this.reservapassagem.voo.codigoVoo === reservaCliente.voo.codigoVoo);
        });
        this.reservapassagem.splice(index, 1);
    }
    buscarTodos() {
        return this.reservapassagem;
    }
    buscarPorCpf(cpf) {
        return this.reservapassagem.filter(reservapassagem => reservapassagem.cpfCliente == cpf);
    }
    isReservaHorarioValido(reservaCliente) {
        var now = new Date();
        let hourAtual = now.getHours();
        let minutesAtual = now.getMinutes();
        let horarioSaida = reservaCliente.voo.horarioSaida.split(':');
        let hourReserva = parseInt(horarioSaida[0]);
        let minutoReserva = parseInt(horarioSaida[1]);
        return (hourReserva > hourAtual) || ((hourReserva == hourAtual) && (minutoReserva >= minutesAtual));
    }
}
exports.ReservaPassagemRepositoryRepository = ReservaPassagemRepositoryRepository;
//# sourceMappingURL=reservarepository.js.