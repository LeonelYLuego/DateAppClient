import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../models/member.interface';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CommonModule } from '@angular/common';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-member-details',
  standalone: true,
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css'],
  imports: [CommonModule, TabsModule, GalleryModule],
})
export class MemberDetailsComponent implements OnInit {
  member?: Member;
  images: GalleryItem[] = [];

  constructor(
    private membersService: MembersService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    await this.loadMember();
  }

  async loadMember(): Promise<void> {
    const username = this.route.snapshot.paramMap.get('username');
    if (!username) return;
    this.member = await this.membersService.getMember(username);
    await this.getImages();
  }

  async getImages(): Promise<void> {
    if(!this.member) return;
    // Missing the photos
  }
}
