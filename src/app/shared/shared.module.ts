import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, ToastrModule.forRoot(),],
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
})
export class SharedModule {}
