form.addEventListener('submit', (e) => {
    let firstname = document.getElementById('firstname')
    let lastname = document.getElementById('lastname')
    let spouse = document.getElementById('spouse')
    let form = document.getElementById('form')
    let details = document.getElementById('details')

    var regex = /^[A-Z][a-z]{3,20}/;
    let messages = []
    console.log(lastname);
    if (!regex.test(firstname.value)) {
        alert('Invalid firstname.');
    } else {
        alert('Valid firstname.');
    }

    if (!regex.test(lastname.value)) {
        alert('invalid lastname.');
    } else {
        alert('valid lastname.');
    }

    if (firstname.value === '' || firstname.value == null) {
        alert('firstname is required')
    }

    if (lastname.value === '' || lastname.value == null) {
        alert('lastname is required')
    }

    if ((form.gender[0].checked == false) && (form.gender[1].checked == false)) {
        alert('gender is required')
    }

    if ((form.maratialstatus[0].checked == false) && (form.maratialstatus[1].checked == false)) {
        alert('maratialstatus is required')
    }
    // spoutstatus == 0
    if (spouse.value === '' && (form.maratialstatus[1].checked == false) || spouse.value == null) {
        alert('spouse is required')
    }

    if (details.value === '' || details.value == null) {
        alert('details is required')
    }

    if (firstname.value.length >= 10) {
        alert('firstname must be less than 10 characters')
    }
    if (lastname.value.length >= 10) {
        alert('firstname must be less than 10 characters')
    }
    if (spouse.value.length >= 10) {
        alert('firstname must be less than 10 characters')
    }


    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})

// var spoutstatus = 0;

function myDisable() {
    // spoutstatus = 1;
    document.getElementById("spouse").disabled = true;
}

function myanable() {
    document.getElementById("spouse").disabled = false;
    // spoutstatus = 0;
}

function resetbtn() {
    form.reset();
}