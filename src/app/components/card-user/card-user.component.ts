import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Alert } from 'selenium-webdriver';
import { HttpService } from 'src/app/services/http.service';
import { UserGit } from './models/UserGit';
import { UserGitHubService } from './service/userGitHub.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

  public formSearch: FormGroup = new FormGroup({
    search: new FormControl("mojombo", Validators.required)
  });

  public title: string = "Find GitHub User";

  public user: UserGit;
  public userDefault: UserGit = new UserGit();
  public hiddenCard: boolean= false;
  constructor(private userGitHubService: UserGitHubService) { }

  ngOnInit() {
    if (this.formSearch.get('search').valid) {
      this.getUserGitHub();
    }
  }

  getUserGitHub() {

    if (this.formSearch.get('search').valid) {
      this.user = new UserGit()

      this.userGitHubService.getUser(this.formSearch.get('search').value).subscribe(
        res => {
          if (res) {
            this.user = JSON.parse(JSON.stringify(res));
            this.hiddenCard=false;
          }
          console.log("despues", this.user);
        },
        err => {
          this.hiddenCard=true;
        }
      );
    }else{
      alert("El campo de búsqueda es requerido")
    }
   
  }
}
