import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackEnd, FrontEnd, WebDesign } from '../models/que-faco.model';

@Injectable({
  providedIn: 'root'
})
export class QueFacoService {

  constructor(private http: HttpClient) { }

  read() {
		return this.http.get('http://localhost:3000/o-que-faco');
	}

  updateWebDesign(data: WebDesign ) {
		return this.http.put(`http://localhost:3000/o-que-faco/1`, data);
	}

  updateFrontEnd(data: FrontEnd ) {
		return this.http.put(`http://localhost:3000/o-que-faco/2`, data);
	}

  updateBackEnd(data: BackEnd ) {
		return this.http.put(`http://localhost:3000/o-que-faco/3`, data);
	}
}
