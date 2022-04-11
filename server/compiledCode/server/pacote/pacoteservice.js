"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacoteService = void 0;
const pacoterepository_1 = require("./pacoterepository");
class PacoteService {
    constructor() {
        this.pacoteRepository = new pacoterepository_1.PacoteRepository();
    }
    cadastrar(pacote) {
        this.pacoteRepository.adicionar(pacote);
    }
    buscarTodos() {
        return this.pacoteRepository.buscarTodos();
    }
}
exports.PacoteService = PacoteService;
//# sourceMappingURL=pacoteservice.js.map