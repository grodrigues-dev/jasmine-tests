import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FileService } from 'src/app/files/shared/file.service';
import { ProductService } from '../shared/product.service';
import { Observable, of } from 'rxjs';

import { ProductsListComponent } from './products-list.component';
import { Product } from '../shared/product.model';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsListComponent ], 
      providers: [
        { provide: FileService, useClass: FileServiceMock },
        { provide: ProductService, useClass: ProductServiceMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


class ProductServiceMock {
  getProducts(): Observable<Product[]> {
    return of([]);
    }
  }

class FileServiceMock {

}