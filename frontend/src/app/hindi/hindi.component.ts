import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SubjectService } from '../services/subject.service';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-hindi',
  templateUrl: './hindi.component.html',
  styleUrls: ['./hindi.component.scss']
})
export class HindiComponent implements OnInit {


  constructor(private subser:SubjectService, private location: Location, private route:ActivatedRoute) { }

  ngOnInit(): void {
    



  }

}
