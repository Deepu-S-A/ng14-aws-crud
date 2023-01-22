import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsDemoComponent } from './aws-demo.component';

describe('AwsDemoComponent', () => {
  let component: AwsDemoComponent;
  let fixture: ComponentFixture<AwsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
