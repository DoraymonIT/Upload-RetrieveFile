import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeDetaillesComponent } from './commande-detailles.component';

describe('CommandeDetaillesComponent', () => {
  let component: CommandeDetaillesComponent;
  let fixture: ComponentFixture<CommandeDetaillesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeDetaillesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeDetaillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
