"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VooService = void 0;
const voorepository_1 = require("./voorepository");
class VooService {
    constructor() {
        this.vooRepository = new voorepository_1.VooRepository();
    }
    cadastrar(voo) {
        this.vooRepository.adicionar(voo);
    }
    buscarTodos() {
        return this.vooRepository.buscarTodos();
    }
}
exports.VooService = VooService;
//# sourceMappingURL=vooservice.js.map