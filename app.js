// Función saludar

  document.getElementById("btnB").addEventListener("click",saludar);
  function saludar() {

  const name = document.getElementById("name").value;
  document.getElementById("saludo").innerHTML = "Lista para Jugar, " + name;
  document.getElementById("container1").style.display="none";
  document.getElementById("container2").style.display="block";
};

// Función Mostrar Sección de gastronomía

document.getElementById("btnGast").addEventListener("click",opcionGast);
function opcionGast(){
  document.getElementById("container2").style.display="none";
  document.getElementById("preguntasGast").style.display="block";
  document.getElementById("resultadoGast").style.display="none";
}

// Función Mostrar Sección de música

document.getElementById("btnMus").addEventListener("click",opcionMus);
function opcionMus(){
  document.getElementById("container2").style.display="none";
  document.getElementById("preguntasMus").style.display="block";
  document.getElementById("resultadoMus").style.display="none";
}

//Función para obtener el puntaje del cuestionario de gastronomía
//y cambiar la sección a resultados.

document.getElementById("resGast").addEventListener("click",resultadoGast);
function resultadoGast() {
  let p1, p2, p3, nota;

  if (document.getElementById('p11').checked==true){
    p1=1;
  }
  else{
    p1=0;
  }
  if (document.getElementById('p23').checked==true) {
    p2=1;
  }
  else {
    p2=0;
  }
  if (document.getElementById('p32').checked==true) {
    p3=1;
  }
  else {
    p3=0;
  }
  nota=p1+p2+p3;
  document.getElementById("puntajeGast").innerHTML = `Obtuviste ${nota} aciertos`;
  document.getElementById("preguntasGast").style.display="none";
  document.getElementById("resultadoGast").style.display="block";
}

//Función para obtener el puntaje del cuestionario de música
//y cambiar la sección a resultados.

document.getElementById("resMus").addEventListener("click",resultadoMus)
function resultadoMus() {
  let q1, q2, q3, nota2;

  if (document.getElementById('q13').checked==true){
    q1=1;
  }
  else{
    q1=0;
  }
  if (document.getElementById('q22').checked==true) {
    q2=1;
  }
  else {
    q2=0;
  }
  if (document.getElementById('q31').checked==true) {
    q3=1;
  }
  else {
    q3=0;
  }
  nota2=q1+q2+q3;

  document.getElementById("puntajeMus").innerHTML = `Obtuviste ${nota2} aciertos`;
  document.getElementById("preguntasMus").style.display="none";
  document.getElementById("resultadoMus").style.display="block";
}

//Función para cargar al inicio del juego desde la sección Gastronomía

document.getElementById("btnG").addEventListener("click",recargar);

//Función para cargar al inicio del juego desde la sección Música

document.getElementById("btnM").addEventListener("click",recargar);
function recargar(){
  location.reload();
}
