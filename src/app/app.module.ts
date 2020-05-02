import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//rutas
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';;
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductoListComponent } from './components/productos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoAddComponent } from './components/producto-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductoListComponent,
    ProductoAddComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule      
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
