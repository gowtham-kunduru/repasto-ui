import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

// Observable class extensions
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';



import { environment } from '../../environments/environment';
import { Promise } from 'q';

@Injectable()
export class AppHttp {
    headers: HttpHeaders;
    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
            'Access-Control-Allow-Origin': '*',
            // tslint:disable-next-line:max-line-length
            'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization,Accept, Client-Security-Token, Accept-Encoding'

        });
    }


    get(url, requestParams?) {
        return this.http.get(environment.base_url + url, { headers: this.headers, params: requestParams })
            .map(this.extractData)
            .catch(this.handleError);

    }

    post(url, data): Observable<Response> {
        return this.http.post(environment.base_url + url, data)
            .map((response: Response) => {
                return response.json();
            }).catch(this.handleError);
    }

    private extractData(res: Response) {
        // tslint:disable-next-line:prefer-const
        let body = res;
        return body || {};
    }

    private handleError(error: HttpErrorResponse) {
        console.log(error);
        return Observable.throw(error || 'Server Error');
    }

}
