import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEditDialogComponent } from './contact-dialog.component';

describe('ContactEditDialogComponent', () => {
  let component: ContactEditDialogComponent;
  let fixture: ComponentFixture<ContactEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
