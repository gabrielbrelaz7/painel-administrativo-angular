import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { BackEnd, FrontEnd, QueFaco, WebDesign } from 'src/app/models/que-faco.model';
import { QueFacoService } from 'src/app/services/que-faco.service';

@Component({
  selector: 'app-que-faco',
  templateUrl: './que-faco.component.html',
  styleUrls: ['./que-faco.component.scss']
})
export class QueFacoComponent implements OnInit {

  queFaco: QueFaco;

  webdesign: WebDesign = {
		texto: '',
	};

  frontEnd: FrontEnd = {
		texto: '',
	};

  backEnd: BackEnd = {
		texto: '',
	};

  formError: boolean = false;

  formWebDesign: FormGroup = new FormGroup({
    texto: new FormControl ('', Validators.compose([Validators.required])),  
  });

  formFrontEnd: FormGroup = new FormGroup({
    texto: new FormControl ('', Validators.compose([Validators.required])),  
  });

  formBackEnd: FormGroup = new FormGroup({
    texto: new FormControl ('', Validators.compose([Validators.required])),  
  });


  constructor(
    private queFacoService: QueFacoService, 
    private toastrService: NbToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.queFacoService.read().subscribe((response: QueFaco) => {
      this.webdesign = response[0];
      this.frontEnd = response[1];
      this.backEnd = response[2];
    })
  }


  salvarFormularioWebDesign():void {

    if(this.formWebDesign.invalid) {
      this.formError = true;
    } else {
      this.queFacoService.updateWebDesign(this.formWebDesign.value).subscribe(() => {
        this.router.navigate(['/']);
        this.toastrService.primary('Atualizado com sucesso!', 'Web Design');
      })

    }
	}

  salvarFormularioFrontEnd():void {

    if(this.formFrontEnd.invalid) {
      this.formError = true;
    } else {
      this.queFacoService.updateFrontEnd(this.formFrontEnd.value).subscribe(() => {
        this.router.navigate(['/']);
        this.toastrService.primary('Atualizado com sucesso!', 'Frontend');
      })

    }
	}

  salvarFormularioBackEnd():void {

    if(this.formBackEnd.invalid) {
      this.formError = true;
    } else {
      this.queFacoService.updateBackEnd(this.formBackEnd.value).subscribe(() => {
        this.router.navigate(['/']);
        this.toastrService.primary('Atualizado com sucesso!', 'Backend');
      })

    }
	}

  voltar() {
    this.router.navigate(['/']);
  }

}
