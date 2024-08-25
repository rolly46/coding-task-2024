import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})

export class ContactEditDialogComponent {
  
  constructor(
    public dialogRef: MatDialogRef<{contact: Contact}>,
    @Inject(MAT_DIALOG_DATA) public data: {
      contact : Contact | null
    }
  ){

  }

  contactForm: FormGroup = new FormGroup({
    firstName : new FormControl(),
    lastName : new FormControl(),
    phoneNumber : new FormControl(),
    email : new FormControl()
  })

  ngOnInit(){
    if(this.data.contact){
      this.contactForm.patchValue(this.data.contact)
      console.log(this.contactForm.value)
    }
  }

  onSaveClick() : void {
    this.dialogRef.close({
      id : this.data.contact?.id || -1,
      ...this.contactForm.value
    })
  }

  onCancelClick() : void {
    this.dialogRef.close();
  }

  

}
