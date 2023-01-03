import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Frase } from '../models/frase.model';

@Injectable({
  providedIn: 'root'
})
export class FraseService {

  constructor(private http: HttpClient) { }

  read() {
		return this.http.get('http://localhost:3000/frase');
	}

  update(data: Frase) {
		return this.http.put(`http://localhost:3000/frase/1`, data);
	}
}
