import express = require('express');
import { LoginDTO } from '../commons/dto/logindto';
import { Reserva } from '../commons/entidade/reserva';
import { Usuario } from '../commons/entidade/usuario';
import { Hotel } from '../commons/entidade/hotel'; 
import { ReservaService } from './reserva/reservaservice';
import { UsuarioService } from './usuario/usuarioservice'
import {HotelService} from './hotel/hotelservice';

var taserver = express();

var usuarioService: UsuarioService = new UsuarioService();
var hotelService: HotelService = new HotelService();
var reservaService: ReservaService = new ReservaService();

var allowCrossDomain = function (req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

taserver.use(allowCrossDomain);
taserver.use(express.json());


taserver.get('/usuarios', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(usuarioService.buscarTodos()));
})

taserver.get('/hoteis', function (req: express.Request, res: express.Response) {
    res.send(JSON.stringify(hotelService.buscarTodos()));
  })

  taserver.get('/reservas', function (req: express.Request, res: express.Response) {
    res.send(JSON.stringify(reservaService.buscarTodos()));
  })
  
  taserver.get('/reservas/:cpfCliente', function (req: express.Request, res: express.Response) {
    var cpfCliente = req.params.cpfCliente;
    res.send(JSON.stringify(reservaService.buscarPorCpf(cpfCliente)));
  })
  
  taserver.post('/usuarios', function (req: express.Request, res: express.Response) {
    var usuario: Usuario = <Usuario>req.body;
  
    try {
      usuario = usuarioService.cadastrar(usuario);
      res.send({ "mensagem": "Cadastro realizado com sucesso." });
    } catch (error) {
      res.status(400).send({ "mensagem": error.message });
    }
  })
  
  taserver.post('/reservas', function (req: express.Request, res: express.Response) {
    var reserva: Reserva = <Reserva>req.body;
  
    try {
      reservaService.cadastrar(reserva);
      res.send({ "mensagem": "Cadastro realizado com sucesso." });
    } catch (error) {
      res.status(400).send({ "mensagem": error.message });
    }
  })
  
  taserver.post('/reservas/cancelar', function (req: express.Request, res: express.Response) {
    var reserva: Reserva = <Reserva>req.body;
  
    try {
      reservaService.cancelar(reserva);
      res.send({ "mensagem": "Cancelamento realizado com sucesso." });
    } catch (error) {
      res.status(400).send({ "mensagem": error.message });
    }
  })
  taserver.post('/hoteis', function (req: express.Request, res: express.Response) {
    var hotel: Hotel = <Hotel>req.body;
    try {
      hotelService.cadastrar(hotel);
      res.send({ "mensagem": "Cadastro realizado com sucesso." });
    } catch (error) {
      res.status(400).send({ "mensagem": error.message });
    }
  })
  
  taserver.post('/login', function (req: express.Request, res: express.Response) {
    var loginDTO: LoginDTO = <LoginDTO>req.body;
  
    try {
      var usuario = usuarioService.login(loginDTO);
      res.send(JSON.stringify(usuario));
    } catch (error) {
      res.status(400).send({ "mensagem": error.message });
    }
  })
  
  var server = taserver.listen(3000, function () {
    console.log('Agencia de viagens disponível na porta 3000!');
  })
  
  function closeServer(): void {
    server.close();
  }
  
  export { server, closeServer }