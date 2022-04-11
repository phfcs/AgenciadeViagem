"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeServer = exports.server = void 0;
const express = require("express");
const reservaservice_1 = require("./reserva/reservaservice");
const usuarioservice_1 = require("./usuario/usuarioservice");
const hotelservice_1 = require("./hotel/hotelservice");
const vooservice_1 = require("./voo/vooservice");
const reservapassagemservice_1 = require("./reservapassagem/reservapassagemrepository");
var taserver = express();
var vooService = new vooservice_1.VooService();
var usuarioService = new usuarioservice_1.UsuarioService();
var hotelService = new hotelservice_1.HotelService();
var reservaService = new reservaservice_1.ReservaService();
var reservapassagemService = new reservapassagemservice_1.ReservaPassagemService();
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
taserver.use(allowCrossDomain);
taserver.use(express.json());
taserver.get('/usuarios', function (req, res) {
    res.send(JSON.stringify(usuarioService.buscarTodos()));
});
taserver.get('/voos', function (req, res) {
    res.send(JSON.stringify(vooService.buscarTodos()));
});
taserver.get('/reservapassagem', function (req, res) {
    res.send(JSON.stringify(reservapassagemService.buscarTodos()));
});
taserver.get('/hoteis', function (req, res) {
    res.send(JSON.stringify(hotelService.buscarTodos()));
});
taserver.get('/reservas', function (req, res) {
    res.send(JSON.stringify(reservaService.buscarTodos()));
});
taserver.get('/reservas/:cpfCliente', function (req, res) {
    var cpfCliente = req.params.cpfCliente;
    res.send(JSON.stringify(reservaService.buscarPorCpf(cpfCliente)));
});
taserver.get('/reservapassagem/:cpfCliente', function (req, res) {
    var cpfCliente = req.params.cpfCliente;
    res.send(JSON.stringify(reservapassagemService.buscarPorCpf(cpfCliente)));
});
taserver.post('/usuarios', function (req, res) {
    var usuario = req.body;
    try {
        usuario = usuarioService.cadastrar(usuario);
        res.send({ "mensagem": "Cadastro realizado com sucesso." });
    }
    catch (error) {
        res.status(400).send({ "mensagem": error.message });
    }
});
//HOTEL
taserver.post('/reservas', function (req, res) {
    var reserva = req.body;
    try {
        reservaService.cadastrar(reserva);
        res.send({ "mensagem": "Cadastro realizado com sucesso." });
    }
    catch (error) {
        res.status(400).send({ "mensagem": error.message });
    }
});
taserver.post('/reservas/cancelar', function (req, res) {
    var reserva = req.body;
    try {
        reservaService.cancelar(reserva);
        res.send({ "mensagem": "Cancelamento realizado com sucesso." });
    }
    catch (error) {
        res.status(400).send({ "mensagem": error.message });
    }
});
//VOO
taserver.post('/reservapassagem', function (req, res) {
    var reservapassagem = req.body;
    try {
        reservapassagemServiceService.cadastrar(reservapassagem);
        res.send({ "mensagem": "Cadastro realizado com sucesso." });
    }
    catch (error) {
        res.status(400).send({ "mensagem": error.message });
    }
});
taserver.post('/reservapassagem/cancelar', function (req, res) {
    var reservapassagem = req.body;
    try {
        reservaService.cancelar(reservapassagem);
        res.send({ "mensagem": "Cancelamento realizado com sucesso." });
    }
    catch (error) {
        res.status(400).send({ "mensagem": error.message });
    }
});

//VOOS
taserver.post('/voos', function (req, res) {
    var voo = req.body;
    try {
        vooService.cadastrar(voo);
        res.send({ "mensagem": "Cadastro realizado com sucesso." });
    }
    catch (error) {
        res.status(400).send({ "mensagem": error.message });
    }
});
//HOTEIS
taserver.post('/hoteis', function (req, res) {
    var hotel = req.body;
    try {
        hotelService.cadastrar(hotel);
        res.send({ "mensagem": "Cadastro realizado com sucesso." });
    }
    catch (error) {
        res.status(400).send({ "mensagem": error.message });
    }
});
//LOGIN
taserver.post('/login', function (req, res) {
    var loginDTO = req.body;
    try {
        var usuario = usuarioService.login(loginDTO);
        res.send(JSON.stringify(usuario));
    }
    catch (error) {
        res.status(400).send({ "mensagem": error.message });
    }
});
var server = taserver.listen(3000, function () {
    console.log('Agencia de viagens disponível na porta 3000!');
});
exports.server = server;
function closeServer() {
    server.close();
}
exports.closeServer = closeServer;
//# sourceMappingURL=server.js.map