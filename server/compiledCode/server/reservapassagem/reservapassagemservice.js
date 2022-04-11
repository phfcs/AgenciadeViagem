"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservaPassagemService = void 0;
const reservapassagemrepository_1 = require("./reservarepassagempository");
class ReservaPassagemService {
    constructor(){
        this.reservapassagemRepostory = new reservapassagemrepository_1.reservapassagemRepostory();
    }
    cadastrar(reservapassagem){
        this.reservapassagemRepostory.cadastrar(reservapassagem);
    }
    cancelar(reservapassagem){
        this.reservapassagemRepostory.cancelar(reservapassagem);
    }
    buscarTodos(){
        return this.reservapassagemRepostory.buscarTodos();
    }
    buscarPorCpf(cpf){
        return this.reservapassagemRepostory.buscarPorCpf(cpf);
    }
}
exports.ReservaPassagemServiceService = ReservaPassagemServiceService;
//# sourceMappingURL=reservapasasgemservice.js.map