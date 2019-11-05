import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule,
  MatPaginatorModule, MatButtonModule} from '@angular/material';

@NgModule({
  exports: [
    CommonModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})
export class MaterialModule {}
