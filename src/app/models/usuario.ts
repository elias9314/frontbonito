export class Usuario {
    
    id_usuario?: number;
    id_rol: number; 
    nombre_usuario: string; 
    apellido_usuario: string; 
    cedula_usuario: string;
    telefono_usuario: string;
    direccion_usuario: string;
    correo_usuario: string;
    password_usuario: string;

    constructor() {
        this.id_rol = 3 ;
        this.nombre_usuario = '';
        this.apellido_usuario = '';
        this.cedula_usuario = '';
        this.telefono_usuario = '';
        this.direccion_usuario = '';
        this.correo_usuario = '';
        this.password_usuario = '';
    }
}
