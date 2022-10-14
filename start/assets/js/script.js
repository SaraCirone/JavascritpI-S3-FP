
//inserimento 
function insert(string) {
    document.getElementById('display').value += string;
}
//cancella tutto
function cancAll() {
    document.getElementById('display').value = '';
}
//cancella ultimo elemento
function cancLast() {
    let input = document.getElementById("display");
    input.value = input.value.substring(0, input.value.length - 1);
}
//calcolo
function equal() {
    document.getElementById('display').value = eval(document.getElementById('display').value);
}

//radice quadrata
function root() {
    let val = document.getElementById('display').value; 
    document.getElementById('display').value = Math.sqrt(val);

}

//potenza
function potenza() {
    let x = parseInt(document.getElementById('display').value);
    let y = parseInt(document.getElementById('display').value);
    let result = Math.pow(x,y);
    document.getElementById('display').value = result
}