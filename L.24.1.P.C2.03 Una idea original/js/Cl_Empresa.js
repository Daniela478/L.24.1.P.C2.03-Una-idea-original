import Cl_Valla from "./Cl_Valla.js";
import Cl_Instagram from "./Cl_Instagram.js";
export default class Cl_Empresa{
    constructor(){ 
        this.acummontov=0;
        this.cantvallasmasunanio=0;
        this.acummontoinstquinc=0;
        this.cantperiodicocolor=0;   
        this.cantperiodicos=0;
}

procesarPublicidad(publicidad){
    this.acummontov+=publicidad.montoPagar();
    if(publicidad instanceof Cl_Valla){
        if (publicidad.cantmeses>12)
        this.cantvallasmasunanio++;
    }
    else if(publicidad instanceof Cl_Instagram){
        if (publicidad.tipo_plan==3)
        this.acummontoinstquinc+=publicidad.montoPagar();
    }
    else {
        if(publicidad.aviso_color==1)
            this.cantperiodicocolor++;
        this.cantperiodicos++;
        }
}

devolverMonto(){
    return this.acummontov;     
}
devolverMontoInst(){
    return this.acummontoinstquinc;     
}

devolvercantVallas(){
    return this.cantvallasmasunanio;
}
porcPeriodicocolor(){
    return this.cantperiodicocolor*100/this.cantperiodicos;
}
}