let val = ''

function clearInput() {
    val = ''
    document.getElementById('val').value = val
}

function Delete() {
    val = val.slice(0, -1)
    document.getElementById('val').value = val

}

function appendValue(value) {
    val += value
    document.getElementById('val').value = val

}

function CalculateVal() {
    try {
        val = eval(val)
        document.getElementById('val').value = val
    } catch (error) {
        document.getElementById('val').value = 'Error'
    }
}