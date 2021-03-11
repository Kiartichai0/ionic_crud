import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChPage } from './ch.page';

describe('ChPage', () => {
  let component: ChPage;
  let fixture: ComponentFixture<ChPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
