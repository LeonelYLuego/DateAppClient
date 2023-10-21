import { RouterModule, Routes } from '@angular/router';
import { TestErrorComponent } from './test-error/test-error.component';
import { NgModule } from '@angular/core';
import { ServerErrorComponent } from './server-error/server-error.component';

const routes: Routes = [
  {
    path: '',
    component: TestErrorComponent,
  },
  {
    path: 'details',
    component: ServerErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
