import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountrydataserviceService {

  constructor( private http:HttpClient) {}
  get(url:any){
    let baseurl = environment.apiurl + url;
    return this.http.get(baseurl);
  }

  post(url:any,data:any){
    let baseurl = environment.apiurl + url;
    return this.http.post(baseurl, data);
  }
}
