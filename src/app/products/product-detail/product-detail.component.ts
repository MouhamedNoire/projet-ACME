import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IProducts} from "../products";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  product:IProducts |undefined;
  pageTitle: string = "Product Detail";
  constructor(private route:ActivatedRoute , private router : Router) {
  }
  onBack():void{
    this.router.navigate(['/products']);
  }

  ngOnInit():void{
    const id= Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += ` : ${id}`;
  }
}
