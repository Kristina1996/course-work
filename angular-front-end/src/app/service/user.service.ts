import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../model/user';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class UserService {
	
	private userUrl = 'http://localhost:8080/users';
	private registerUserURL = 'http://localhost:8080/auth/signup';
	private getUserURL = 'http://localhost:8080/user/';
	private updateUserURL = 'http://localhost:8080/update';

	//constructor(private _http: Http) { }
	constructor(private _http: HttpClient) { }
	
	readUsers(): Observable<User[]> {
        /*return this._http
			.get("http://localhost:8080/users")
            .pipe(map((res: Response) => res.json()));*/
		
		return this._http.get<User[]>(this.userUrl);
		//return this._http.get(this.userUrl, { responseType: 'json' });
    }
	
	/*
	createUser(user): Observable<User> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		
		return this._http.post(
			'http://localhost:8080/users',
			user,
			options
		).pipe(map((res: Response) => res.json()));
	}
	*/
	
	registerUser(user: User): Observable<string> {
		user.role = [user.role];
		return this._http.post<string>(this.registerUserURL, user, httpOptions);
	}
	
	getUserswithPage(page: number): Observable<User[]> {
		return this._http.get("http://api/dao/getUserswithPage.php?page="+page)
						 .pipe(map((res: Response) => res.json()));
	}
	
	getUser(id): Observable<User> {
		return this._http.get<User>(this.getUserURL + id);
	}
	
	getUserByUsername(username): Observable<User> {
		return this._http.get<User>("http://localhost:8080/profile/" + username);
	}
	
	updateUser(user) {
		user.role = [user.role];
		//user.role = ['user'];
		return this._http.post<string>(this.updateUserURL, user, httpOptions);
	}
	
	deleteUser(id) {
		console.log(id);
		return this._http.delete("http://localhost:8080/users/"+id, httpOptions);
	}
}
