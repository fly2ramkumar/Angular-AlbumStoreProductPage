import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo;

  constructor(private _productService:ProductService) { }

  ngOnInit() {
    console.log("Inside onInit")
    this._productService.getAlbum(1).subscribe(response => {
      this.albumInfo = response;
      console.log("I CANT SEE DATA HERE: ", this.albumInfo);
    } );
  }

}
