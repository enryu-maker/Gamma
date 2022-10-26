function isValidEmail(value) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

function isValidNumber(value){
        const re =/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    return re.test(value)
    
}

function validateEmail(value, setEmailError) {
    if (isValidEmail(value)) {
        setEmailError("")
    }
    else {
        setEmailError("Invalid Email")
    }
}

function validatePassword(value,value1,setPasswordError) {
    if (value!=value1) {
        setPasswordError("Password doesn't match")
    } 
    else {
        setPasswordError("")
    }
}

function validateInput(value, minLength, setError) {
    if (value.length < minLength) {
        setError("Invalid Input")
    } else {
        setError("")
    }
}

  function onValidUsername(value){
    const re = /^[a-z0-9_.]+$/
    return re.test(value)
}
function validateUser(value, setError) {
    if (onValidUsername(value)) {
        setError("")
    }
    else {
        setError("Invalid Username")
    }
}



const utils = {
    isValidEmail,
    validateEmail,
    validatePassword,
    validateInput,
    validateUser
};

export default utils;