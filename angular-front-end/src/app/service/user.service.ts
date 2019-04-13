import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { User } from '../model/user';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	
	 private userUrl = 'http://localhost:8080/users';

	//constructor(private _http: Http) { }
	constructor(private _http: HttpClient) { }
	
	readUsers(): Observable<User[]> {
        /*return this._http
			.get("http://localhost:8080/users")
            .pipe(map((res: Response) => res.json()));*/
		
		return this._http.get(this.userUrl, { responseType: 'json' });
    }
	
	createUser(user): Observable<User> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		
		return this._http.post(
			'http://localhost:8080/users',
			user,
			options
		).pipe(map((res: Response) => res.json()));
	}
	
	getUserswithPage(page: number): Observable<User[]> {
		return this._http.get("http://api/dao/getUserswithPage.php?page="+page)
						 .pipe(map((res: Response) => res.json()));
	}
	
	getUser(id): Observable<User> {
		return this._http.get("http://localhost:8084/rest-service/user/"+id)
			.pipe(map((res: Response) => res.json()));
	}
	
	updateUser(user) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		
		return this._http.post(
			"http://localhost:8084/rest-service/update",
			user,
			options
		).pipe(map((res: Response) => res.json()));
	}
	
	deleteUser(id) {
		console.log(id);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		
		return this._http.delete(
			"http://localhost:8084/rest-service/users/"+id,
			options
		);
	}
}
