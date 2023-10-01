
const validateName = (name) => /^[а-яА-Яa-zA-Z._\s-]{2,30}$/.test(name)
const validateEmail = (email) =>
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    )

const validateZip = (zip) => /(^[A-Za-z0-9][A-Za-z0-9\- ]{0,10}[A-Za-z0-9]$)/.test(zip)

const checkValidateCity = (city) => {
    let cityErrors = []
    if (city === ''){
        cityErrors = [{type:'empty', message:'Please provide a city'}]
    } else if (city.length < 2){
        cityErrors = [{type:'tooshort', message: 'Seems a bit short...'}]
    } else if (city.length > 20){
        cityErrors = [{type:'toolong', message: 'Seems a bit long...'}]
    } else if (!validateName(city)){
        cityErrors = [{type:'invalidcharacter', message: 'Please provide a valid city'}]
    }
    return cityErrors
}

const checkValidateAddress = (address) => {
    let addressErrors = []
    if(address === ''){
        addressErrors = [{type:'empty', message: 'Please provide your address'}]
    } else if (address.length < 5){
        addressErrors = [{type:'tooshort', message: 'Seems a bit short...'}]
    } else if (address.length > 40){
        addressErrors = [{type:'toolong', message: 'Seems a bit long...'}]
    } else{
        addressErrors = []
    }
    return addressErrors
}

const checkValidateFirstName = (name) => {
    let nameErrors = []
   
    if (name === '') {
        nameErrors = [{ type: 'empty', message: 'Please enter your first name' }]
    } else if (name.length < 2 || name.length > 30) {
        nameErrors = [{ type: 'short', message: "That's not your name..." }]
    } 
    else if (!validateName(name)) {
        nameErrors = [{ type: 'invalid', message: 'Enter a valid first name' }]
    } else {
        nameErrors = []
    }
    return nameErrors
}
const checkValidateMiddleName = (name) => {
    let nameErrors = []
    if (name === '') {
        nameErrors = [{ type: 'empty', message: 'Please enter your middle name' }]
    } else if (name.length < 2 || name.length > 30) {
        nameErrors = [{ type: 'short', message: "That's not your name..." }]
    } 
    else if (!validateName(name)) {
        nameErrors = [{ type: 'invalid', message: 'Enter a valid first name' }]
    } else {
        nameErrors = []
    }
    return nameErrors
}
const checkValidateLastName = (lastName) => {
    let familyErrors = []
    if (lastName === '') {
        familyErrors = [{ type: 'empty', message: 'Enter your last name' }]
    } else if (lastName.length < 2) {
        familyErrors = [{ type: 'short', message: 'Too short' }]
    } else if (lastName.length > 30) {
        familyErrors = [{ type: 'long', message: 'Too long' }]
    } else if (!validateName(lastName)) {
        familyErrors = [{ type: 'invalid', message: 'Enter a valid last name' }]
    } else {
        familyErrors = []
    }
    return familyErrors
}
const checkValidateEmail = (email) => {
    let emailErrors = []
    if (email === '') {
        emailErrors = [{ type: 'empty', message: 'Enter your email' }]
    } else if (!validateEmail(email)) {
        emailErrors = [{ type: 'invalid', message: 'Enter a valid email' }]
    } else {
        emailErrors = []
    }
    return emailErrors
}

const checkValidateText = (text) => {
    let textErrors = []

    if (text.length < 2) {
        textErrors = [{ type: 'short', message: 'Too short' }]
    } else if (text.length > 100) {
        textErrors = [{ type: 'long', message: 'Too long' }]
    } else {
        textErrors = []
    }
    return textErrors
}

const checkValidateZip = (zip) => {
    let zipErrors = []
    if (zip === '') {
        zipErrors = [{ type: 'empty', message: 'Enter your ZIP' }]
    } else if (!validateZip(zip)) {
        zipErrors = [{ type: 'invalid', message: 'Enter a valid ZIP' }]
    } else {
        zipErrors = []
    }
    return zipErrors
}


const checkValidatePhone = (phone) => {
    let phoneErrors = []
    if (phone == ' ') {
        phoneErrors = ['Please provide a phone number']
    } else if (phone.length < 10) {
        phoneErrors = [{ type: 'invalid', message: 'Invalid phone number' }]
    } else{
        phoneErrors = []
    }
    return phoneErrors
}

const checkValidateState = (data) => {
    let stateErrors = []
    console.log(data)
    if(data == '' || data == null){
        stateErrors = [{type: 'missing', message: "Don't forget your state!"}]
    }
    return stateErrors
}
export {
    validateName,
    validateEmail,
    validateZip,
    checkValidateFirstName,
    checkValidateMiddleName,
    checkValidateLastName,
    checkValidateEmail,
    checkValidateText,
    checkValidateZip,
    checkValidatePhone,
    checkValidateAddress,
    checkValidateCity,
    checkValidateState,
}