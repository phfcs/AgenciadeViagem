import { Usuario } from "../../commons/entidade/usuario";
import { UsuarioRepository } from "../usuario/usuariorepository"
import '@testing-library/jest-dom';;
describe('Repositório de Usuários', () => {
    var repositorio: UsuarioRepository;

    var usuarioMock: Usuario = {
        nome: "Pedro",
        cpf: "11237691419",
        email: "phfcs@cin.ufpe.br",
        senha: "teste",
        tipo: "CLIENTE"
    };

    var usuarioMock2: Usuario = {
        nome: "Pedro",
        cpf: "04993984081",
        email: "phfcs@cin.ufpe.br",
        senha: "teste",
        tipo: "CLIENTE"
    };

    beforeEach(() => repositorio = new UsuarioRepository());

    it("Não possui registro de usuários", () => {
        expect(repositorio.buscarTodos().length).toBe(0);
    });

    it("Cadastra Usuário com sucesso", () => {
        repositorio.adicionarUsuario(usuarioMock);

        expect(repositorio.existeUsuarioPorCpf(usuarioMock.cpf)).toBe(true);
        expect(repositorio.existeUsuarioPorEmail(usuarioMock.email)).toBe(true);
        expect(repositorio.buscarTodos().length).toBe(1);

        const usuarioCadastrado = repositorio.buscarPorEmailSenha(usuarioMock.email, usuarioMock.senha);

        expect(usuarioCadastrado.email).toBe(usuarioMock.email);
        expect(usuarioCadastrado.cpf).toBe(usuarioMock.cpf);
        expect(usuarioCadastrado.senha).toBe(usuarioMock.senha);
        expect(usuarioCadastrado.tipo).toBe(usuarioMock.tipo);
        expect(usuarioCadastrado.nome).toBe(usuarioMock.nome);
    });

    it("Cadastra Usuário com falha CPF duplicado", () => {
        repositorio.adicionarUsuario(usuarioMock);

        expect(
            function () {
                repositorio.adicionarUsuario(usuarioMock)
            }
        ).toThrowError("Cpf já cadastrado no sistema.");
    });

    it("Cadastra Usuário com falha E-mail duplicado", () => {
        repositorio.adicionarUsuario(usuarioMock2);

        expect(
            function () {
                repositorio.adicionarUsuario(usuarioMock)
            }
        ).toThrowError("E-mail já cadastrado no sistema");
    });
})