import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from '../model/jwt-response';
import { AuthLoginInfo } from '../model/login';
import { SignUpInfo } from '../model/signup';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private loginUrl = 'http://localhost:8080/auth/signin';
	private signupUrl = 'http://localhost:8080/auth/signup';

	constructor(private http: HttpClient) {
	}

	attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
		return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
	}

	signUp(info: SignUpInfo): Observable<string> {
		return this.http.post<string>(this.signupUrl, info, httpOptions);
	}
}
