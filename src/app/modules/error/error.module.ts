import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestErrorComponent } from './test-error/test-error.component';
import { ErrorRoutingModule } from './error-routing.module';
import { ServerErrorComponent } from './server-error/server-error.component';

@NgModule({
  declarations: [TestErrorComponent, ServerErrorComponent],
  imports: [ErrorRoutingModule, CommonModule],
})
export class ErrorModule {}
