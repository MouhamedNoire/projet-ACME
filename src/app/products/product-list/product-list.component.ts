import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProducts} from "../products";
import {ProductService} from "../../services/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit  , OnDestroy{


  pageTitle : string = "Product List";
  imageWidth : number = 50;
  imageMargin : number = 2;
  sub: Subscription |undefined;
  showImage : boolean = false;
private _listFilter: string ='';
errorMessage : string ='';
constructor(private productService : ProductService ) {
}
get listFilter(): string{
  return this._listFilter;
}
set listFilter(value: string){
  this._listFilter = value;
  console.log('in Setter: ' , this._listFilter);
  this.filteredProducts = this.performFilter(this._listFilter)

}
filteredProducts : IProducts[] =[];
  // @ts-ignore
  products : IProducts [] =[];

  toggleImage() :void{
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProducts[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProducts) =>
      product.productName
        .toLocaleLowerCase()
        .includes(filterBy)
    );
  }
  onRatingClicked(message:string):void{
    this.pageTitle = 'Product List: ' + message;
  }

  ngOnInit() : void {
    this.sub = this.productService.getProducts().subscribe({
      next: products =>{
        this.products = products;
        this.filteredProducts = this.products;
      },
      error:err =>this.errorMessage =err
    });

  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
