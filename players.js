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

  var audio = new Audio("audio.mp3");
  var buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});


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

  

  function player1() {
    var blockHTML = `
    <img class="img-fluid col-8 p-0 m-0" src="materials/terstegen.webp" style="height: 600px;">
                    <div class="col-4 d-flex flex-column text-start px-4 text-wrap">
                        <p class="fw-bold text-uppercase"><span class="text-danger">NATIONAL:</span> Portugal</p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">DATE OF BIRTH:</span> 10/02/1988</p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">height:</span> 183 cm </p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">weight:</span> 80 kg </p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">position:</span> Forwarder   </p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">played:</span> 200</p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">goal:</span> 20</p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">red flags:</span> 20</p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">yellow flags:</span> 20</p>
                        <p class=""><span class="text-danger text-uppercase fw-bold ">information:</span>Lionel Messi signs a contract with Paris Saint-Germain (PSG) after leaving FC Bayern, marking a significant move in the football world.</p>
                    </div>
  `;
  var blockContainer = document.getElementById('playerInfo');
  blockContainer.innerHTML = blockHTML;
  };

  function player2() {
    var blockHTML = `
    <img class="img-fluid col-8 p-0 m-0" src="materials/ronald.jpg" style="height: 600px;">
                    <div class="col-4 d-flex flex-column text-start px-4 text-wrap">
                        <p class="fw-bold text-uppercase"><span class="text-danger">NATIONAL:</span> Portugal</p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">DATE OF BIRTH:</span> 10/02/1988</p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">height:</span> 183 cm </p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">weight:</span> 80 kg </p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">position:</span> Forwarder   </p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">played:</span> 200</p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">goal:</span> 20</p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">red flags:</span> 20</p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">yellow flags:</span> 20</p>
                        <p class=""><span class="text-danger text-uppercase fw-bold ">information:</span>Lionel Messi signs a contract with Paris Saint-Germain (PSG) after leaving FC Bayern, marking a significant move in the football world.</p>
                    </div>
  `;
  var blockContainer = document.getElementById('playerInfo');
  blockContainer.innerHTML = blockHTML;
  };

  function player3() {
    var blockHTML = `
    <img class="img-fluid col-8 p-0 m-0" src="materials/balde.jpg" style="height: 600px;">
                    <div class="col-4 d-flex flex-column text-start px-4 text-wrap">
                        <p class="fw-bold text-uppercase"><span class="text-danger">NATIONAL:</span> Portugal</p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">DATE OF BIRTH:</span> 10/02/1988</p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">height:</span> 183 cm </p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">weight:</span> 80 kg </p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">position:</span> Forwarder   </p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">played:</span> 200</p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">goal:</span> 20</p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">red flags:</span> 20</p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">yellow flags:</span> 20</p>
                        <p class=""><span class="text-danger text-uppercase fw-bold ">information:</span>Lionel Messi signs a contract with Paris Saint-Germain (PSG) after leaving FC Bayern, marking a significant move in the football world.</p>
                    </div>
  `;
  var blockContainer = document.getElementById('playerInfo');
  blockContainer.innerHTML = blockHTML;
  };


  function player4() {
    var blockHTML = `
    <img class="img-fluid col-8 p-0 m-0" src="materials/Lewandowski.png" style="height: 600px;">
                    <div class="col-4 d-flex flex-column text-start px-4 text-wrap">
                        <p class="fw-bold text-uppercase"><span class="text-danger">NATIONAL:</span> Portugal</p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">DATE OF BIRTH:</span> 10/02/1988</p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">height:</span> 183 cm </p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">weight:</span> 80 kg </p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">position:</span> Forwarder   </p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">played:</span> 200</p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">goal:</span> 20</p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">red flags:</span> 20</p>
                        <p class="fw-bold text-uppercase"><span class="text-danger">yellow flags:</span> 20</p>
                        <p class=""><span class="text-danger text-uppercase fw-bold ">information:</span>Lionel Messi signs a contract with Paris Saint-Germain (PSG) after leaving FC Bayern, marking a significant move in the football world.</p>
                    </div>
  `;
  var blockContainer = document.getElementById('playerInfo');
  blockContainer.innerHTML = blockHTML;
  };
  var createPlayer1 = document.getElementById('1player');
  createPlayer1.addEventListener('click', player1);
  var createPlayer2 = document.getElementById('2player');
  createPlayer2.addEventListener('click', player2);
  var createPlayer3 = document.getElementById('3player');
  createPlayer3.addEventListener('click', player3);
  var createPlayer4 = document.getElementById('4player');
  createPlayer4.addEventListener('click', player4);
  var createPlayer5 = document.getElementById('5player');
  createPlayer5.addEventListener('click', player1);
  var createPlayer6 = document.getElementById('6player');
  createPlayer6.addEventListener('click', player2);
  var createPlayer7 = document.getElementById('7player');
  createPlayer7.addEventListener('click', player3);
  var createPlayer8 = document.getElementById('8player');
  createPlayer8.addEventListener('click', player4);
  var createPlayer9 = document.getElementById('9player');
  createPlayer9.addEventListener('click', player1);
  var createPlayer10 = document.getElementById('10player');
  createPlayer10.addEventListener('click', player2);
  var createPlayer11 = document.getElementById('11player');
  createPlayer11.addEventListener('click', player3);


  

