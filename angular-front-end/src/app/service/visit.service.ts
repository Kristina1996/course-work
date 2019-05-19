import { Injectable, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class VisitService {
	
	private conferencesURL = 'http://localhost:8080/conferences';
	private myConferencesURL = 'http://localhost:8080/myconferences/';
	private favouritesConferencesURL = 'http://localhost:8080/favouritesconferences/';
	
	private totalVisitsURL = 'http://localhost:8080/totalvisits/';

	constructor( private _http: HttpClient ) { }

}
