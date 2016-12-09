export interface INote {
    id        : number;
    titulo    : string;
    contenido : string;
    autor     : string;
    fecha     : Date;
}

export class Note implements INote {
    id        : number;
    titulo    : string;
    contenido : string;
    autor     : string;
    fecha     : Date;

    constructor (id: number, titulo: string, contenido: string, autor: string, fecha: Date) {
        this.id        = id;
        this.titulo    = titulo;
        this.contenido = contenido;
        this.autor     = autor;
        this.fecha     = fecha;
    }
}