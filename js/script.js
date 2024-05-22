function hitungLuas() {
  var alas = parseFloat(document.getElementById("alas").value);
  var tinggi = parseFloat(document.getElementById("tinggi").value);

  var luas = 0.5 * alas * tinggi;

  var formulaLuas = "Rumus Luas Segitiga: L = 1/2 × a × t";
  var inputValuesLuas = "Alas: " + alas + ", Tinggi: " + tinggi;

  document.querySelector(".hasilLuas").innerHTML =
    "Hasil Luas: " + luas.toFixed(2);
  document.querySelector(".rumusLuas").innerHTML =
    formulaLuas + "<br>" + inputValuesLuas;
}

function hitungKeliling() {
  var s1 = parseFloat(document.getElementById("Sisi1").value);
  var s2 = parseFloat(document.getElementById("Sisi2").value);
  var s3 = parseFloat(document.getElementById("Sisi3").value);

  var keliling = s1 + s2 + s3;

  var formulaKeliling = "Rumus Keliling Segitiga: K = S1 + S2 + S3";
  var inputValuesKeliling =
    "Sisi 1: " + s1 + ", Sisi 2: " + s2 + ", Sisi 3: " + s3;

  document.querySelector(".hasilKeliling").innerHTML =
    "Hasil Keliling: " + keliling.toFixed(2);
  document.querySelector(".rumusKeliling").innerHTML =
    formulaKeliling + "<br>" + inputValuesKeliling;
}

function resetLuas() {
  document.getElementById("inputAlas").value = "";
  document.getElementById("inputTinggi").value = "";
  document.querySelector(".hasilLuas").innerHTML = "";
  document.querySelector(".rumusLuas").innerHTML = "";
}

function resetKeliling() {
  document.getElementById("inputSisi1").value = "";
  document.getElementById("inputSisi2").value = "";
  document.getElementById("inputSisi3").value = "";
  document.querySelector(".hasilKeliling").innerHTML = "";
  document.querySelector(".rumusKeliling").innerHTML = "";
}
