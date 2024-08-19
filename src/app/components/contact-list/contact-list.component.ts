import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  contactList$: Observable<Contact[]>;
  selectedContact: Contact | null;

  constructor(private contactService : ContactService){
    this.contactList$ = this.contactService.getContactList$()
    this.selectedContact = null;
  }

  contactClicked(contact : Contact ){
    //TODO: dispatch select contact action
  
    this.selectedContact = contact;

  }


}
