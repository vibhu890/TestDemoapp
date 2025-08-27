import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientServicesComponent } from './client-services.component';

describe('ClientServicesComponent', () => {
  let component: ClientServicesComponent;
  let fixture: ComponentFixture<ClientServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
