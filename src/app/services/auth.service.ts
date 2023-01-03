import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { NbToastrService } from '@nebular/theme';

@Injectable({
	providedIn: 'root',
})
export class AuthService {

	logado: boolean;

	constructor(
		private http: HttpClient,
		private toastrService: NbToastrService
		) { }

	login(usuario: Usuario): Observable<Usuario[]> {
		return this.http.get<Usuario[]>(
			`http://localhost:3000/usuarios?email=${usuario.email}&senha=${usuario.senha}`
		); 
	}

}
