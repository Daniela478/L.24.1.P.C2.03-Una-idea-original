export default class Cl_Publicidad {
        constructor(nrocontrato, descripción, tipo, precio_base) {
        this.nrocontrato = nrocontrato;
        this.descripción = descripción;
        this.tipo = tipo;
        this.precio_base = precio_base;}

        descuento(){
            return this.precio_base * 0.025;
        }

        }