import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  id: string = '0';

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((params) => {
      this.id = params.get('id')!;
    });
  }
}