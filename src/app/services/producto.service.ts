import { Injectable } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError  } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Producto } from '../models/producto';
import { GLOBAL } from './global';
import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class ProductoService {
	public url: string;

	constructor(private _http: HttpClient){
		this.url = GLOBAL.url;
	}

	getProductos(){
		return this._http.get(this.url + '/productos');
	}	

	addProducto(producto:Producto):Observable<any>{
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/x-www-form-urlencoded'
  })
};
		return this._http.post<any>('http://localhost/curso-angular4-backend/index.php/productos', producto, httpOptions);
	}

}