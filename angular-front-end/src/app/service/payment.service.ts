import { Injectable } from '@angular/core';
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
export class PaymentService {
	
	private completeTransactionUrl = 'http://localhost:8080/paypal-transaction-complete';

	constructor( private _http: HttpClient ) { }
	
	completeTransaction(idOrder): Observable<string> {
		return this._http.post<string>(this.completeTransactionUrl, idOrder, httpOptions);
	}
}
