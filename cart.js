document.addEventListener("DOMContentLoaded", function() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemsDiv = document.getElementById("cartItems");
    let totalPriceElement = document.getElementById("totalPrice");

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Keranjang Anda kosong.</p>";
        totalPriceElement.innerText = 0;
    } else {
        cart.forEach(function(product, index) {
            // Buat elemen produk dengan checkbox
            let productDiv = document.createElement("div");
            productDiv.classList.add("cart-item");
            productDiv.innerHTML = `
                <input type="checkbox" class="select-item" data-price="${product.price}" data-index="${index}">
                <img src="${product.image}" alt="${product.name}" style="width: 50px; height: auto;"/>
                <span>${product.name} - Rp ${product.price}</span>
                <button class="remove-button" onclick="removeFromCart(${index})">Hapus</button>
            `;
            cartItemsDiv.appendChild(productDiv);
        });

        // Tambahkan event listener untuk memperbarui total ketika checkbox diklik
        document.querySelectorAll(".select-item").forEach((checkbox) => {
            checkbox.addEventListener("change", updateTotalPrice);
        });

        // Panggil updateTotalPrice untuk menghitung total saat halaman dimuat
        updateTotalPrice();
    }
});

// Fungsi untuk memperbarui total harga berdasarkan item yang dicentang
function updateTotalPrice() {
    let selectedItems = document.querySelectorAll(".select-item:checked");
    let totalPrice = 0;

    selectedItems.forEach((item) => {
        totalPrice += parseInt(item.getAttribute("data-price"));
    });

    document.getElementById("totalPrice").innerText = totalPrice;
}

// Fungsi untuk menghapus produk dari keranjang
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
}

// Mengambil elemen notifikasi yang sudah ada
const toast = document.querySelector('.toast');
const checkoutBanner = document.querySelector('.checkout-banner');

// Fungsi untuk menampilkan toast
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000); // Notifikasi hilang setelah 3 detik
}

// Fungsi untuk menampilkan banner notifikasi
function showBanner(message) {
    checkoutBanner.textContent = message;
    checkoutBanner.classList.add('show');
    setTimeout(() => {
        checkoutBanner.classList.remove('show');
    }, 3000); // Banner hilang setelah 3 detik
}

// Fungsi checkout
function checkout() {
    const cartItems = document.querySelectorAll('.cart-item');
    const selectedItems = Array.from(cartItems).filter(item => 
        item.querySelector('input[type="checkbox"]').checked);

    if (cartItems.length === 0) {
        // Jika keranjang kosong
        showBanner('Keranjang Anda kosong. Silakan tambahkan produk terlebih dahulu.');
    } else if (selectedItems.length === 0) {
        // Jika tidak ada yang dipilih
        showBanner('Silakan pilih produk untuk melanjutkan checkout.');
    } else {
        // Jika ada produk yang dipilih untuk checkout
        selectedItems.forEach(item => item.remove()); // Hapus produk yang dipilih
        showBanner('Checkout berhasil!'); // Tampilkan notifikasi berhasil

        localStorage.removeItem("cart");

        // Setel ulang total harga ke 0 setelah checkout berhasil
        document.getElementById("totalPrice").innerText = 0;
    }
}


// Event listener untuk tombol checkout
document.querySelector('.checkout-button').addEventListener('click', checkout);