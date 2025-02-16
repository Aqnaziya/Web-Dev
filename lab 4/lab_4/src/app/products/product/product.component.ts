import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products = [
    {
      image : 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h77/86745408634910.png?format=gallery-medium', 
      name: 'Apple iPad Air 2024',
      description: 'айпадик',
      rating: '5/5',
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-2024-wi-fi-11-11-djuim-8-gb-128-gb-seryi-119778165/?c=750000000'
    },
    { image : 'https://resources.cdn-kaspi.kz/img/m/p/h47/hc5/86178022326302.jpg?format=gallery-medium',
      name: 'Bricks Миньон Q5040',
      description: 'миньен',
      rating: '10/10',
      link: 'https://kaspi.kz/shop/p/bricks-min-on-q5040-detalei-180-sht-120002626/?c=750000000'
      },
    {
      image : 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      name: 'iPhone 16 Pro Max 256Gb черный',
      description: 'ипхон',
      rating: '5 /5',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000' // ссылка на товар в каспи
    },
    {
      image : 'https://resources.cdn-kaspi.kz/img/m/p/h09/hd9/63758980644894.jpg?format=gallery-medium',
      name: ' Canon PowerShot G7X Mark II',
      description: 'фотик мечты',
      rating: '5/5',
      link: 'https://kaspi.kz/shop/p/canon-powershot-g7x-mark-ii-chernyi-2200949/?c=750000000'
    },    
    {
      image : 'https://resources.cdn-kaspi.kz/img/m/p/p38/pbb/11569232.jpg?format=gallery-medium',
      name: 'Sony ZV-E10 KIT 16-50mm',
      description: 'норм фотик',
      rating: '3/5',
      link: 'https://kaspi.kz/shop/p/sony-zv-e10-kit-16-50mm-chjornyi-102510202/?c=750000000'
    },    
    {
      image : 'https://resources.cdn-kaspi.kz/img/m/p/h3e/h6b/83911781482526.jpg?format=gallery-medium',
      name: 'Штатив NeePho NP-3180S',
      description: 'классный штатив',
      rating: '2/5',
      link: 'https://kaspi.kz/shop/p/neepho-np-3180s-113425250/?c=750000000'
    },    
    {
      image : 'https://resources.cdn-kaspi.kz/img/m/p/h9f/h31/83654754533406.jpg?format=gallery-medium',
      name: 'Микрофон Boya BY-V20',
      description: 'лучшая петличка от айдарика',
      rating: '10/10',
      link: 'https://kaspi.kz/shop/p/boya-by-v20-113223542/?c=750000000'
    },    
    {
      image : 'https://resources.cdn-kaspi.kz/img/m/p/pea/p0f/7249416.jpg?format=gallery-medium',
      name: 'Микрофон Boya BY-M1S',
      description: 'не о чем',
      rating: '1/5',
      link: 'https://kaspi.kz/shop/p/boya-by-m1s-107651967/?c=750000000'
    },    
    {
      image : 'https://resources.cdn-kaspi.kz/img/m/p/p5a/p21/24974150.jpeg?format=gallery-medium',
      name: 'Картина Щенок в краске холст на подрамнике',
      description: 'интересное занятие',
      rating: '3/5',
      link: 'https://kaspi.kz/shop/p/schenok-v-kraske-holst-na-podramnike-20x30-sm-134744642/?c=750000000'
    },    
    {
      image : 'https://resources.cdn-kaspi.kz/img/m/p/pfa/p0b/24873063.jpg?format=gallery-medium',
      name: 'Клавиатура Red Square Keyrox TKL',
      description: 'клава',
      rating: '4/5',
      link: 'https://kaspi.kz/shop/p/red-square-keyrox-tkl-aquarius-rsq-20036-belyi-114082331/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gclid=CjwKCAiAtsa9BhAKEiwAUZAszWJ83gd7sNJ4EuJmJF7ufgJPG_5_ET7V6Bks1iCUh3zKzdM0KL-SVBoCRDoQAvD_BwE'
    
    },
  ]

  share(link: string) {
    const message = encodeURIComponent(`Check this good: ${link}`);
    window.open(`https://t.me/share/url?url=${link}&text${message}`, '_blank');
  }
}


