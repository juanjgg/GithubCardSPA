import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserGit } from './models/UserGit';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  public title: string="Find GitHub User"; 

  public user: UserGit = new UserGit();

  constructor() {}

  ngOnInit() {
    this.user.name="Tom Preston-Werner";
    this.user.login="Mojombo";
    this.user.created_at= new Date("2007-10-20T05:24:19Z");
  }

}
