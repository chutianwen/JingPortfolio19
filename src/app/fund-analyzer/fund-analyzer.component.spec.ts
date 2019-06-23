import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundAnalyzerComponent } from './fund-analyzer.component';

describe('FundAnalyzerComponent', () => {
  let component: FundAnalyzerComponent;
  let fixture: ComponentFixture<FundAnalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundAnalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
