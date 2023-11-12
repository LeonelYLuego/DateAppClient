import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { MembersRoutingModule } from './members-routing.module';
import { MembersService } from './members.service';
import { MemberCardComponent } from './member-card/member-card.component';

@NgModule({
  declarations: [MemberListComponent, MemberDetailsComponent, MemberCardComponent],
  providers: [MembersService],
  imports: [MembersRoutingModule, CommonModule],
})
export class MembersModule {}
