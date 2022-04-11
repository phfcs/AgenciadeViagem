import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoginDTO } from '../../../../commons/dto/logindto'
import { Pacote } from '../../../../commons/entidade/pacote';
@Injectable({
    providedIn: 'root'
  })
export class PacoteService {
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }
  
    cadastrar(pacote: Pacote): Observable<any> {
      return this.http.post(environment.serverHost + "/pacotes", pacote, { headers: this.headers })
    }
  
    buscarTodos(): Observable<any> {
      return this.http.get(environment.serverHost + "/pacotes", { headers: this.headers })
    }
  
  }