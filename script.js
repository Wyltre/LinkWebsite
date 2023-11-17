const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Mod se�imini kullan�c�n�n tercihine g�re saklayabilirsiniz, localStorage veya cookies gibi.
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('tema', 'karanl�k');
        modeToggle.textContent = 'A��k Tema';
    } else {
        localStorage.setItem('tema', 'a��k');
        modeToggle.textContent = 'Karanl�k Tema';
    }
});

// Sayfa y�klendi�inde, kullan�c�n�n �nceki tercihini y�kleyin (�rne�in localStorage'dan)
const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
    body.classList.add('dark-mode');
    modeToggle.textContent = 'A��k Tema';
} else {
    body.classList.add('light-mode');
}
ocument.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Sekmede de�ilken yap�lacak i�lemler
        document.title = 'Sekme Kapal� - �zel Ba�l�k';
        // veya belirli bir elementin i�eri�ini de�i�tirebilirsiniz
        // document.getElementById('myElement').textContent = 'Sekmede De�il';
    } else {
        // Sekmedeyken yap�lacak i�lemler
        document.title = 'Web Sayfas� - Ana Ba�l�k';
        // veya belirli bir elementin i�eri�ini de�i�tirebilirsiniz
        // document.getElementById('myElement').textContent = 'Sekmede';
    }
});
Yukar�daki JavaScript kodu, visibilitychange olay�n� dinleyerek kullan�c�n�n sayfan�n sekmede olup olmad���n� kontrol eder. Sayfa sekmede de�ilken, sayfan�n ba�l�k etiketini (document.title) de�i�tirir. Bu �ekilde, taray�c� sekmesinde kullan�c�ya �zel bir mesaj g�sterebilirsiniz.

E�er sayfan�n i�eri�inde belirli bir elementin i�eri�ini de�i�tirmek istiyorsan�z, o elementin id �zelli�ini kullanarak bu i�lemi ger�ekle�tirebilirsiniz. �rne�in, myElement id'li bir <div> elementi varsa, document.getElementById('myElement').textContent kullanarak i�eri�ini de�i�tirebilirsiniz.





