import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
})
export class SharedModule {}
