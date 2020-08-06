export class Producto {
// tslint:disable-next-line:variable-name
id_producto?: number;
// tslint:disable-next-line:variable-name
nombre_producto: string;
// tslint:disable-next-line:variable-name
precio_producto: number;

constructor(){
    this.nombre_producto = '';
    this.precio_producto = 0;
}
}
