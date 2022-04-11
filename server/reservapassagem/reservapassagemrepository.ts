import { ReservaPassagem } from "../../commons/entidade/reservapassagem";

export class ReservaPassagemRepository {
    reservaspassagem: ReservaPassagem[] = []
    cadastrar(reservapassagem: ReservaPassagem): void {
        if (this.isReservaHorarioValido(reservapassagem)) {
            this.reservaspassagem.push(reservapassagem);
        } else {
            throw new Error("Horário de Reserva Inválido!");
        }
    }
    cancelar(reservaCliente: ReservaPassagem): void {
        let index = this.reservaspassagem.findIndex(reservapassagem => {
            (reservapassagem.cpfCliente === reservaCliente.cpfCliente) && (reservapassagem.voo.codigoVoo === reservaCliente.voo.codigoVoo)
        })

        this.reservaspassagem.splice(index, 1);
    }
    buscarTodos(): ReservaPassagem[] {
        return this.reservaspassagem;
    }

    buscarPorCpf(cpf: string): ReservaPassagem[] {
        return this.reservaspassagem.filter(reservapassagem => reservapassagem.cpfCliente == cpf)
    }

    isReservaHorarioValido(reservaCliente: ReservaPassagem): boolean {
        var now = new Date();
        let hourAtual = now.getHours();
        let minutesAtual = now.getMinutes();
        let horarioSaida = reservaCliente.voo.horarioSaida.split(':');
        let hourReserva = parseInt(horarioSaida[0]);
        let minutoReserva = parseInt(horarioSaida[1]);

        return (hourReserva > hourAtual) || ((hourReserva == hourAtual) && (minutoReserva >= minutesAtual))
    }
}
