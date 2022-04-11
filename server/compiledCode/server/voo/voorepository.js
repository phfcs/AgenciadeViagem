"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VooRepository = void 0;
class VooRepository {
    constructor() {
        this.voos = [];
    }
    adicionar(voo) {
        this.voos.push(voo);
    }
    buscarTodos() {
        return this.voos;
    }
}
exports.VooRepository = VooRepository;
//# sourceMappingURL=voorepository.js.map