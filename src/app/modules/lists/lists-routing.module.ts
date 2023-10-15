import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ListsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsRoutingModule {}
