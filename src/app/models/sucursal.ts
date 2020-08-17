 import {Usuario} from './usuario';
 export class Sucursal{
    id_sucursal?: number;
    id_usuario: Usuario;
    id_producto?: number;
    nombre_sucursal: string;
    direccion_sucursal: string;
    telefono_sucursal: string;
    correo_sucursal: string;
    stock_sucursal: number;

    constructor(){
        this.id_usuario = new Usuario;
    }
}