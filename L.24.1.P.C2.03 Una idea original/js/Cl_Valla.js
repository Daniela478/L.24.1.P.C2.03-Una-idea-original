import Cl_Publicidad from "./Cl_Publicidad.js";

export default class Cl_Valla extends Cl_Publicidad{
    constructor(nrocontrato, descripción, tipo, precio_base, zona, cantmeses){
        super(nrocontrato, descripción, tipo,precio_base);
        this.zona = zona;
        this.cantmeses = cantmeses;
    }
    
    montoxZona(){
        if (this.zona == 1)
            return 2200
        else if (this.zona == 2)
            return 3000
        else
            return 1500
    }

    montoxMeses(){
        return this.cantmeses* this.montoxZona();
    }

    montoPagar(){
        return this.precio_base - this.descuento() + this.montoxMeses();
    }
}