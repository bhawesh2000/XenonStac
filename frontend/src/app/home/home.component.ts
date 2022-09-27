import { Component, Inject, OnInit } from '@angular/core';
import { Clothes } from '../shared/subject';
import { CLOTHES } from '../shared/subjects';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subject:Clothes[] | undefined;

  constructor(private subj:SubjectService) { }

  ngOnInit(): void {

    this.subject=this.subj.getStudents();
  }

}
