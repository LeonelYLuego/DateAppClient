import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { MembersRoutingModule } from './members-routing.module';

@NgModule({
  declarations: [MemberListComponent, MemberDetailsComponent],
  imports: [MembersRoutingModule, CommonModule],
})
export class MembersModule {}
