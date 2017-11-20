window.onload = function() {
//NATALIA ESPINOZA
  // menu lateral de usuario
  var addStudent = document.getElementById('addStudent');
  addStudent.addEventListener('click', function() {

  });
  var removeStudent = document.getElementById('removeStudent');
  removeStudent.addEventListener('click', function() {

  });
  var addSprint = document.getElementById('addSprint');
  addSprint.addEventListener('click', function() {

  });

  //Al hacer click en sede y generación
  var filtroSedes = document.getElementById('sedes');
  filtroSedes.addEventListener('click', function() {

  });

  //Evento de click en "STUDENTS" ocultar divs de "OVERVIEW" Y "TEACHERS"
  var students = document.getElementById('students');
  studentsMenu.addEventListener('click', function() {
    overview.className = 'ocultar';
    teachers.className = 'ocultar';
    students.classList.remove('ocultar');
    studentsMenu.className = 'select';
    overviewMenu.classList.remove('select');
    teachersMenu.classList.remove('select');
  })

  //Evento de click en "OVERVIEW" ocultar divs de "STUDENTS" Y "TEACHERS"
  var overview = document.getElementById('overview');
  overviewMenu.addEventListener('click', function() {
    students.className = 'ocultar';
    teachers.className = 'ocultar';
    overview.classList.remove('ocultar');
    overviewMenu.className = 'select';
    studentsMenu.classList.remove('select');
    teachersMenu.classList.remove('select');
  })

  //Evento de click en "TEACHERS" ocultar divs de "OVERVIEW" Y "STUDENTS"
  var teachers = document.getElementById('teachers');
  teachersMenu.addEventListener('click', function() {
    students.className = 'ocultar';
    overview.className = 'ocultar';
    teachers.classList.remove('ocultar');
    teachersMenu.className = 'select';
    studentsMenu.classList.remove('select');
    overviewMenu.classList.remove('select');
  })

  //Ingresar datos sobre # de alumnas inscritas y desertoras
  var enrollement = document.getElementById('enrollement');
  var inscritasText = document.createElement('div');
  enrollement.appendChild(inscritasText);
  inscritasText.className = 'infoBox';
  inscritasText.innerHTML = '<h1># de inscritas ' + data.SCL["2017-2"].students.length + '</h1>';

  //Calculando el total de desertoras
  var desertorasText = document.createElement('div');
  var inscritas = data.SCL['2017-2'].students.length;
  var desertoras = 0;
  var porcentajeDesertoras = 0;
  for (var i = 0; i < inscritas; i++) {
    if (data.SCL['2017-2'].students[i].active == false) {
      desertoras = desertoras + 1;
    }
  }

  //calcular el porcentaje de desertoras con una regla de tres
  porcentajeDesertoras = (desertoras * 100) / inscritas;
  enrollement.appendChild(desertorasText);
  desertorasText.className = 'infoBox';
  desertorasText.innerHTML = '<h1>' + (number_format(porcentajeDesertoras,0,'','')) +'</h1>'+ '% de deserción ' + '<h3>' + (desertoras) + '# de desertoras ' + '</h3>';

  //Función para formatear el resultado del porcentaje
  function number_format( number, decimals, dec_point, thousands_sep ) {

     var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
     var d = dec_point == undefined ? "," : dec_point;
     var t = thousands_sep == undefined ? "." : thousands_sep, s = n < 0 ? "-" : "";
     var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;

     return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
  }

  //Ingresar datos de desempeño del último sprint "achievement"
    var noCumple = data.SCL["2017-2"].ratings[0].student.no-cumple;
    var supera = data.SCL["2017-2"].ratings[0].student.supera;
    var cumple = data.SCL["2017-2"].ratings[0].student.cumple;
    var cumpleMeta = cumple + supera;
    var achievement = document.getElementById('achievement');
    var achievementText = document.createElement('div');
    achievement.appendChild(achievementText);
    achievementText.className = 'infoBox';
    achievementText.innerHTML = '<h1>' + (cumpleMeta) + '</h1>'+'<br>'+'<h3> # de alumnas que cumple la meta (70% o +) </h3>';


  //Ingresar nivel de satisfacción nps
  var nps = document.getElementById('nps');
  var npsText = document.createElement('div');
  nps.appendChild(npsText);
  npsText.innerHTML = '<h1># de alumnas que cumple la meta (70% o +) ' +
    data.SCL["2017-2"].ratings[0].nps // data.SCL["2017-2"].ratings[1].nps
    +
    '</h1>';


  //PAULA GIRALDO

  //DIANA CHAPARRO
//Lo necesario para menú tabs (pestañas)
var mostrarOcultar = function(event){
    var tabSeleccionado = event.target.dataset.tabSeleccionado;
    var segundaGen2017 = document.getElementById("2017_2");
    var primeraGen2017 = document.getElementById("2017_1");
    var segundaGen2016 = document.getElementById("2016_2");
   
       if(tabSeleccionado === 'tab2017_2'){
        console.log('vemos gen 17-2');
        //oculta gen 2017-1 y 2016-2
        primeraGen2017.style.display= 'none';  
        segundaGen2016.style.display= 'none'
        //mostrar gen 2017-2
        segundaGen2017.style.display="block"; 
        
    }else if (tabSeleccionado === 'tab2017_1'){
        console.log('vemos gen 17-1');
        //oculta gen  2017-2 y 2016-2
        segundaGen2017.style.display= 'none';
        segundaGen2016.style.display= 'none'
        //muestra solo 2017-1
        primeraGen2017.style.display= 'block';

    }else if (tabSeleccionado === 'tab2016_2'){
        console.log('vemos gen 16-2');
        //oculta gen 2017 2 y 1
        segundaGen2017.style.display= 'none';
        primeraGen2017.style.display= 'none'
        //muestra solo 2016-2
        segundaGen2016.style.display= 'block';
    }
    
}
//Siguiendo con el menú tabs (pestañas)...
//creando var para cargar evento del tab (pestañas generaciones)
var cargarPagina = function(){
//ocultando contenido  de todas las solapas al recargar la página
    var segundaGen2017 = document.getElementById("2017_2");
    var primeraGen2017 = document.getElementById("2017_1");
    var segundaGen2016 = document.getElementById("2016_2"); 
    var elementosTab = document.getElementsByClassName("tab");
    segundaGen2017.style.display= 'none';
    primeraGen2017.style.display= 'none'
    segundaGen2016.style.display= 'none';
    var elementosTab = document.getElementsByClassName("tab");
    for(var i = 0; i < elementosTab.length; i++){
        elementosTab[i].addEventListener("click", mostrarOcultar);
    }
}

cargarPagina(); 


/*funcionalidad del buscador interno de alumnas*/
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

//alert('estoy');comprobando vinculo y funcionalidad

}
//´Botón TOP para ir arriba al inicio de sección
function toTop() {
    window.scrollTo(0, 0)
}
toTop();



// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
