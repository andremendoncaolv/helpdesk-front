import { Injectable } from '@angular/core';
import { Credencias } from '../models/credencias';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(creds: Credencias) {
    return this.http.post(`${API_CONFIG.baseUrl}/user/login`, creds);
  };

  testeconexao(){    
    return this.http.get(`${API_CONFIG.baseUrl}/user`);
  }
}
