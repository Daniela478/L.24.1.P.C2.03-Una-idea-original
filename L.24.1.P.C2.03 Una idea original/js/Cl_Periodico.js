import Cl_Publicidad from "./Cl_Publicidad.js";
export default class Cl_Periodico extends Cl_Publicidad{
    constructor(nrocontrato, descripción, tipo, precio_base,aviso_color, cuerpo_periodico){
        super(nrocontrato, descripción, tipo,precio_base);
        this.aviso_color = aviso_color;
        this.cuerpo_periodico = cuerpo_periodico;}

        recargoAvisoColor(){
            if (this.aviso_color == 1)
                return this.precio_base * 0.4
            else
                return 0;
        }

        recargoCuerpoPrincipal(){
            if (this.cuerpo_periodico == 1)
                return this.precio_base * 0.375
            else
                return 0;
        }

        montoPagar(){
            return this.precio_base - this.descuento() + this.recargoAvisoColor() + this.recargoCuerpoPrincipal();
        }

    }