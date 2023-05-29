import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarningComponent } from './warning.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [WarningComponent],
  imports: [CommonModule, IonicModule],
  exports: [WarningComponent]
})
export class WarningModule { }
