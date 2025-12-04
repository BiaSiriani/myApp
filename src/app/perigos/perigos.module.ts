import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PerigosPageRoutingModule } from './perigos-routing.module';
import { PerigosPage } from './perigos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerigosPageRoutingModule
  ],
  declarations: [PerigosPage]
})
export class PerigosPageModule {}