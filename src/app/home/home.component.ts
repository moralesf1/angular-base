/**
 * Created by felix on 4/24/17.
 */
import { Component } from '@angular/core';
import { PruebaService } from '../services/prueba.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [PruebaService]
})

export class HomeComponent {
    public titulo = 'Home component';
    public articulos;
    constructor(
        private _pruebaService: PruebaService
    ) {
        this._pruebaService.getArticulos().subscribe(
            result => {
                this.articulos = result;
                if (!this.articulos) {
                    console.log('Error en el servidor');
                }
                else {
                    console.log(this.articulos);
                }
            },
            error => {
                var error = <any>error;
                console.log(error);
            }
        );
    }

    ngOnInit() {
        this._pruebaService.getTest();
    }
}
