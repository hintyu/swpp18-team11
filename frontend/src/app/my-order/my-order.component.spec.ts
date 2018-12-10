import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrderComponent } from './my-order.component';
import { DEFAULT_IMPORTS } from '../testing';
import { UserService } from '../user.service';
import { TxItem, TxItemOption } from '../tx-item';
import { Purchasable } from '../purchasable';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('MyOrderComponent', () => {
  let component: MyOrderComponent;
  let fixture: ComponentFixture<MyOrderComponent>;
  let userService: UserService;

  const optionStub = {id: 1, name: 'o', base_price: 100, max_capacity: 10, quantity: 2, total_price: 200};
  const purchasableStub: Purchasable = new Purchasable({
    id: 1,
    name: 'p',
    thumbnail: 'x',
    base_price: 1000,
    total_price: 5000,
    quantity: 5,
    options: [optionStub],
    badges: [],
  } as any);
  const txOptionStub: TxItemOption[] = [new TxItemOption({
    optionName: optionStub.name,
    basePrice: optionStub.base_price,
    qty: optionStub.quantity,
    totalPrice: optionStub.total_price
  })];
  const txStub: Partial<TxItem> = {
    purchasable: purchasableStub,
    purchasableName: purchasableStub.name,
    purchasableBasePrice: purchasableStub.base_price,
    qty: purchasableStub.quantity,
    price: purchasableStub.total_price + optionStub.total_price,
    options: txOptionStub,
    totalPrice: purchasableStub.total_price + optionStub.total_price,
    createdAt: '20181118',
    state: 'todo'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrderComponent ],
      imports: [
        ...DEFAULT_IMPORTS,
        RouterTestingModule
      ],
      providers: [UserService]
    })
    .compileComponents();
    userService = TestBed.get(UserService);
    spyOn(userService, 'getMyTx').and.callFake(() => of([txStub]));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render tx list', (done) => {
    component.ngOnInit();
    done();
    expect(component.txItems$).toBeDefined();
    // const htmlElement: HTMLElement = fixture.nativeElement;
    // const ul = htmlElement.querySelector('ul');
    // expect(ul.textContent).toContain(optionStub.name + ' x ' + optionStub.quantity);
  });
});
