import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contato } from '../models/contato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }

  read() {
		return this.http.get('http://localhost:3000/contato');
	}

  update(data: Contato) {
		return this.http.put(`http://localhost:3000/contato/1`, data);
	}
}
