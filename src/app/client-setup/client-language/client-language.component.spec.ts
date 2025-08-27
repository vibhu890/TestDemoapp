import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLanguageComponent } from './client-language.component';

describe('ClientLanguageComponent', () => {
  let component: ClientLanguageComponent;
  let fixture: ComponentFixture<ClientLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientLanguageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
