import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Reservase } from '../../../../commons/entidade/reservase';
@Injectable({
    providedIn: 'root'
  })
  export class ReservaPassagemService {
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }
  
    cadastrar(reservapassagem: Reservase): Observable<any> {
      return this.http.post(environment.serverHost + "/reservapassagem", reservapassagem, { headers: this.headers })
    }
  
    cancelar(reservapassagem: Reservase): Observable<any> {
      return this.http.post(environment.serverHost + "/reservapassagem/cancelar", reservapassagem, { headers: this.headers })
    }
  
    buscarTodos(): Observable<any> {
      return this.http.get(environment.serverHost + "/reservapassagem", { headers: this.headers })
    }
  
    buscarPorCpf(cpf: string): Observable<any>{
      return this.http.get(environment.serverHost + "/reservapassagem" + cpf, { headers: this.headers })
    }
  
  }
  