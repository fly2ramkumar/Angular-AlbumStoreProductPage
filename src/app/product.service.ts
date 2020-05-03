import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {


  constructor(private _http:Http) { }

  _albumUrl:string = "../assets/album.json";

  getAlbum(id:number){
    console.log("this._albumUrl -- ",this._albumUrl)
    return this._http.get(this._albumUrl).map(
      response => {
        response.json();
        console.log("I CAN SEE DATA HERE: ", response.json());
            return response.json();

      })
  }

}
