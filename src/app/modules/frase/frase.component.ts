import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Frase } from 'src/app/models/frase.model';
import { FraseService } from 'src/app/services/frase.service';

@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html',
  styleUrls: ['./frase.component.scss']
})
export class FraseComponent implements OnInit {

  frase: Frase = {
		texto: '',
	};

  formError: boolean = false;

  formFrase: FormGroup = new FormGroup({
    texto: new FormControl ('', Validators.compose([Validators.required])),  
  });

  constructor(
    private toastrService: NbToastrService,
    private router: Router,
    private fraseService: FraseService
  ) { }

  ngOnInit(): void {
    this.fraseService.read().subscribe((response: Frase) => {
      this.frase = response[0];
    })
  }

  salvarFormulario():void {

    if(this.formFrase.invalid) {
      this.formError = true;
    } else {
      this.fraseService.update(this.formFrase.value).subscribe(() => {
        this.router.navigate(['/']);
        this.toastrService.primary('Atualizado com sucesso!', 'Seção Frase');
      })

    }
	}

  voltar() {
    this.router.navigate(['/']);
  }

}
