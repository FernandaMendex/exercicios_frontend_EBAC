const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const num1 = document.getElementById('primeiroNum').value;
    const num2 = document.getElementById('segundoNum').value;
    if (num1 > num2) {
        alert(`${num1} é maior que ${num2}`);
    } else {
        alert(`${num1} não é maior que ${num2}`);
    }        
    }
)

