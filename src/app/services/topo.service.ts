import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topo } from '../models/topo.model';

@Injectable({
  providedIn: 'root'
})
export class TopoService {

  constructor(private http: HttpClient) { }

  read() {
		return this.http.get('http://localhost:3000/topo');
	}

  update(data: Topo) {
		return this.http.put(`http://localhost:3000/topo/1`, data);
	}
}
