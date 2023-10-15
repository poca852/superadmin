import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  exports: [
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
