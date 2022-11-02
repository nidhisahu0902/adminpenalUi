import { Component, OnInit } from '@angular/core';
import { ContactusService } from 'src/app/service/contactus.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  allContactDetails:any;
  constructor(public contactService:ContactusService) { }

  ngOnInit(): void {
  }
getAllContactDetails()
{
  this.contactService.get().subscribe(res=>{
    this.allContactDetails =res
  })
}
}
