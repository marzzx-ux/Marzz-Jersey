const produk = [
    {
        nama: "Jersey Barcelona Home",
        harga: "Rp 1.600.000",
        gambar: "jut.jpg"
    },
    {
        nama: "Jersey Real Madrid Home",
        harga: "Rp 260.000",
        gambar: "rm.jpg"
    },
    {
        nama: "Jersey Manchester City",
        harga: "Rp 240.000",
        gambar: "c.jpg"
    },
    {
        nama: "Jersey AC Milan",
        harga: "Rp 230.000",
        gambar: "mil.jpg"
    },
    {
        nama: "Jersey Bayern Munchen",
        harga: "Rp 255.000",
        gambar: "by.jpg"
    },
    {
        nama: "Jersey PSG Home",
        harga: "Rp 265.000",
        gambar: "p.jpg"
    },
    {
        nama: "Jersey Juventus Home",
        harga: "Rp 245.000",
        gambar: "j.jpg"
    },
    {
        nama: "Jersey Liverpool Home",
        harga: "Rp 250.000",
        gambar: "l.jpg"
    }
];

const produkList = document.getElementById("produkList");

produk.forEach(item => {
    produkList.innerHTML += `
        <div class="produk-card" onclick="bukaModal('${item.nama}', '${item.harga}', '${item.gambar}')">
            <img src="${item.gambar}" alt="${item.nama}">
            <h3>${item.nama}</h3>
            <p>${item.harga}</p>
        </div>
    `;
});

function bukaModal(nama, harga, gambar) {
    document.getElementById("modalNama").innerText = nama;
    document.getElementById("modalHarga").innerText = harga;
    document.getElementById("modalGambar").src = gambar;
    document.getElementById("modalDetail").style.display = "block";
}

function tutupModal() {
    document.getElementById("modalDetail").style.display = "none";
}