function handleInput(element,target) {
    const value = element.value;
    document.querySelector(`#${target}Result`).textContent = value; 
}
function savePersonalInfo() {
    const name = document.querySelector('#name').value;

    if(name.length >= 2) {
        
    } else {
        document.querySelector('#name').parentElement.classList.add('border-red');
    }
}