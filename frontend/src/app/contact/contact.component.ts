import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  //FormBuilder allow us to create Reactive form within typescript code and then able to tie them in template file
import { Feedback, ContactType } from '../shared/feedback';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackform: FormGroup;
  feedback: Feedback;
  contactType= ContactType;


  constructor(private fb:FormBuilder, private contser:ContactService, private router:Router) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm()
  {
    this.feedbackform=this.fb.group({      // group allow us to define FormGroup, FormGoup allow us to group  all formControl
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      telnum: ['', [Validators.required] ],
      email: ['', [Validators.required] ],
      feedback: ['',[Validators.required]]
    });
 
  }



  onSubmit()
  {
    this.feedback=this.feedbackform.value;   //feedback form gives a property called value which allows me to retrieve the current value of these from feedback form
    console.log(this.feedback);
    this.contser.contact(this.feedback)
    .subscribe(res=>{
      console.log(res)
    })
    alert("inserted successfully");
    setTimeout(()=>{this.router.navigateByUrl('/home')}, 500)
    this.feedbackform.reset({
      firstname:'',
      lastname:'',
      email:' ',
      telnum:'', 
      feedback:' '
      
    });

  }
}

