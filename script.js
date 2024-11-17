const character_length = document.getElementById('character_length');
const character_number = document.getElementById('character_number');
character_number.textContent = character_length.value;
const generate_btn = document.getElementById('generate_button')
const passwordDisplay = document.getElementById('passworddisplay')


character_length.oninput = function() {
    character_number.textContent = this.value;
}

function getRandomString(length) {
    const uppercase = document.getElementById('uppercase')
    const lowercase = document.getElementById('lowercase')
    const numbers = document.getElementById('numbers')
    const symbols = document.getElementById('symbols')
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const number_char = '1234567890'
    const symbol_char = '!@#$%&*()'
    let result = []
    let characterPool = ''
   
    if (uppercase.checked) {
      characterPool += uppercaseLetters
       } 
    if (lowercase.checked) {
        characterPool += lowercaseLetters
         }
    if (numbers.checked) {
        characterPool += number_char
        }
    if (numbers.checked) {
        characterPool += number_char
        }
    if (symbols.checked) {
        characterPool += symbol_char
        }
    if (uppercase.checked && lowercase.checked) {
        characterPool += uppercaseLetters + lowercaseLetters
        result.push(uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length)))
        result.push(lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length)))
        
    }    
    if (characterPool === '') {
        passwordDisplay.textContent = 'Please select at least one character type.';
        return;
    }

    while (result.length < length) {
        result.push(characterPool.charAt(Math.floor(Math.random() * characterPool.length)));
    }

    result.sort(() => Math.random() - 0.5) 
    return result.join('')

}

generate_btn.addEventListener('click', function() {
    const length = parseInt(character_length.value);
    const password = getRandomString(length)
    passwordDisplay.innerText = password

})
    
        
        
    


