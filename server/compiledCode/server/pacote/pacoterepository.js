"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacoteRepository = void 0;
class PacoteRepository {
    constructor() {
        this.pacotes = [];
    }
    adicionar(pacote) {
        this.pacotes.push(pacote);
    }
    cancelar(pacoteAdmin) {
        let index = this.pacotes.findIndex(pacote => {
            (pacote.codigovoo === pacoteAdmin.codigovoo) && (pacote.empresa === pacoteAdmin.empresa);
        });
        this.pacotes.splice(index, 1);
    }
    buscarTodos() {
        return this.pacotes;
    }
}
exports.PacoteRepository = PacoteRepository;
//# sourceMappingURL=pacoterepository.js.map