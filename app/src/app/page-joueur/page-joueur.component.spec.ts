import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJoueurComponent } from './page-joueur.component';

describe('PageJoueurComponent', () => {
  let component: PageJoueurComponent;
  let fixture: ComponentFixture<PageJoueurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageJoueurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
