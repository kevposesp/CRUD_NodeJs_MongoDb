import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  get(path:string): Observable<any> {
    return this.http.get(path)
    // return this.http.get(`${environment.api_url}${path}`, { params })
      // .pipe(catchError(this.formatErrors));
  }

}
