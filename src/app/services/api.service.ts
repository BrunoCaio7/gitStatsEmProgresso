import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interface } from '../modelsInterface/interface';
import { interfaceRepos } from '../modelsInterface/interfaceRepos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly url:string = "https://api.github.com/users"
  

  /* private readonly urlRepos:string = "https://api.github.com/users/repos"  */

  constructor(private http: HttpClient) { }

  dataUser(userName:string):Observable<Interface> {
    return this.http.get<Interface>(`${this.url}/${userName}`)
  }

   reposUser(userName:string):Observable<interfaceRepos[]> {
    return this.http.get<interfaceRepos[]>(`${this.url}/${userName}/repos`)
  } 

  /* repUser(): Observable<interfaceRepos[]>{
    return this.http.get<interfaceRepos[]>(`${this.url}/repos`)

  } */

}
