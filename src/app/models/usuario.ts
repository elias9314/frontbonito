export class Usuario {
    // tslint:disable-next-line:variable-name
    id_usuario?: number;
    // tslint:disable-next-line:variable-name
    id_rol: number;
    // tslint:disable-next-line:variable-name
    nombre_usuario: string;
    // tslint:disable-next-line:variable-name
    apellido_usuario: string;
    // tslint:disable-next-line:variable-name
    cedula_usuario: string;
    // tslint:disable-next-line:variable-name
    telefono_usuario: string;
    // tslint:disable-next-line:variable-name
    direccion_usuario: string;
    // tslint:disable-next-line:variable-name
    correo_usuario: string;
    // tslint:disable-next-line:variable-name
    password_usuario: string;

    constructor() {
        this.id_rol = 1 ;
        this.nombre_usuario = '';
        this.apellido_usuario = '';
        this.cedula_usuario = '';
        this.telefono_usuario = '';
        this.direccion_usuario = '';
        this.correo_usuario = '';
        this.password_usuario = '';
    }
}
