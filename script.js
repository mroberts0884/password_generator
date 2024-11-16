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
    let result = ''
    let characterPool = ''
   
    if (uppercase.checked) {
      characterPool += uppercaseLetters
       } 
    else if (lowercase.checked) {
        characterPool += lowercaseLetters
         }
    else if (numbers.checked) {
        characterPool += number_char
        }
    else if (numbers.checked) {
        characterPool += number_char
        }
    else if (symbols.checked) {
        characterPool += symbol_char
        }
           
    if (characterPool === '') {
        passwordDisplay.textContent = 'Please select at least one character type.';
        return;
    }

    for (i = 0; i < length; i++) {
        result += characterPool.charAt(Math.floor(Math.random() * characterPool.length))
    }
    return result
}

generate_btn.addEventListener('click', function() {
    const length = parseInt(character_length.value);
    const password = getRandomString(length)
    passwordDisplay.innerText = password

})
    
        
        
    


