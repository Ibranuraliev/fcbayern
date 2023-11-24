function nextMatch() {
  var tableHTML = `
  <table class="table table-striped table-bordered p-0 m-0">
    <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Club 1</th>
        <th scope="col">Club 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>01 Juni 19:00</td>
        <td>Jupentus</td>
        <td>FCBayern</td>
      </tr>
      <tr>
        <td>06 Juni 19:00</td>
        <td>Pro Soccer</td>
        <td>Viorentina</td>
      </tr>
      <tr>
        <td>16 Juni 19:00</td>
        <td>Atlantas</td>
        <td>Pro Soccer</td>
      </tr>
      <tr>
        <td>21 Juni 19:00</td>
        <td>Jupentus</td>
        <td>Atlantas</td>
      </tr>
    </tbody>
  </table>
`;
var tableContainer = document.getElementById('tableContainer');
tableContainer.innerHTML = tableHTML;
};

function leagueTable() {
  var tableHTML = `
  <table class="table table-striped table-bordered p-0 m-0">
    <thead>
      <tr>
        <th scope="col">Team</th>
        <th scope="col">W</th>
        <th scope="col">D</th>
        <th scope="col">L</th>
        <th scope="col">Point</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>FCBayern</td>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td>12</td>
      </tr>
      <tr>
        <td>Jupentus</td>
        <td>3</td>
        <td>1</td>
        <td>1</td>
        <td>10</td>
      </tr>
      <tr>
        <td>Pro Soccer</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>8</td>
      </tr>
      <tr>
        <td>Viorentina</td>
        <td>2</td>
        <td>1</td>
        <td>3 </td>
        <td>7</td>
      </tr>
    </tbody>
  </table>
`;
var tableContainer = document.getElementById('tableContainer');
tableContainer.innerHTML = tableHTML;
};

function trainingSchedule() {
  var tableHTML = `
  <table class="table table-striped table-bordered p-0 m-0">
    <thead>
      <tr>
        <th scope="col">Time</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Sunday 07:00 - 10:00</td>
        <td>Workout</td>
      </tr>
      <tr>
        <td>Sunday 14:00 - 18:00</td>
        <td>Training Penalty Kick</td>
      </tr>
      <tr>
        <td>Monday 07:00 - 10:00</td>
        <td>Aerobic</td>
      </tr>
      <tr>
        <td>Monday 14:00 - 18:00</td>
        <td>Training Free Kick</td>
      </tr>
    </tbody>
  </table>
`;
var tableContainer = document.getElementById('tableContainer');
tableContainer.innerHTML = tableHTML;
};

var createLeagueTable = document.getElementById('leagueTableBtn')
var createTrainingSchedule = document.getElementById('trainingScheduleBtn')
var createNextMatch = document.getElementById('nextMatchBtn');
createNextMatch.addEventListener('click', nextMatch);
createTrainingSchedule.addEventListener('click', trainingSchedule);
createLeagueTable.addEventListener('click', leagueTable);



var buttonGroup = document.getElementById('buttonGroup');
var buttons = buttonGroup.querySelectorAll('.btn');

function handleButtonClick(event) {
  buttons.forEach(function(button) {
    button.classList.remove('active');
  });
  event.target.classList.add('active');
};

buttons.forEach(function(button) {
  button.addEventListener('click', handleButtonClick);
});


$(document).keypress(function(event){
  if(event.key === "1"){
      window.location.href="index.html#home";
  }
  else if(event.key === "2"){
      window.location.href="index.html#about";
  }
  else if(event.key === "3"){
      window.location.href="index.html#matches";
  }
  else if(event.key === "4"){
      window.location.href="index.html#news";
  }
  else if(event.key === "5"){
    window.location.href="index.html#contact";
}
});


function onEntry(entry) {
  entry.forEach(change => {
      if (change.isIntersecting) {
      change.target.classList.add('show');
      }
  });
};

let options = {
threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.fadeblock');  
for (let elm of elements) {
  observer.observe(elm);
};

$("#viewBtn1").mouseover(function(){
  $("#viewBtn1").text("View");
});

$("#viewBtn1").mouseout(function(){
  $("#viewBtn1").text("Read more");
});

$("#viewBtn2").mouseover(function(){
  $("#viewBtn2").text("View");
});

$("#viewBtn2").mouseout(function(){
  $("#viewBtn2").text("Read more");
});

$("#viewBtn3").mouseover(function(){
  $("#viewBtn3").text("View");
});

$("#viewBtn3").mouseout(function(){
  $("#viewBtn3").text("Read more");
});