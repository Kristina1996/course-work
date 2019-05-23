import { Injectable, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Conference } from '../model/conference';
import { Category } from '../model/category';
import { User } from '../model/user';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class ConferenceService {
	
	user: User;

	private conferencesURL = 'http://localhost:8080/conferences';
	private myConferencesURL = 'http://localhost:8080/myconferences/';
	private favouritesConferencesURL = 'http://localhost:8080/favouritesconferences/';
	
	private conferenceIdURL = 'http://localhost:8080/conferences/';
	private updateConferenceURL = 'http://localhost:8080/updateconference';
	private editStatusURL = 'http://localhost:8080/editStatus';
	
	private paramCategoryURL = 'http://localhost:8080/categories/';
	private likeConferenceURL = 'http://localhost:8080/like/';
	private getConfByStatusURL = 'http://localhost:8080/conferences/status/';
	private visitedConferencesURL = 'http://localhost:8080/visited/';

	constructor( private _http: HttpClient ) { }
	
	readConferences(): Observable<Conference[]> {
		return this._http.get<Conference[]>(this.conferencesURL);
    }
	
	getConferencesByStatus(status): Observable<Conference[]> {
		return this._http.get<Conference[]>(this.getConfByStatusURL + status);
    }
	
	getMyConferences(user: User): Observable<Conference[]> {
		return this._http.get<Conference[]>(this.myConferencesURL + user.id);
    }
	
	getVisitedConferences(idUser): Observable<Conference[]> {
		return this._http.get<Conference[]>(this.visitedConferencesURL + idUser);
    }
	
	getFavouritesConferences(user): Observable<Conference[]> {
		console.log("get favourites");
		return this._http.get<Conference[]>(this.favouritesConferencesURL + user.id);
    }
	
	createConference(conference: Conference, currentDate, user): Observable<Conference> {
		conference.status = 0;
		conference.visits = 0;
		conference.creationDate = currentDate;
		conference.author = user;
		
		return this._http.post<Conference>(this.conferencesURL, conference, httpOptions);
	}
	
	getCategory(id): Observable<Category> {
		return this._http.get<Category>(this.paramCategoryURL, id);
	}
	
	likeConference(idConference, idUser) {
		return this._http.get<>(this.likeConferenceURL + idConference + "/" + idUser);
	}
	
	editStatus(conference: Conference): Observable<Conference> {
		console.log(conference);
		return this._http.post<Conference>(this.updateConferenceURL, conference, httpOptions);
	}
	
	getConference(id): Observable<Conference> {
		return this._http.get<Conference>(this.conferenceIdURL + id);
		//return this._http.get(this.conferenceIdURL + id, { responseType: 'json' });
	}
	
	updateConference(conference, category, author) {
		conference.category = category;
		conference.author = author;
		console.log(conference);
		return this._http.post<string>(this.updateConferenceURL, conference, httpOptions);
	}
	
	deleteConference(id) {
		console.log(id);
		return this._http.delete(this.conferenceIdURL + id, httpOptions);
	}
}
