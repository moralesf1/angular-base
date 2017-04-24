/**
 * Created by felix on 4/24/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class PruebaService  {
    public url: string;
    constructor(private _http: Http) {
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }

    getTest() {
        console.log('Servicio funcionando');
    }

    getArticulos() {
        return this._http.get(this.url).map(res => res.json());
    }
}
