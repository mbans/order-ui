import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigChangeComponent } from './config-change.component';

describe('ConfigChangeComponent', () => {
  let component: ConfigChangeComponent;
  let fixture: ComponentFixture<ConfigChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
