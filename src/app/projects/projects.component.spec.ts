/// <reference types="jasmine" />
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

// Load the implementations that should be tested
import { ProjectsComponent } from './projects.component';
import { rootReducer } from './reducers';
import { HomeActions } from './home/home.actions';

describe(`Projects`, () => {
  let comp: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsComponent ],
      imports: [ StoreModule.provideStore(rootReducer) ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [HomeActions]
    })
    .compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    comp    = fixture.componentInstance;

    fixture.detectChanges(); // trigger initial data binding
  });

  it(`should be readly initialized`, () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });

  it(`should be @AngularClass`, () => {
    expect(comp.url).toEqual('https://github.com/colinskow/angular-electron-dream-starter');
    expect(comp.angularclassLogo).toEqual('assets/img/angular-electron.svg');
    expect(comp.name).toEqual('Angular Electron Dream Starter');
  });

  it('should log ngOnInit', () => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    comp.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  });

});