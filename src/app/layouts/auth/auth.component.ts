import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbGlobalPhysicalPosition, NbGlobalPosition, NbToastRef, NbToastrService } from '@nebular/theme';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

	formError: boolean = false;
	physicalPositions = NbGlobalPhysicalPosition;


	formUsuario: FormGroup = new FormGroup({
	email: new FormControl ('', Validators.compose([Validators.required, Validators.email])),  
	senha: new FormControl ('', Validators.compose([Validators.required, Validators.minLength(6)])),    
	});

	constructor(
	private authService: AuthService,
	private router: Router,
	private toastrService: NbToastrService
	) {}


  ngOnInit(): void {
	const token = window.localStorage.getItem('token');
	if(token) {
		this.router.navigate(['/']);
	} 
  }


  showToast(message, title, position: NbGlobalPosition) {
    this.toastrService.show(message, title, { position });
  }


  salvarUsuario() {

	if(this.formUsuario.invalid) {
		this.formError = true;
	} else {
		this.authService.login(this.formUsuario.value).subscribe((usuario: Usuario[]) => {
			console.log(usuario);
			if(usuario.length === 0) {
				this.showToast('Não foi possível realizar o login!' , 
				'Usuário não autenticado', 
				this.physicalPositions.TOP_RIGHT);
			}
			else{
				window.localStorage.setItem('token', usuario[0].access_token);
				this.authService.logado = true;
				this.router.navigate(['/']);
			}
		});
	}
	}

}
