import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { HobbyService } from 'src/app/services/hobby.service';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent implements OnInit {

  sourceVideo: string = '../../../assets/oceans.mp4';

  video: Set<File>;
  progressBar: number = 0;
  statusUpload: string;

  constructor(
    private hobbyService: HobbyService,
    private toastrService: NbToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onChange(event){
    const selectedVideo = <FileList>event.srcElement.files

    this.video = new Set();
    this.video.add(selectedVideo[0]);
    this.progressBar = 0;
  }

  uploadVideo() {

    if(this.video && this.video.size > 0) {
      this.hobbyService.upload(this.video).subscribe((response: HttpEvent<Object>) =>{
      
        if(response.type === HttpEventType.UploadProgress){
          const percentDone = Math.round((response.loaded * 100) / response.total);
          this.progressBar = percentDone;

          if(this.progressBar === 100) {
            this.statusUpload = "Enviado";
          }
          else {
            this.statusUpload = "Carregando";
          }
        }
      })
    }

    else {
      this.toastrService.info('Selecione um vídeo para carregar!', 'Erro');
    }
    }

    voltar() {
      this.router.navigate(['/']);
    }

}
