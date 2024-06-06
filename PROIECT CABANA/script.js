function openLocation() {
    window.open("https://www.google.com/maps/place/Lotrioara+Sibiu", "_blank");
}

function openReservation() {
    window.location.href = "pagina-de-rezervari.html";
}

function openContact() {
    window.location.href = "contact.html";
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP-uI2CSVW-WvAOTZsstCebLV9ieZyxVo",
  authDomain: "cabanalotrioara.firebaseapp.com",
  projectId: "cabanalotrioara",
  storageBucket: "cabanalotrioara.appspot.com",
  messagingSenderId: "648139353740",
  appId: "1:648139353740:web:0d0210d1fdca32b4f215a9",
  measurementId: "G-7EWHXV6C4S"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics(app);
const db = firebase.firestore(app);

document.addEventListener('DOMContentLoaded', (event) => {
    const butonSubmit = document.getElementById('butonSubmit');
    if (butonSubmit) {
        butonSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            var nume = document.getElementById("nume").value;
            var telefon = document.getElementById("telefon").value;
            var data = document.getElementById("data").value;

            if (nume && telefon && data) {
                db.collection("rezervari").add({
                    Nume: nume,
                    Telefon: telefon,
                    Data: data,
                }).then(() => {
                    alert("Rezervare efectuata cu succes!");
                }).catch((error) => {
                    console.error("Eroare la adaugarea documentului: ", error);
                });
            } else {
                alert("Te rog completează toate câmpurile!");
            }
        });
    }
});

function goHome() {
    window.location.href = 'index.html'; // schimbă locația în pagina principală 'index.html'
}
