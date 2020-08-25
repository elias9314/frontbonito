 import {Usuario} from './usuario';
import { Producto } from './producto';
 export class Sucursal{
    id_sucursal?: number;
    id_usuario: Usuario;
    id_producto: Producto;
    nombre_sucursal: string;    
    telefono_sucursal: string;
    correo_sucursal: string;
    stock_sucursal: number;
    lat: string;
    long : string;

    constructor(){
        this.id_usuario = new Usuario;
        this.id_producto = new Producto;
        
    }
}