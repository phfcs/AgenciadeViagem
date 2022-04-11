import { Pacote } from "../../commons/entidade/pacote";
import { PacoteRepository } from "./pacoterepository";

export class PacoteService{
    pacoteRepository: PacoteRepository = new PacoteRepository();

    cadastrar(pacote: Pacote): void {
        this.pacoteRepository.adicionar(pacote);
    }

    buscarTodos(): Pacote[] {
        return this.pacoteRepository.buscarTodos();
    }
}