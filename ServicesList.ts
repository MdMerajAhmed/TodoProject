import {Injectable} from '@angular/core';
import { Response, Headers, RequestOptions} from "@angular/http";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()

export class DemoService {

    constructor(private http:Http) {
    }

    saveRecord(value,item) {
            let body = JSON.stringify(value, item);
            return this.http.post('/api/add/', body).map((res:Response) => res.json());
        }

    deleteRecord(item) {
           return this.http.delete('/api/delete/' + item);
        }
}
