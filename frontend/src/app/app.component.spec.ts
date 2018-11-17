import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NgIdleModule } from '@ng-idle/core';

fdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
        NgIdleModule.forRoot()
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    }).compileComponents();
  }));
  it('should create the app', (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    done();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
