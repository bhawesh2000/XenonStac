import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url='http://localhost:3000/';


  constructor(private http:HttpClient) { }

  contact(regData)
  {
    console.log(regData);
    return this.http.post(this.url+'contacts', regData); // will accept data comming from backend and will return to ureg
  }
}
