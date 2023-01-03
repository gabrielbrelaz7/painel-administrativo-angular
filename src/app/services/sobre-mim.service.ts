import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SobreMim } from '../models/sobre-mim.model';

@Injectable({
  providedIn: 'root'
})
export class SobreMimService {

  constructor(private http: HttpClient) { }

  read() {
		return this.http.get('http://localhost:3000/sobre-mim');
	}

  update(data: SobreMim) {
		return this.http.put(`http://localhost:3000/sobre-mim/1`, data);
	}
}
