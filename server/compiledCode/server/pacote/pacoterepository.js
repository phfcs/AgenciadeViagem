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
    buscarTodos() {
        return this.pacotes;
    }
}
exports.PacoteRepository = PacoteRepository;
//# sourceMappingURL=pacoterepository.js.map