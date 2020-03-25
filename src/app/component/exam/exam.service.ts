import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ExamService {
    constructor(private http:HttpClient){

    }

    // getAssetList(): Observable<Response[]> {
    //     let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    //     var x = 'Bearer ' + JSON.parse(localStorage.getItem("currentUser_RPT")).token;
    //     headers.append('Authorization', x);
    //     let options = new RequestOptions({ headers: headers });
    
    //     return this.http.get('http://login.philgps.com/reportpro2_api/asset/list/', options).map(res => res.json());
    
    //   }

    // getProducts(): Observable<any[]> {
    //     return this.http.get<any[]>(apiUrl)
    //       .pipe(
    //         tap(product => console.log('fetched products')),
    //         catchError(this.handleError('getProducts', []))
    //       );
    //   }

    getUsers(): Observable<any>{

        return this.http.get<any>('http://jsonplaceholder.typicode.com/users')
        .pipe();
    }

    getPosts(): Observable<any>{
        return this.http.get<any>('http://jsonplaceholder.typicode.com/posts').pipe();
    }
}