const character_length = document.getElementById('character_length');
const character_number = document.getElementById('character_number');
character_number.textContent = character_length.value;
const generate_btn = document.getElementById('generate_button')
const passwordDisplay = document.getElementById('passworddisplay')


character_length.oninput = function() {
    character_number.textContent = this.value;
}
//Random Characters
function characterRandom(str,result) {
    result.push(str.charAt(Math.floor(Math.random() * str.length)))
}
//style for the strength meter
function strengthStyle(container, strength_text, strength_meter) {
    container.style.display = 'flex'
    container.style.flexDirection = 'row'
    container.style.gap = '0.5em'
    strength_text.style.display = 'flex'
    strength_meter.style.display = 'flex'
    return
}
//When the strength meter shouldn't be shown
function doNotShow(container, strength_text, strength_meter) {
    container.style.display = 'none'
    strength_text.style.display = 'none'
    strength_meter.style.display = 'none'
    return
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
    const too_weak = document.getElementById('too_weak')
    const strength_tooweak = document.querySelector('.strength_tooweak');
    const strength_meter_tooweak = document.querySelector('.strength-meter-tooweak');
    const strength_weak = document.querySelector('.strength_weak');
    const strength_meter_weak = document.querySelector('.strength-meter-weak');
    const weak = document.getElementById('weak')
    const strength_medium = document.querySelector('.strength_medium');
    const strength_meter_medium = document.querySelector('.strength-meter-medium');
    const medium = document.getElementById('medium')
    const strength_strong = document.querySelector('.strength_strong');
    const strength_meter_strong = document.querySelector('.strength-meter-strong');
    const strong = document.getElementById('strong')
    const all_checked = document.querySelectorAll('input[type="checkbox"]')
    let result = []
    let characterPool = ''

    const options = [
        {type: 'uppercase', checked: uppercase.checked, chars: uppercaseLetters},
        {type: 'lowercase', checked: lowercase.checked, chars: lowercaseLetters},
        {type: 'symbols', checked: symbols.checked, chars: symbol_char},
        {type: 'numbers', checked: numbers.checked, chars: number_char},
    ]

    const selectedOptions = options.filter(option => option.checked)

    if (selectedOptions.length > 0) {
        for (const option of selectedOptions) {
            characterPool += option.chars
            characterRandom(option.chars, result)
        }
    }
    
    if (selectedOptions.length === 1) {
        strengthStyle(too_weak, strength_tooweak, strength_meter_tooweak)
        doNotShow(weak, strength_weak, strength_meter_weak)
        doNotShow(medium, strength_medium, strength_meter_medium)
        doNotShow(strong, strength_strong, strength_meter_strong)
    } 
    else if (selectedOptions.length === 2) {
        strengthStyle(weak, strength_weak, strength_meter_weak)
        doNotShow(strong, strength_strong, strength_meter_strong)
        doNotShow(too_weak, strength_tooweak, strength_meter_tooweak)
        doNotShow(medium, strength_medium, strength_meter_medium)
    }
    else if (selectedOptions.length === 3) {
        strengthStyle(medium, strength_medium, strength_meter_medium)
        doNotShow(strong, strength_strong, strength_meter_strong)
        doNotShow(weak, strength_weak, strength_meter_weak)
        doNotShow(too_weak, strength_tooweak, strength_meter_tooweak)
    }
    else if (selectedOptions.length === 4) {
        strengthStyle(strong, strength_strong, strength_meter_strong)
        doNotShow(too_weak, strength_tooweak, strength_meter_tooweak)
        doNotShow(weak, strength_weak, strength_meter_weak)
        doNotShow(medium, strength_medium, strength_meter_medium)
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
