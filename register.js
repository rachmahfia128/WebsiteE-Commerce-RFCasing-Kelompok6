// register.js
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simpan data pengguna di localStorage
    const user = { username, password };
    localStorage.setItem("user", JSON.stringify(user));

    // Tampilkan pesan sukses dan arahkan ke halaman login
    document.getElementById("registerMessage").innerText = "Pendaftaran berhasil! Silakan login.";
    
    // Arahkan pengguna ke halaman login setelah pendaftaran
    setTimeout(() => {
        window.location.href = "login.html"; // Ganti dengan halaman login Anda
    }, 2000); // Tunggu 2 detik sebelum mengarahkan
});