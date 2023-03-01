import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private http:HttpClient) { }

  getData(){
    return of([{"versionType":"PAPE","SKU":"Y159242","ISBN":"398423982348","title":"The power of tests"}]);
  }
}
