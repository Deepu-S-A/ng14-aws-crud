import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeServerDemoComponent } from './node-server-demo.component';

describe('NodeServerDemoComponent', () => {
  let component: NodeServerDemoComponent;
  let fixture: ComponentFixture<NodeServerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeServerDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeServerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
