import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Contato } from 'src/app/models/contato.model';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  contato: Contato = {
		celular: '',
    email: ''
	};

  formError: boolean = false;

  formContato: FormGroup = new FormGroup({
    celular: new FormControl ('', Validators.compose([Validators.required])), 
    email: new FormControl ('', Validators.compose([Validators.required, Validators.email])), 
  });

  constructor(
    private toastrService: NbToastrService,
    private router: Router,
    private contatoService: ContatoService
  ) { }

  ngOnInit(): void {
    this.contatoService.read().subscribe((response: Contato) => {
      this.contato = response[0];
    })
  }

  salvarFormulario():void {

    if(this.formContato.invalid) {
      this.formError = true;
    } else {
      this.contatoService.update(this.formContato.value).subscribe(() => {
        this.router.navigate(['/']);
        this.toastrService.primary('Atualizado com sucesso!', 'Seção Contato');
      })

    }
	}

  voltar() {
    this.router.navigate(['/']);
  }

}
