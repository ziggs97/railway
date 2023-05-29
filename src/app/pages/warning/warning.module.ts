import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarningPageRoutingModule } from './warning-routing.module';

import { WarningPage } from './warning.page';
import { WarningModule } from 'src/app/components/warning/warning.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarningPageRoutingModule,

  ],
  declarations: [WarningPage]
})
export class WarningPageModule {}
