function hitung() {
  // Ambil nilai panjang sisi persegi dari input
  var sisi = parseFloat(document.getElementById('sisi').value);

  // Validasi apakah input adalah angka positif
  if (isNaN(sisi) || sisi <= 0) {
    alert('Masukkan angka positif untuk panjang sisi.');
    return;
  }

  // Hitung luas dan keliling persegi
  var luas = sisi * sisi;
  var keliling = 4 * sisi;

  // Tampilkan hasil di HTML
  document.getElementById('luas').innerText = luas;
  document.getElementById('keliling').innerText = keliling;
}

// function reset
function resetForm() {
  document.getElementById('kalkulatorForm').reset();
  document.getElementById('luas').innerText = '...';
  document.getElementById('keliling').innerText = '...';
}

// function hitung persegi panjang
function hitungPersegiPanjang() {
  // Ambil nilai panjang (persegi panjang) dari input
  var panjang = parseFloat(document.getElementById('panjang').value);

  // Ambil nilai lebar (persegi panjang) dari input
  var lebar = parseFloat(document.getElementById('lebar').value);

  // Validasi apakah input adalah angka positif
  if (isNaN(panjang) || isNaN(lebar) || panjang <= 0 || lebar <= 0) {
    alert('Masukkan angka positif untuk panjang dan lebar.');
    return;
  }

  // Hitung luas dan keliling persegi panjang
  var luasPersegiPanjang = panjang * lebar;
  var kelilingPersegiPanjang = 2 * (panjang + lebar);

  // Tampilkan hasil di HTML
  document.getElementById('luasPersegiPanjang').innerText = luasPersegiPanjang;
  document.getElementById('kelilingPersegiPanjang').innerText = kelilingPersegiPanjang;
}

// function reset Persegi Panjang
function reset() {
  document.getElementById('kalkulatorFormPP').reset();
  document.getElementById('luasPersegiPanjang').innerText = '...';
  document.getElementById('kelilingPersegiPanjang').innerText = '...';
}

// function button scroll ke atas
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
