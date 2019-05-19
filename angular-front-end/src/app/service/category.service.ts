import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Category } from '../model/category';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class CategoryService {

	private categoryURL = 'http://localhost:8080/categories';
	private updateCategoryURL = 'http://localhost:8080/updatecategory';
	private paramCategoryURL = 'http://localhost:8080/categories/';

	constructor(private _http: HttpClient) { }
	
	readCategories(): Observable<Category[]> {
		return this._http.get<Category[]>(this.categoryURL);
		//return this._http.get(this.categoryURL, { responseType: 'json' });
    }
	
	createCategory(category: Category): Observable<string> {
		return this._http.post<string>(this.categoryURL, category, httpOptions);
	}
	
	getCategory(id): Observable<Category> {
		return this._http.get<Category>(this.paramCategoryURL + id);
		//return this._http.get(this.paramCategoryURL + id, { responseType: 'json' });
	}
	
	updateCategory(category) {
		return this._http.post<string>(this.updateCategoryURL, category, httpOptions);
	}
	
	deleteCategory(id) {
		console.log(id);
		return this._http.delete(this.paramCategoryURL + id, httpOptions);
	}
}
