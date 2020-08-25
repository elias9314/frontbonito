
export class Pedido {


    id_usuario: number;
    id_sucursal: number;
    id_producto: number;
    cantidad_pedido:number;
    fecha_pedido = new Date;
    fecha_entrega_pedido: Date;
    lat: string;
    long: string;

}
