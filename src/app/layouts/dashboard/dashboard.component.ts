import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  physicalPositions = NbGlobalPhysicalPosition;

  constructor(private toastrService: NbToastrService, private authService: AuthService) { }

  ngOnInit() {

    if(this.authService.logado === true) {
      this.showMessage('Login efetuado com sucesso!', 'Mensagem', this.physicalPositions.TOP_RIGHT)
    }

   }

  showMessage(message, title, position: NbGlobalPosition) {
    this.toastrService.show(message, title, { position });   
  }


}
