import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard, noAuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../modules/home/home.module').then((m) => m.HomeModule),
    canActivate: [noAuthGuard],
  },
  {
    path: 'members',
    loadChildren: () =>
      import('../../modules/members/members.module').then(
        (m) => m.MembersModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'lists',
    loadChildren: () =>
      import('../../modules/lists/lists.module').then((m) => m.ListsModule),
    canActivate: [authGuard],
  },
  {
    path: 'messages',
    loadChildren: () =>
      import('../../modules/messages/messages.module').then(
        (m) => m.MessagesModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'error',
    loadChildren: () =>
      import('../../modules/error/error.module').then((m) => m.ErrorModule),
    canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
