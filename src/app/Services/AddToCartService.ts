import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
@Injectable()
export class AddToCartService {
  constructor(private http: HttpClient) {}
  products: [
    {
      id: 1;
      name: 'TV 1';
      type: 'TV';
      brand: 'Marka1';
      model: 'Model5';
      info: 'Büyük ekran, parlak renkler';
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
      price: '10000';
      color: 'Siyah';
      image: '../../assets/products/tv1.jpg';
    },
    {
      id: 2;
      name: 'Telefon 1';
      type: 'phone';
      brand: 'Marka5';
      model: 'Model2';
      info: '5G destekli, 800MP Ön Kamera';
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
      price: '1000';
      color: 'Beyaz';
      image: '../../assets/products/phone1.png';
    },
    {
      id: 3;
      name: 'Tablet 1';
      type: 'tablet';
      brand: 'Marka8';
      model: 'Model3';
      info: 'Çocuklara özel, dayanıklı';
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
      price: '100';
      color: 'Siyah';
      image: '../../assets/products/tablet1.webp';
    },
    {
      id: 4;
      name: 'Saat 1';
      type: 'watch';
      brand: 'Marka4';
      model: 'Model1';
      info: 'Bluetooth ve GPS';
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
      price: '10';
      color: 'Beyaz';
      image: '../../assets/products/watch1.webp';
    },
    {
      id: 5;
      name: 'TV 2';
      type: 'TV';
      brand: 'Marka2';
      model: 'Model4';
      info: 'İnce çerçeve, hafif';
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
      price: '10000';
      color: 'Beyaz';
      image: '../../assets/products/tv2.jpg';
    },
    {
      id: 6;
      name: 'Telefon 2';
      type: 'phone';
      brand: 'Marka1';
      model: 'Model1';
      info: 'Hızlı şarj, dahili flash';
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
      price: '1000';
      color: 'Siyah';
      image: '../../assets/products/phone2.jpg';
    },
    {
      id: 7;
      name: 'Tablet 2';
      type: 'tablet';
      brand: 'Marka2';
      model: 'Model2';
      info: '10 inç ekran, uzun pil ömrü';
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
      price: '100';
      color: 'Beyaz';
      image: '../../assets/products/tablet2.webp';
    },
    {
      id: 8;
      name: 'Saat 2';
      type: 'watch';
      brand: 'Marka4';
      model: 'Model3';
      info: 'Ergonomik tasarım';
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
      price: '10';
      color: 'Siyah';
      image: '../../assets/products/watch2.jpg';
    },
    {
      id: 9;
      name: 'TV 3';
      type: 'TV';
      brand: 'Marka3';
      model: 'Model4';
      info: 'Akıllı TV, iki USB, üç HDMI';
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
      price: '10000';
      color: 'Siyah';
      image: '../../assets/products/tv3.jpg';
    },
    {
      id: 10;
      name: 'Telefon 3';
      type: 'phone';
      brand: 'Marka5';
      model: 'Model1';
      info: 'Hafıza kartı desteği';
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
      price: '1000';
      color: 'Beyaz';
      image: '../../assets/products/phone3.jpg';
    },
    {
      id: 11;
      name: 'Tablet 3';
      type: 'tablet';
      brand: 'Marka8';
      model: 'Model2';
      info: 'Akıllı kalem hediye';
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
      price: '100';
      color: 'Siyah';
      image: '../../assets/products/tablet3.jpg';
    },
    {
      id: 12;
      name: 'Saat 3';
      type: 'watch';
      brand: 'Marka4';
      model: 'Model3';
      info: 'Android uygulama desteği';
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
      price: '10';
      color: 'Beyaz';
      image: '../../assets/products/watch3.jpg';
    }
  ];

  newProduct: {};

  onAddToCartClicked = new EventEmitter<{
    id?: number;
    name?: string;
    type?: string;
    brand?: string;
    model?: string;
    info?: string;
    description?: string;
    price?: string;
    color?: string;
    image?: string;
  }>();

  AddToCart(product: {
    id?: number;
    name?: string;
    type?: string;
    brand?: string;
    model?: string;
    info?: string;
    description?: string;
    price?: string;
    color?: string;
    image?: string;
  }) {
    this.onAddToCartClicked.emit(product);
    this.newProduct = product;
    this.http
      .post(
        'https://product-list-e6cbb-default-rtdb.firebaseio.com/product.json',
        product
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
