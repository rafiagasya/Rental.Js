const rentalCars = () => {
    console.log("\n== Rental Cars ==");

    const carsList = [
        {merk: "Toyota Avanza", harga: 3000000, fasilitas: [" Tanpa Supir","Asuransi"]},
        {merk: "Audi", harga: 5000000, fasilitas: ["Pake Supir", "Gaji Gede"]},
        {merk: "BMW", harga: 10000000, fasilitas: ["Full Asuransi", "Garansi Resmi"]},
    ];

    carsList.forEach((cars, index) => {
        console.log(`Cars ${index + 1}: ${cars.merk}, Harga: Rp ${cars.harga.toLocaleString()}, Fasilitas: ${cars.fasilitas.join(", ")}`);
      });
    };
    rentalCars();