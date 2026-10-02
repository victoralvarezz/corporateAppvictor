import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular';

import { ProductsService } from '../../services/products';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonGrid,
    IonRow,
    IonCol
  ]
})
export class ProductosPage implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductsService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.products = await this.productService.getProducts();

    console.log('PRODUCTOS:', this.products);

    this.cdr.detectChanges();
  }

}
