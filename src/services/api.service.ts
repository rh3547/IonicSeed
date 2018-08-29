import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '@app/env';

@Injectable()
export class ApiService {
    constructor(
        private http: HttpClient
    ) { }

    //=========================================================================
    // * HTTP GET                                                             *
    //=========================================================================
    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(
          `${environment.api_url}${path}`,
          { params }
        );
    }

    //=========================================================================
    // * HTTP POST                                                            *
    //=========================================================================
    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(
            `${environment.api_url}${path}`,
            body
        );
    }

    //=========================================================================
    // * HTTP PUT                                                             *
    //=========================================================================
    put(path: string, body: Object = {}): Observable<any> {
        return this.http.put(
            `${environment.api_url}${path}`,
            body
        );
    }

    //=========================================================================
    // * HTTP PATCH                                                             *
    //=========================================================================
    patch(path: string, body: Object = {}): Observable<any> {
        return this.http.patch(
            `${environment.api_url}${path}`,
            body
        );
    }

    //=========================================================================
    // * HTTP DELETE                                                          *
    //=========================================================================
    delete(path: string): Observable<any> {
        return this.http.delete(
            `${environment.api_url}${path}`
        );
    }
}
