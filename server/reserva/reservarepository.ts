import { Reserva } from "../../commons/entidade/reserva";

export class ReservaRepository {
    reservas: Reserva[] = []

    cadastrar(reserva: Reserva): void {
        if (this.isReservaHorarioValido(reserva)) {
            this.reservas.push(reserva);
        } else {
            throw new Error("Horário de Reserva Inválido!");
        }
    }

    cancelar(reservaCliente: Reserva): void {
        let index = this.reservas.findIndex(reserva => {
            (reserva.cpfCliente === reservaCliente.cpfCliente) && (reserva.pacote.codigovoo === reservaCliente.pacote.codigovoo)
        })

        this.reservas.splice(index, 1);
    }

    buscarTodos(): Reserva[] {
        return this.reservas;
    }

    buscarPorCpf(cpf: string): Reserva[] {
        return this.reservas.filter(reserva => reserva.cpfCliente == cpf)
    }

    isReservaHorarioValido(reservaCliente: Reserva): boolean {
        console.log(JSON.stringify(reservaCliente));
        var datavoo = new Date(reservaCliente.pacote.datavoo);
        var now = new Date();
        let hourAtual = now.getHours();
        let minutesAtual = now.getMinutes();
        let horarioSaida = reservaCliente.pacote.horarioSaida.split(':');
        let hourReserva = parseInt(horarioSaida[0]);
        let minutoReserva = parseInt(horarioSaida[1]);
        

        return (now <= datavoo) || (hourReserva > hourAtual)
    }
}