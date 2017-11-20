window.onload = function(){
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

  //Ingresar datos sobre # de alumnas inscritas y desertoras
  var enrollement = document.getElementById('enrollement');
  var inscritasText = document.createElement('div');
  enrollement.appendChild(inscritasText);
  inscritasText.innerHTML = '<h1># de inscritas ' + data.SCL["2017-2"].students.length + '</h1>';
  //DESERTORAS
  for (var i = 0; i < data.SCL['2017-2'].students.length; i++){
    var enrollement = document.getElementById('enrollement');
    var desertorasText = document.createElement('div');
    enrollement.appendChild(desertorasText);
    desertorasText.innerHTML = '<h1># de desertoras ' + data.SCL["2017-2"].students.active + '</h1>';
  }

  //Ingresar gráfico de % de deserción por sprints

  //Ingresar datos de desempeño por sprint "achievement"
  for (var i = 0; i < data.SCL['2017-2'].ratings.length; i++) {
  var achievement = document.getElementById('achievement');
  var achievementText = document.createElement('div');
  achievement.appendChild(achievementText);
  achievementText.innerHTML = '<h1># de alumnas que cumple la meta (70% o +) '
  + data.SCL["2017-2"].ratings[0].student // data.SCL["2017-2"].ratings[0,1].student
  + '</h1>';
  }

  //Ingresar nivel de satisfacción nps
  var nps = document.getElementById('nps');
  var npsText = document.createElement('div');
  nps.appendChild(npsText);
  npsText.innerHTML = '<h1># de alumnas que cumple la meta (70% o +) '
  + data.SCL["2017-2"].ratings[0].nps // data.SCL["2017-2"].ratings[1].nps
  + '</h1>';

  //Evento de click en "STUDENTS" ocultar divs de "OVERVIEW" Y "TEACHERS"
  var overviewDiv = document.getElementById('overview');
  var teachersDiv = document.getElementById('teachers');
  var students = document.getElementById('studentsMenu');
  studentsMenu.addEventListener('click', function(){
    overviewDiv.className = 'ocultar';
    teachersDiv.className = 'ocultar';
    var studentsDiv = document.getElementById('div');
    studentsDiv.className = 'students';
    var home = document.getElementById('home');
    home.appendChild(studentsDiv);

  })

  //Evento de click en "OVERVIEW" ocultar divs de "STUDENTS" Y "TEACHERS"
  var studentsDiv = document.getElementById('students');
  var teachersDiv = document.getElementById('teachers');
  var overview = document.getElementById('overviewMenu');
  overviewMenu.addEventListener('click', function(){
    studentsDiv.className = 'ocultar';
    teachersDiv.className = 'ocultar';
    overviewDiv.

  })

};

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
