import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;

  @Output() like = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onLike() {
    this.like.emit(this.product.id);
  }

  onDelete() {
    const ok = confirm('Are you sure you want to delete this product?');
    if (ok) this.delete.emit(this.product.id);
  }

  shareWhatsApp() {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=${url}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}