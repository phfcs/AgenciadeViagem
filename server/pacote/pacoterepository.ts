import { throws } from 'assert';
import {Pacote} from '../../commons/entidade/pacote';

export class PacoteRepository{
    pacotes: Pacote[] = [];
    adicionar(pacote:Pacote): void{
        this.pacotes.push(pacote);
    }
    buscarTodos(): Pacote[]{
        return this.pacotes;
    }
}