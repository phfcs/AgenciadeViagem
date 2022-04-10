import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoginDTO } from '../../../../commons/dto/logindto';
import { Hotel } from '../../../../commons/entidade/hotel';
@Injectable({
    providedIn: 'root'
  })
  export class HotelService{
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    constructor(private http: HttpClient) { }
    
    cadastrar(hotel: Hotel): Observable<any> {
        return this.http.post(environment.serverHost + "/hoteis", hotel, { headers: this.headers })
    }

    buscarTodos(): Observable<any> {
        return this.http.get(environment.serverHost + "/hoteis", { headers: this.headers })
  }
}