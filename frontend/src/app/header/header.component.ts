import { Component, Input, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { SubjectService } from '../services/subject.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {

  filteredOptions: Observable<string[]> | undefined;

  constructor(private subser:SubjectService) { }

  ngOnInit(): void {    

  
  }


}






