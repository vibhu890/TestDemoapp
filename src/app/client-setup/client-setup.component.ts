import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { ClientBasicComponent } from './client-basic/client-basic.component';
import { ClientServicesComponent } from './client-services/client-services.component';
import { ClientLanguageComponent } from './client-language/client-language.component';
import { ClientReviewComponent } from './client-review/client-review.component';




@Component({
  selector: 'app-client-setup',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,

  ],
  templateUrl: './client-setup.component.html',
  styleUrls: ['./client-setup.component.scss']
})

export class ClientSetupComponent {
  
}