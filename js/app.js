window.onload = function() {
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
  desertorasText.innerHTML = '<h1># de desertoras ' + (desertoras) + '<br>' + (number_format(porcentajeDesertoras,0,'',''))+'% de deserción ' + '</h1>';

  //Función para formatear el resultado del porcentaje
  function number_format( number, decimals, dec_point, thousands_sep ) {

     var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
     var d = dec_point == undefined ? "," : dec_point;
     var t = thousands_sep == undefined ? "." : thousands_sep, s = n < 0 ? "-" : "";
     var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;

     return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
  }

  //Ingresar datos de desempeño por sprint "achievement"
  for (var i = 0; i < data.SCL['2017-2'].ratings.length; i++) {
    var achievement = document.getElementById('achievement');
    var achievementText = document.createElement('div');
    achievement.appendChild(achievementText);
    achievementText.innerHTML = '<h1># de alumnas que cumple la meta (70% o +) ' +
      data.SCL["2017-2"].ratings[0].student // data.SCL["2017-2"].ratings[0,1].student
      +
      '</h1>';
  }

  //Ingresar nivel de satisfacción nps
  var nps = document.getElementById('nps');
  var npsText = document.createElement('div');
  nps.appendChild(npsText);
  npsText.innerHTML = '<h1># de alumnas que cumple la meta (70% o +) ' +
    data.SCL["2017-2"].ratings[0].nps // data.SCL["2017-2"].ratings[1].nps
    +
    '</h1>';


};


// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
