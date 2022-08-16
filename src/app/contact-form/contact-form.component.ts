import { Component, OnInit } from '@angular/core';
import { contact } from '../contact-form';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }
  techs = ['angular', 'bootsrtap', 'vue'];
  model = new contact(18, 'abc',this.techs[0])
  submitted = false;


  
  onSubmit(){
     this.submitted = true
 }
  // myform = new contact(1, 'ali',this.techs[2]);
  // console.log(myform.name);

  ngOnInit(): void {
  }

}
