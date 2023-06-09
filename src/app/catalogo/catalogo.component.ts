import { AppRoutingModule } from './../app-routing.module';
import { Producto, class_templates } from './../menu/class_templates';
import { Component, OnInit } from '@angular/core';
//import { AppRoutingModule } from './app-routing.AppRoutingModule';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos: Producto[] = [];
  productsPerPageOptions: number[] = [25, 50, 100];
  productsPerPage: number = 25;
  currentUrl: string = '';
  noImage: string = '';

  //constructor(private http: HttpClient) { }
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
    this.cururl();
  }

  loadProducts() {
    let prod: Producto = new Producto;
    let id: number = 0;
    let codigo: number = 0;
    let nombre: string = 'Producto';
    let descripcion: string = '';
    let precio: number = 0;
    let imagen: string = '';
    let etiqueta: string = 'celular';
    /*this.http.get<any[]>('URL_DEL_WEBSERVICE').subscribe(
      response => {
        this.products = response;
      },
      error => {
        console.error('Error al cargar los productos:', error);
      }
      );
    }*/

    /*
    this.noImage = "assets/img/noimage.jpg";
    prod.add(1, 1, 'Producto1', 'Descripción del producto 1', 55.56, this.noImage, 'celular');
    this.addProductos(prod);
    prod = new Producto;
    prod.add(2, 2, 'Producto2', 'Descripción del producto 2', 15.51, 'assets/img/Retro4.png', 'celular' );
    this.addProductos(prod);
    prod = new Producto;
    prod.add(3, 3, 'Producto3', 'Descripción del producto 3', 150.51, 'assets/img/Retro4.png', 'celular' );
    this.addProductos(prod);
    prod = new Producto;
    prod.add(4, 4, 'Producto4', 'Descripción del producto 4', 154.51, 'assets/img/Retro4.png', 'celular' );
    this.addProductos(prod);
    prod = new Producto;
    prod.add(5, 5, 'Producto5', 'Descripción del producto 5', 155.51, 'assets/img/Retro4.png', 'celular' );
    this.addProductos(prod);
    prod = new Producto;
    prod.add(6, 6, 'Producto6', 'Descripción del producto 6, esto es una prueba, para ver el contenido que puede almacenar el producto.', 156.51, 'assets/img/Retro4.png', 'celular' );
    this.addProductos(prod);
    console.log(this.productos);
    */
    for (let index = 1; index <= 20; index++) {
      prod = new Producto;
      id = index;
      codigo = index;
      nombre = 'Producto ' + index.toString();
      descripcion = 'Descripción del producto ' + index.toString() + ', esto es una prueba, para ver el contenido que puede almacenar el producto.';
      precio = 3.25 * index;
      imagen = 'assets/img/Retro4.png';


    prod.add(id, codigo, nombre, descripcion, precio, imagen, etiqueta);
    this.addProductos(prod);
    }
  }

  addProductos(aprod: Producto) {
    this.productos.push(aprod);
    //this.productos = [...this.productos.slice(), prod];
  }

  cururl() {
    this.currentUrl = this.router.url;
  }
}
