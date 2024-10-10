import Cl_Publicidad from "./Cl_Publicidad.js";

export default class Cl_Instagram extends Cl_Publicidad{

    constructor(nrocontrato, descripción, tipo, precio_base, tipo_plan, horario){
        super(nrocontrato, descripción, tipo,precio_base);
        this.tipo_plan = tipo_plan; 
        this.horario = horario;
}
   pagoTipoPlan(){
    if (this.tipo_plan == 1)
        return 8800;
    else
    if (this.tipo_plan == 2)
        return 33000;
    else
    return 45500;
   }

   pagoxHorario(){
    if (this.horario >= 7 && this.horario <= 12)
        return 0.025 * this.pagoTipoPlan();
    else
    return 0;
   }

   montoPagar(){
    return this.precio_base - this.descuento() + this.pagoTipoPlan() + this.pagoxHorario();
   }
}