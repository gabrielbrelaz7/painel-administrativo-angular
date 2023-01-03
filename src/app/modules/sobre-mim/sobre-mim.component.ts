import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { SobreMim } from 'src/app/models/sobre-mim.model';
import { SobreMimService } from 'src/app/services/sobre-mim.service';

@Component({
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.component.html',
  styleUrls: ['./sobre-mim.component.scss']
})
export class SobreMimComponent implements OnInit {

  sobreMim: SobreMim = {
		texto: '',
	};

  formError: boolean = false;

  formSobreMim: FormGroup = new FormGroup({
    texto: new FormControl ('', Validators.compose([Validators.required])),  
  });

  constructor(
    private sobreMimService: SobreMimService, 
    private toastrService: NbToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sobreMimService.read().subscribe((response: SobreMim) => {
      this.sobreMim = response[0];
    })
  }

  salvarFormulario():void {

    if(this.formSobreMim.invalid) {
      this.formError = true;
    } else {
      this.sobreMimService.update(this.formSobreMim.value).subscribe(() => {
        this.router.navigate(['/']);
        this.toastrService.primary('Atualizado com sucesso!', 'Seção Sobre mim');
      })

    }
	}

  voltar() {
    this.router.navigate(['/']);
  }

}
