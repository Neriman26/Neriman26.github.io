console.log("salam");

document.getElementById("Gonder").addEventListener("click", yoxlama);

function yoxlama() {
    let ad = document.getElementById("ad").value;
    let soyad = document.getElementById("soyad").value;
    let email = document.getElementById("email").value;
    let telefon = document.getElementById("telefon").value;
    let muraciet = document.getElementById("Muraciet").value;
    if(ad === "" || soyad === "" || email === "" || telefon === "" || muraciet === ""){
        alert("Zehmet olmasa butun xanalar doldurulsun!");
    }
    else {
        alert("Muracietiniz ugurla gonderildi. Teshhekkurler!");
    }
}