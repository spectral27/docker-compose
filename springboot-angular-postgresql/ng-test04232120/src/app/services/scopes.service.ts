import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScopesService {

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get<any[]>(environment.url + "/scopes")
  }

}
