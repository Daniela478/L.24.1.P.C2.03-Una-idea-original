/*La empresa “UNA IDEA ORIGINAL” se encarga de promocionar cualquier negocio 
utilizando la publicidad ordinaria. Este tipo de publicidad incluye entre otros: 
Anuncios en periódicos, anuncios en vallas y anuncios en instagram. En estos momentos
la empresa requiere de un sistema computarizado que le permita llevar el control de 
la publicidad que vende a lo largo del año.
Independientemente del tipo de publicidad, se mantienen los siguientes datos: 
número del contrato de la publicidad, descripción, tipo de publicidad 
(1. Publicidad de anuncios en periódicos, 2. Publicidad de anuncios en Vallas, 
3. Publicidad por Instagram) y precio base (monto base a cancelar por la publicidad).
Actualmente, la empresa está dando un descuento del 2.5% sobre el precio base, 
por cualquier tipo de publicidad.

A continuación se exponen los detalles relacionados con cada tipo de publicidad: 
Si la publicidad es un anuncio en periódico, se necesita saber si el aviso es a 
color (1. Si, 2. No), ya que, un aviso a color sufrirá un recargo del 40% sobre 
el precio base; así mismo, se debe especificar el cuerpo del periódico donde 
se publicará el anuncio (1. Página Principal, 2. Página Central, 3. Página Final), 
ya que, actualmente todos los anuncios publicados en la página principal, tienen 
un recargo del 37.5% sobre el precio base. 
Pero si se refiere a un anuncio en valla, se debe registrar la cantidad de meses 
que será exhibida la valla, así como también la zona donde será colocada 
(1. Centro de la ciudad, 2. Este y 3. Oeste), ya que, hay un monto a cancelar 
por meses de exhibición, que depende del tipo de zona y de la cantidad de meses de
 exhibición. A continuación se indican los montos mensuales que se manejan por cada 
 tipo de zona:

 Publicidad en Instagram. Los datos que se necesita conocer por éste tipo de 
 publicidad son: Tipo de plan (1à Plan Único, 2à Plan Semanal y 3à Plan Quincenal),
  horario de la publicación (Hora Militar 01 a 24) a continuación se muestra para 
  cada plan el precio de una publicación en específico:
  Si la hora de publicación es de 7 a 12 am tienen un recargo del 2.5% sobre 
  la tarifa.
El objetivo final es que el sistema indique por cada tipo de publicidad vendida, 
cual es el monto total que debe cancelar el cliente, información que debe estar 
acompañada con el número del contrato de la publicidad. Por otra parte, la empresa 
necesita conocer el monto total vendido por publicidad, cantidad de publicidad de 
vallas, con más de un año de exhibición, monto total percibido por la publicidad en 
instagram del plan quincenal y porcentaje que representa los anuncios de periódicos 
a color con respecto al total de anuncios de periódicos procesados 

Considere publicidad en periódico (nrocontrato, descripción, tipo, precio base, 
aviso color, cuerpo periódico) - (111, AAA,1,37500,1,1) - (444,DDD,1,75000,2,2),  
publicidad en vallas (nrocontrato, descripción, tipo, precio base, cant meses, zona)
 - (222,BBB,2,65200,13,1), publicidad en instagram (nrocontrato, descripción, tipo, 
 precio base, tipo plan, horario) (555,EEE, 3,73500,1,8) - (666,FFF,3,86500,3,11)
*/

import  Cl_Empresa   from "./Cl_Empresa.js";
import Cl_Instagram from "./Cl_Instagram.js";
import Cl_Periodico from "./Cl_Periodico.js";
import Cl_Valla     from "./Cl_Valla.js";

let empresa = new Cl_Empresa(); 
let periodico = new Cl_Periodico(111, "AAA", 1, 37500, 1, 1);
let periodico2 = new Cl_Periodico(444, "DDD", 1, 75000, 2, 2);
let valla = new Cl_Valla(222, "BBB", 2, 65200, 1, 13);
let instagram = new Cl_Instagram(555, "EEE", 3, 73500, 1, 8); 
let instagram2 = new Cl_Instagram(666, "FFF", 3, 86500, 3, 11);

empresa.procesarPublicidad(periodico);
empresa.procesarPublicidad(periodico2);
empresa.procesarPublicidad(valla);
empresa.procesarPublicidad(instagram);
empresa.procesarPublicidad(instagram2);

let salida= document.getElementById("Salida");

let mostrarpublicidad = (publicidad) => {
  return `
  <tr>
    <td>${publicidad.nrocontrato}</td>
    <td>${publicidad.montoPagar()}</td>
  </tr>
  `;
};

salida.innerHTML = `
  <table>
    <tr>
      <td>Nro contrato</td>
      <td>Monto Pagar</td>
    </tr>
    ${mostrarpublicidad(periodico)}
    ${mostrarpublicidad(periodico2)}
    ${mostrarpublicidad(valla)}
    ${mostrarpublicidad(instagram)}
    ${mostrarpublicidad(instagram2)}
  </table>
  <br> Monto total vendido: ${empresa.devolverMonto().toFixed(2)} 
  <br> Cantidad de publicidad de vallas con mas de 1 año de exhibicion : ${empresa.devolvercantVallas()}
  <br> Monto total vendido en publicidad en instagram del plan quincenal: ${empresa.devolverMontoInst().toFixed(2)}
  <br> Porcentaje de anuncios de periodicos a color: ${empresa.porcPeriodicocolor()}
  
`;