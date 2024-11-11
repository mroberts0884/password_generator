const character_length = document.getElementById('character_length');
const character_number = document.getElementById('character_number');
character_number.textContent = character_length.value;
const generate_btn = document.getElementById('generate_button')

character_length.oninput = function() {
    character_number.textContent = this.value;
    const uppercase = document.getElementById('uppercase')
    const lowercase = document.getElementById('lowercase')
    const numbers = document.getElementById('numbers')
    const symbols = document.getElementById('symbols')
}

generate_btn.addEventListener('click', (event) => {
    
})
