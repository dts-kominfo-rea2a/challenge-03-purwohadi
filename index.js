// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
// const listBelanjaan = null;
const listBelanjaan = (dataItem)=>{
  const arrHasil = [];

  for (let number = 0; number < dataItem.length; number++) {
    arrHasil.push("- "+dataItem[number].nama+" x "+dataItem[number].kuantitas);
  }

  return arrHasil;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
// const totalBelanjaan = null;
const totalBelanjaan = (dataItem)=>{
  let arrTotal = 0;
  for (let number = 0; number < dataItem.length; number++) {
    arrTotal += dataItem[number].harga * dataItem[number].kuantitas;
  }

  return arrTotal;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
