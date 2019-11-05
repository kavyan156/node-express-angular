import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(userPerPage: number, currentPage: number) {
    const queryParams = `?page=${currentPage}&per_page=${userPerPage}`;
    return this.http.get(environment.baseUrl + '/users' + queryParams);
}
}
