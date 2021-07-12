import React from "react";
const makanans = [
  {
    nama: "soto",
    harga: 12000,
  },
  {
    nama: "sop",
    harga: 10000,
  },
  {
    nama: "nasi goreng",
    harga: 7000,
  },
  {
    nama: "ciken",
    harga: 5000,
  },
];
// Reduce

const total_bayar = makanans.reduce(
  (total_harga, makanan) => total_harga + makanan.harga,
  0
);

const Map = () => {
  return (
    <div>
      <h2>Map</h2>
      <ul>
        {makanans.map((makanan, index) => (
          <li>
            {index + 1}. {makanan.nama} - {makanan.harga}
          </li>
        ))}
      </ul>
      <h2>Harga : {total_bayar}</h2>
      <h2>Map Filter harga lebih dari 6000</h2>
      <ul>
        {makanans
          .filter((makanan) => makanan.harga > 6000)
          .map((makanan, index) => (
            <li>
              {index + 1}. {makanan.nama} - {makanan.harga}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Map;
