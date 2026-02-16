import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
})
export class ProductCardComponent implements OnChanges {
  @Input() product!: Product;

  currentIndex = 0;

  ngOnChanges(): void {
    this.currentIndex = 0;
  }

  get currentImage(): string {
    return (this.product?.images?.length ? this.product.images[this.currentIndex] : this.product.image) || '';
  }

  prevImage(): void {
    const total = this.product.images.length;
    this.currentIndex = (this.currentIndex - 1 + total) % total;
  }

  nextImage(): void {
    const total = this.product.images.length;
    this.currentIndex = (this.currentIndex + 1) % total;
  }

  shareWhatsApp(): void {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=Check out this product: ${url}`, '_blank');
  }

  shareTelegram(): void {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}
