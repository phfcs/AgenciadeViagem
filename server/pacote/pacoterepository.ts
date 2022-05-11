import { throws } from 'assert';
import {Pacote} from '../../commons/entidade/pacote';

export class PacoteRepository{
    pacotes: Pacote[] = [];
    adicionar(pacote:Pacote): void{
        this.pacotes.push(pacote);
    }
    cancelar(pacoteAdmin: Pacote): void {
        let index = this.pacotes.findIndex(pacote => {
            (pacote.codigovoo === pacoteAdmin.codigovoo) && (pacote.empresa === pacoteAdmin.empresa)
        })

        this.pacotes.splice(index, 1);
    }
    buscarTodos(): Pacote[]{
        return this.pacotes;
    }
}