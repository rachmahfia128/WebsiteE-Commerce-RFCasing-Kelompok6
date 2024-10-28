function showToast(message) {
    var toast = document.getElementById("toast");
    toast.textContent = message; // Ubah teks notifikasi
    toast.className = "toast show"; // Tambah kelas show untuk memunculkan

    // Hilangkan notifikasi setelah 3 detik
    setTimeout(function () {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}

// Panggil fungsi ini saat produk ditambahkan ke keranjang
function addToCart(productName, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Menambahkan produk ke dalam array cart
    cart.push({ name: productName, price: price, image: image });

    // Menyimpan kembali ke localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    
    // Tampilkan notifikasi bahwa produk telah ditambahkan
    showToast("Produk " + productName + " berhasil ditambahkan ke keranjang!");
}