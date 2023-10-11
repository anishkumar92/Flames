import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FlamesService } from './flames.service';
import { FormsModule } from '@angular/forms';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let flamesService: FlamesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule],
      providers: [FlamesService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    flamesService = TestBed.inject(FlamesService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate flames result correctly', async () => {
    spyOn(flamesService, 'calculateFlames').and.returnValue(
      await Promise.resolve('Friends')
    );
    component.name1 = 'John';
    component.name2 = 'Jane';
    await component.calculate();
    expect(component.result).toEqual('Friends');
  });
});
