import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBasicComponent } from './client-basic.component';

describe('ClientBasicComponent', () => {
  let component: ClientBasicComponent;
  let fixture: ComponentFixture<ClientBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
