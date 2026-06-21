let prediksi =
JSON.parse(localStorage.getItem("prediksi")) || [];

let juara =
JSON.parse(localStorage.getItem("juara")) || [];

function simpanPrediksi(){

let nama =
document.getElementById("nama").value;

let pertandingan =
document.getElementById("match").value;

let skor1 =
document.getElementById("skor1").value;

let skor2 =
document.getElementById("skor2").value;

 if(nama === "" || skor1 === "" || skor2 === ""){
        alert("Lengkapi data terlebih dahulu!");
        return;}

prediksi.push({
nama,
pertandingan,
skor1,
skor2,
poin:0
});

localStorage.setItem(
"prediksi",
JSON.stringify(prediksi)
);

alert("Prediksi berhasil disimpan!");

tampilkanLeaderboard();
}

function simpanJuara(){

let negara =
document.getElementById("negaraJuara").value;

juara.push(negara);

localStorage.setItem(
"juara",
JSON.stringify(juara)
);

tampilkanJuara();

alert("Prediksi juara berhasil disimpan!");
}

function tampilkanJuara(){

let list =
document.getElementById("listJuara");

list.innerHTML="";

juara.forEach(function(item){

list.innerHTML +=
`<li>${item}</li>`;

});

}

function tampilkanLeaderboard(){

let body =
document.getElementById("leaderboardBody");

body.innerHTML="";

prediksi.forEach(function(item){

body.innerHTML += `
<tr>
<td>${item.nama}</td>
<td>${item.poin}</td>
</tr>
`;

});

}

function prediksiAI(){

let negara = [
"Argentina",
"Brazil",
"Prancis",
"Inggris",
"Portugal",
"Spanyol"
];

let hasil =
negara[Math.floor(Math.random()*negara.length)];

document.getElementById(
"hasilAI"
).innerHTML =
"Prediksi AI Juara Dunia 2026: <b>" +
hasil +
"</b>";
}

tampilkanJuara();
tampilkanLeaderboard();
