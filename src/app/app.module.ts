import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactEditDialogComponent } from './dialogs/contact-edit-dialog/contact-edit-dialog.component';
import { PickRoleDialogComponent } from './dialogs/pick-role-dialog/pick-role-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactEditDialogComponent,
    PickRoleDialogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
