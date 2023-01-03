import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbProgressBarModule, NbSidebarModule, NbSidebarService, NbToastrModule } from '@nebular/theme';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { TopoComponent } from 'src/app/modules/topo/topo.component';
import { HomepageComponent } from 'src/app/modules/homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SobreMimComponent } from 'src/app/modules/sobre-mim/sobre-mim.component';
import { QueFacoComponent } from 'src/app/modules/que-faco/que-faco.component';
import { HobbyComponent } from 'src/app/modules/hobby/hobby.component';
import { VideoComponent } from 'src/app/components/video/video.component';
import { FraseComponent } from 'src/app/modules/frase/frase.component';
import { ContatoComponent } from 'src/app/modules/contato/contato.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    TopoComponent,
    HomepageComponent,
    SobreMimComponent,
    QueFacoComponent,
    HobbyComponent,
    VideoComponent,
    FraseComponent,
    ContatoComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbEvaIconsModule,
    NbIconModule,
    NbProgressBarModule,

    FormsModule,
    ReactiveFormsModule,
    // NgxMaskModule.forChild()
    NgxMaskModule.forRoot(maskConfig)

    
  ],
  
})
export class DashboardModule { }
