import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FetchAllPlayersService {
  constructor(private http: HttpClient) {}

  public getPlayers(): Observable<any> {
    return this.http.get(environment.url);
  }

  // public getPlayers(): Observable<any> {
  //   return this.http.get('https://api.football-data.org/v2/teams/64', {
  //     headers: new HttpHeaders({
  //       'X-Auth-Token': '9061f255b67b4efb89c6ce5aee9e63de',
  //     }),
  //   });
  // }
}
