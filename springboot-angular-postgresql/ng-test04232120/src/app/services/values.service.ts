import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get<any[]>(environment.url + "/values");
  }

}
