import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Topo } from 'src/app/models/topo.model';
import { TopoService } from 'src/app/services/topo.service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {

  topo: Topo = {
		titulo: '',
		subtitulo: '',
	};

  formError: boolean = false;

  formTopo: FormGroup = new FormGroup({
    titulo: new FormControl ('', Validators.compose([Validators.required])),  
    subtitulo: new FormControl ('', Validators.compose([Validators.required])),    
    });

  constructor(
    private topoService: TopoService, 
    private toastrService: NbToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.topoService.read().subscribe((response: Topo) => {
      this.topo = response[0];
    })
  }

  salvarFormulario():void {

    if(this.formTopo.invalid) {
      this.formError = true;
    } else {
      this.router.navigate(['/']);
      this.toastrService.primary('Atualizado com sucesso!', 'Seção Topo');
      this.topoService.update(this.formTopo.value).subscribe((response) => {
      })

    }
	}

  voltar() {
    this.router.navigate(['/']);
  }

}
