/*more details button*/
const container = document.querySelector(".info-box");
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  container.classList.toggle("active");
});

/*vibration*/
function vibrate() {
  navigator.vibrate(6);
}

// Zoom in up effect add in every social media button one by one
const socialMediaLinks = document.querySelectorAll(".social-media div");

// ON SCROLL REVEAL SMALL CARDS
ScrollReveal().reveal(socialMediaLinks, {
  duration: 1000,
  opacity: 0,
  distance: "30%",
  origin: "bottom",
  scale: 0.9
});
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Mod seçimini kullanıcının tercihine göre saklayabilirsiniz, localStorage veya cookies gibi.
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
        modeToggle.textContent = 'Açık Tema';
    } else {
        localStorage.setItem('mode', 'light');
        modeToggle.textContent = 'Karanlık Tema';
    }
});

// Sayfa yüklendiğinde, kullanıcının önceki tercihini yükleyin (örneğin localStorage'dan)
const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
    body.classList.add('dark-mode');
    modeToggle.textContent = 'Light Mode';
} else {
    body.classList.add('light-mode');
}
// Sayfanın başlığını değiştiren fonksiyon
function changeTitle() {
    document.title = 'Geri Gel Kardeşim !';
}

// Sayfanın görünürlüğü değiştiğinde (farklı sekmedeyken) başlığı değiştir
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Kullanıcı farklı sekmede
        changeTitle();
    } else {
        // Kullanıcı geri geldi, başlığı eski haline getir
        document.title = 'Enes';
    }
});
