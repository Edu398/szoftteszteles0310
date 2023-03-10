function validateForm() {
    let kNev = document.getElementById("kNev").value;
    let vNev = document.getElementById("vNev").value;
    let jelszo1 = document.getElementById("jelszo1").value;
    let jelszo2 = document.getElementById("jelszo2").value;
    
    if (kNev === "" || vNev === "" || jelszo1 === "" || jelszo2 === "") {
        alert("Minden mező kitöltése kötelező!");
        return false;
    }
    
    if (jelszo1 !== jelszo2) {
        alert("A két jelszó nem egyezik meg!");
        document.getElementById("jelszo2").focus();
        return false;
    }
    
    return true;
}

function validateForm2() {
    let x = document.validTeszt.kNev.value;
    if (x === "") {
        alert("A mező kitöltése kötelező!");
        return false;
    }
}
