document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Logika autentikasi (misalnya, menggunakan localStorage)
    const storedUser = JSON.parse(localStorage.getItem("user"));

    const loginMessage = document.getElementById("loginMessage");

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        // Jika login berhasil
        loginMessage.innerText = "Login berhasil!";
        loginMessage.className = "message success"; // Tambahkan kelas success
        loginMessage.style.display = "block"; // Tampilkan notifikasi

        setTimeout(function() {
            window.location.href = "homepage.html"; // Arahkan ke homepage setelah 2 detik
        }, 2000);
    } else {
        // Jika login gagal
        loginMessage.innerText = "Username atau password salah.";
        loginMessage.className = "message error"; // Tambahkan kelas error
        loginMessage.style.display = "block"; // Tampilkan notifikasi
    }
});