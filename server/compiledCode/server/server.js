"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeServer = exports.server = void 0;
const express = require("express");
const reservaservice_1 = require("./reserva/reservaservice");
const usuarioservice_1 = require("./usuario/usuarioservice");
const pacoteservice_1 = require("./pacote/pacoteservice");
var taserver = express();
var usuarioService = new usuarioservice_1.UsuarioService();
var pacoteService = new pacoteservice_1.PacoteService();
var reservaService = new reservaservice_1.ReservaService();
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
taserver.get('/pacotes', function (req, res) {
    res.send(JSON.stringify(pacoteService.buscarTodos()));
});
taserver.get('/reservas', function (req, res) {
    res.send(JSON.stringify(reservaService.buscarTodos()));
});
taserver.get('/reservas/:cpfCliente', function (req, res) {
    var cpfCliente = req.params.cpfCliente;
    res.send(JSON.stringify(reservaService.buscarPorCpf(cpfCliente)));
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
taserver.post('/pacotes', function (req, res) {
    var pacote = req.body;
    try {
        pacoteService.cadastrar(pacote);
        res.send({ "mensagem": "Cadastro realizado com sucesso." });
    }
    catch (error) {
        res.status(400).send({ "mensagem": error.message });
    }
});
taserver.post('/pacotes/cancelar', function (req, res) {
    var pacote = req.body;
    try {
        pacoteService.cancelar(pacote);
        res.send({ "mensagem": "Cancelamento realizado com sucesso." });
    }
    catch (error) {
        res.status(400).send({ "mensagem": error.message });
    }
});
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