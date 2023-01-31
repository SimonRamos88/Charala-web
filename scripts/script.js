/*Para esconder o mostrar una tarjeta, recibe como parametro el nombre de la tarjeta*/
function setVisible(nombre){
      /* Se obtiene el elemento con ese id*/
      var tarjeta = document.getElementById(nombre);
      /* Leemos el valor del dis`lay, para saber si la tarjeta esta activa*/
      var visible = tarjeta.style.display;
      if(visible == "none"){ /*Si esta invisible, la ponemos visible*/ 
          visible = "flex";
          tarjeta.style.display = visible;
      }else{ /* Sino. la ponemos invisible*/
          tarjeta.style.display = "none"; 
      } 
}
/*Para mostrar la tarjeta de virolin */
function llamarTarjeta1(){
    /* Se obtiene el elemento con ese id*/
    var tarjeta = document.getElementById("virol");
    /* Se le cambia la posicion*/
    tarjeta.style.left= "55%";
    tarjeta.style.top="45%";
    /*Ponemos visible la tarjeta */
    setVisible("virol");
}
/*Para mostrar la tarjeta de tinaga*/
function llamarTarjeta2(){
    /* Se obtiene el elemento con ese id*/
    var tarjeta = document.getElementById("tinaga");
    /* Se le cambia la posicion*/
    tarjeta.style.left= "5%";
    tarjeta.style.top="15%";
    /*Ponemos visible la tarjeta */
    setVisible("tinaga");
}
/*Para mostrar la tarjeta de tigre*/
function llamarTarjeta3(){
    /* Se obtiene el elemento con ese id*/
    var tarjeta = document.getElementById("tigre");
    /* Se le cambia la posicion*/
    tarjeta.style.left= "5%";
    tarjeta.style.top="65%";
    /*Ponemos visible la tarjeta */
    setVisible("tigre");
}
