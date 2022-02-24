import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { UserGit } from '../models/UserGit';

@Injectable({
  providedIn: 'root'
})
export class UserGitHubService {

constructor(private http: HttpService) { }

getUser(username: string): Observable<UserGit> {
  return this.http.get({
    url: 'https://api.github.com/users/'+username
  });
}

}
