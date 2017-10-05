// Variables
let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
let numberInput = document.querySelector('#numberInput');

// Event Listeners
numberInput.addEventListener('input', getFactFetch);

// Functions
function getFactFetch() {
    let number = numberInput.value;

    fetch('http://numbersapi.com/'+number)
        .then(response => response.text())
        .then(data => {
            if(number !== '') {
                fact.style.display = 'block';
                factText.innerText = data;
            } else {
                fact.style.display = 'none';
                factText.innerText = '';
            }
        })
        .catch(err => console.log(err));
}

/*
AJAX WAY

function getFactAjax(e) {
    let number = numberInput.value;

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://numbersapi.com/' + number, true);

    xhr.onload = function() {
        if (this.status == 200 && number !== '') {
            let response = this.responseText;
            fact.style.display = 'block';
            factText.innerText = response;
        }
    }

    xhr.send();
}
*/