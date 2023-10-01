var nombre = "Brizeyda Yulianna ";
var apellido = "Boror Cardona";
var usuario = "briz10";
var edad = 5;
var correo = 'briz7@gmail.com';
var dineroAhorrado = "10000";
var deudas = "100";


console.log(`Nombre Completo ${nombre} ${apellido}`);

console.log(`Dinero real ${dineroAhorrado}-${deudas}`);


/*Funciones*/

function prueba(name, lastname,completName,nickname){
    console.log(`mi nombre es ${completName} pero prefiero que me digas ${nickname}`)
}

prueba("","","Yulianna boro","Briz");


/* Chagt*/

function generarMensaje(nombre, apellido, apodo) {
    const nombreCompleto = nombre + ' ' + apellido;
    console.log(`Mi nombre es ${nombreCompleto}, pero prefiero que me digas ${apodo}.`);
  }
  
  // Llamada a la función con argumentos
  generarMensaje("Juan David", "Castro Gallego", "juandc");


  const tipoDeSuscripcion = "d";


  if(tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");

  }else if (tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
  }else if (tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
  }else if (tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
  }else{
    console.log("Lo siento no hemos encontrado una respuesta ");
  }

  var a = 0;

  while(i < 5){
    console.log("El valor de i es: " + i);
    i++
  }


  var b = 10;

  while(b >= 2){
    console.log("El valor de b es: " + b);
    b--
  }



  /************ Arrays ****************/

  /* Un arrays es una lista de elementos */

  /*Las listas nos dejan guardar elementos */

  const array = [
     1, 'jaja', true, false,
  ];

  /*Un obejto es una lista de elementos PERO cada elemento tiene un nombre clave */

  const obj = {
    nombre: 'fulanito',
    edad: 2,
  }

  /*
    Arrays cunado lo que haremos en un elemento es los mismo que en todos los demas (la regla se puede incumplir) 
    Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo
  */

    const array2 = [
      1, 'jaja', true, false,
   ];
 



    function imprimirElementoPorElemento(arr){
      for(let i = 0; i <= array2.length; i++){
        console.log(array2[i]);
      }
    }


    /* 
    
    */
    const tiposDeSuscripciones = {
      free: 'Solo puedes tomar los cursos gratis',
      basic: 'Estas utilizando basic',
      expert: 'Estas utilizando Expert',
      expertDuo: 'Estas utilizando ExpertDuo',
    }
    
    function conseguirSuscriptions(suscripciones){
      if(tiposDeSuscripciones[suscripciones]){
        console.log(tiposDeSuscripciones[suscripciones]);  // Corregido aquí
      }
      console.warn('Ese tipo de suscripciones que no existe');
    }
    
    conseguirSuscriptions('frdsdasdee');
    