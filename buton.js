let form = document.querySelector('form');
let buttonContainer = document.getElementById('btncontainer');

form.addEventListener('click', (event) =>{
  
  event.preventDefault();
  
  let numButtons = parseInt(document.getElementById('input1').value);
  let winerIndex = Math.floor(Math.random() * numButtons);
  
  for (let i = 0; i < numButtons; i++) {

    let button = document.createElement('button');
    button.textContent = `Button ${i + 1}`;
    button.className = 'btn btn-success';
    buttonContainer.appendChild(button);
    
    button.addEventListener('click', function() {
      if (i === winerIndex) {
        alert('Butonul este câștigător!');
      } else {
        alert('Scuze,butonul este necâștigător.');
      }
    });
  };
});