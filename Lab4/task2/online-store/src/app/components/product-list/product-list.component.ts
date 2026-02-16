import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductListComponent {

  products: Product[] = [

    {
      id: 1,
      name: 'iPhone 15 Pro',
      description: 'Latest Apple smartphone with A17 chip and titanium body.',
      price: 589000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h10/h86/86596353359902.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc6/ha3/86596353425438.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hed/hce/86596353490974.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h31/hc8/86596353556510.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-dual-esim-chernyi-121701465/'
    },

    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Powerful Android flagship with high-end camera system.',
      price: 499000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h05/hca/84961127989278.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5a/hc4/84960872333342.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h89/hc2/84960872431646.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/hab/84960872562718.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-seryi-116040863/'
    },

    {
      id: 3,
      name: 'MacBook Air M2',
      description: 'Lightweight laptop with Apple M2 chip and Retina display.',
      price: 699000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p37/p87/22158172.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8c/p5d/22160744.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pff/p5c/22160749.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3e/p5a/22160753.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4-133963854/?c=750000000'
    },

    {
      id: 4,
      name: 'PlayStation 5',
      description: 'Next-gen gaming console with ultra-fast SSD.',
      price: 299000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h59/63948652249118.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2b/h90/63948654936094.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h00/63948657491998.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5d/h41/63948661882910.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/'
    },

    {
      id: 5,
      name: 'AirPods Pro 2',
      description: 'Wireless earbuds with active noise cancellation.',
      price: 119000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/hf2/84108189827102.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'
    },

    {
      id: 6,
      name: 'Dyson V15 Vacuum',
      description: 'Powerful cordless vacuum cleaner with laser detection.',
      price: 349000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa4/p32/77965055.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf8/p32/77965058.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p75/p00/68409016.bin?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p75/p00/68409016.bin?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sv47-serebristyi-113691132/?c=750000000'
    },

    {
      id: 7,
      name: 'LG OLED TV',
      description: '65-inch OLED TV with stunning 4K resolution.',
      price: 899000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h42/hed/86202333593630.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5d/hce/86202333659166.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h51/h08/86202333724702.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4b/hce/86202333790238.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lg-oled65c4rla-165-sm-chernyi-120091615/'
    },

    {
      id: 8,
      name: 'Xiaomi Robot Vacuum',
      description: 'Smart robotic vacuum cleaner with app control.',
      price: 149000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p4a/p07/107939309.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p5f/p0a/107939316.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7b/p0a/107939317.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0a/p0a/107939313.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-x20-bhr8124eu-belyi-117857029/'
    },

    {
      id: 9,
      name: 'Canon EOS R6',
      description: 'Professional mirrorless camera with 4K video.',
      price: 1099000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfb/hae/63972904894494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hda/h23/63972907647006.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfc/hf2/63972910989342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h27/h31/63972913807390.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/canon-eos-r6-body-chernyi-100696410/'
    },

    {
      id: 10,
      name: 'Asus Gaming Laptop',
      description: 'High-performance gaming laptop with RTX graphics.',
      price: 799000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p33/p7f/78414389.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p9f/p81/78414390.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9f/p81/78414390.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9f/p81/78414390.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a16-fa607nug-wh73-16-16-gb-ssd-512-gb-win-11-home-90nr0mu3-m00at0-149692547/?c=750000000'
    }

  ];
}
