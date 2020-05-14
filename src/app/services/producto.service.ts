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
		return this._http.get(this.url + 'productos');
	}

	getProducto(id){
		return this._http.get(this.url + 'producto/'+id);
	}

	addProducto(producto:Producto):Observable<any>{
		let json = JSON.stringify(producto);
		let params = 'json='+json;
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/x-www-form-urlencoded'
			})
		};

		return this._http.post<any>(this.url+'productos', params, httpOptions);
	}

	editProducto(id, producto: Producto):Observable<any>{
		let json = JSON.stringify(producto);
		let params = 'json='+json;
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/x-www-form-urlencoded'
			})
		};

		return this._http.post<any>(this.url+'update-producto/'+id, params, httpOptions);
	}

	deleteProducto(id){
		return this._http.get(this.url + 'delete-producto/' + id);
	}

	makeFileRequest(url: string, paras: Array<string>,files: Array<File>){
		return new Promise((resolve, reject)=>{
			var formData: any = new FormData();
			var xhr = new XMLHttpRequest();

			for(var i = 0; i < files.length; i++){
				formData.append('uploads', files[i], files[i].name);
			}

			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(xhr.status == 200){
						resolve(JSON.parse(xhr.response));
					}else{
						reject(xhr.response);
					}
				}
			};

			xhr.open("POST", url, true);
			xhr.send(formData);
		});
	}

}