import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContactList$() : Observable<Contact[]> {

    let mockList : Contact[] =  [
      {
        id: 1,
        firstName : "Jim",
        lastName : "Jimson",
        phoneNumber: "",
        email : "",
        notes: "",
        projectRoles : []
      },
      {
        id: 2,
        firstName : "Jack",
        lastName : "Jackson",
        phoneNumber: "",
        email : "",
        notes: "",
        projectRoles : []
      }
    ]

    return of(mockList)

  }

}
