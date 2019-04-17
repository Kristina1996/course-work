import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Conference } from '../model/conference';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class ConferenceService {

	private getConferencesURL = 'http://localhost:8080/conferences';
	private createConferenceURL = 'http://localhost:8080/conferences';
	private getConferenceURL = 'http://localhost:8080/conferences/';
	private updateConferenceURL = 'http://localhost:8080/updateconference';
	private publishblockConferenceURL = 'http://localhost:8080/publishconference';

	constructor(private _http: HttpClient) { }
	
	readConferences(): Observable<Conference[]> {
		return this._http.get(this.getConferencesURL, { responseType: 'json' });
    }
	
	createConference(conference: Conference): Observable<string> {
		return this._http.post<string>(this.createConferenceURL, conference, httpOptions);
	}
	
	publishblockConference(id): Observable<Conference> {
		return this._http.get(this.publishblockConferenceURL + id, { responseType: 'json' });
	}
	
	// Не реализовано
	getConferenceswithPage(page: number): Observable<Conference[]> {
		return this._http.get("http://api/dao/getUserswithPage.php?page=" + page)
						 .pipe(map((res: Response) => res.json()));
	}
	
	getConference(id): Observable<Conference> {
		return this._http.get(this.getConferenceURL + id, { responseType: 'json' });
	}
	
	updateConference(conference) {
		return this._http.post<string>(this.updateConferenceURL, conference, httpOptions);
	}
	
	deleteConference(id) {
		console.log(id);
		return this._http.delete("http://localhost:8080/users/" + id, httpOptions);
	}
}
