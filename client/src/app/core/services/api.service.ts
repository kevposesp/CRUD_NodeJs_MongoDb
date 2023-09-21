import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  set(path: string, data: {}): Observable<any> {
    return this.http.post(path, data);
  }

  get(path: string): Observable<any> {
    return this.http.get(path);
  }

  getById(path: string, id: string): Observable<any> {
    return this.http.post(path, { id });
  }

  deleteById(path: string, id: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', //  ajusta los encabezados según tus necesidades
      }),
      body: { id }, // Cuerpo de la solicitud DELETE si es necesario
    };

    return this.http.delete(path, options);
  }

  deleteAll(path: string): Observable<any> {
    return this.http.delete(path);
  }

  update(path: string, data: {}): Observable<any> {
    return this.http.put(path, data);
  }
}
