import { Injectable } from '@angular/core';
import { Clothes } from '../shared/subject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CLOTHES} from '../shared/subjects';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {


  constructor(private http:HttpClient) { }


  getStudents(): Clothes[]
  {
    return CLOTHES;
  }


  

  
 

}

