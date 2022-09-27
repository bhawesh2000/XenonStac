import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ureg',
  templateUrl: './ureg.component.html',
  styleUrls: ['./ureg.component.scss']
})
export class UregComponent implements OnInit {

  regform:FormGroup;
  regdata
 
  constructor(private fb:FormBuilder, private userser:UserService, private router:Router) { 
    this.RegisterForm();
  }

  ngOnInit(): void {
  }

  RegisterForm()
  {
    this.regform=this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(25)]]
    });
 
  }

  Register()
  {
    this.regdata=this.regform.getRawValue;   //feedback form gives a property called value which allows me to retrieve the current value of these from feedback form
    console.log(this.regdata);
    this.userser.registration(this.regdata)
    .subscribe(res=>{
      console.log(res)
    })
    alert("inserted successfully");
    setTimeout(()=>{this.router.navigateByUrl('/home')}, 500)
    this.regform.reset({
      email:' ',
      password:' '
    });

  }

}



