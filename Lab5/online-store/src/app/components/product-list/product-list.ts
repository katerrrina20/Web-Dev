import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() delete = new EventEmitter<number>();
  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
    this.delete.emit(id);
  }
  likeProduct(id: number) {
    const p = this.products.find(x => x.id === id);
    if (p) p.likes += 1;
  }
}