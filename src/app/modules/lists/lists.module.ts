import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists/lists.component';
import { ListsRoutingModule } from './lists-routing.module';

@NgModule({
  declarations: [ListsComponent],
  imports: [ListsRoutingModule, CommonModule],
})
export class ListsModule {}
