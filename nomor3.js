const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  try {
    if (nilaiAwal > nilaiAkhir)
      throw "Nilai akhir harus lebih besar dari nilai awal";
    if (dataArray.length < 5)
      throw "Jumlah angka dalam dataArray harus lebih dari 5";

    let result = dataArray.filter(function (n) {
      return n > nilaiAwal && n < nilaiAkhir;
    });
    let data = result.sort((a, b) => a - b);
    if (!data.length) throw "Data tidak ditemukan";
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(20, 15, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(5, 20, [2, 25, 4, 3]);
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);
