import { ReservaPassagem } from "../../commons/entidade/reservapassagem";
import { ReservaPassagemRepository } from "./reservapassagemrepository";

export class ReservaPassagemService {
    reservapassagemRepository: ReservaPassagemRepository = new ReservaPassagemRepository();
    cadastrar(reservapassagem: ReservaPassagem): void {
        this.reservapassagemRepository.cadastrar(reservapassagem);
    }

    cancelar(reservapassagem: ReservaPassagem): void {
        this.reservapassagemRepository.cancelar(reservapassagem);
    }

    buscarTodos(): ReservaPassagem[] {
        return this.reservapassagemRepository.buscarTodos();
    }

    buscarPorCpf(cpf: string): ReservaPassagem[] {
        return this.reservapassagemRepository.buscarPorCpf(cpf);
    }
}