const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Mod seçimini kullanýcýnýn tercihine göre saklayabilirsiniz, localStorage veya cookies gibi.
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('tema', 'karanlýk');
        modeToggle.textContent = 'Açýk Tema';
    } else {
        localStorage.setItem('tema', 'açýk');
        modeToggle.textContent = 'Karanlýk Tema';
    }
});

// Sayfa yüklendiðinde, kullanýcýnýn önceki tercihini yükleyin (örneðin localStorage'dan)
const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
    body.classList.add('dark-mode');
    modeToggle.textContent = 'Açýk Tema';
} else {
    body.classList.add('light-mode');
}
ocument.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Sekmede deðilken yapýlacak iþlemler
        document.title = 'Sekme Kapalý - Özel Baþlýk';
        // veya belirli bir elementin içeriðini deðiþtirebilirsiniz
        // document.getElementById('myElement').textContent = 'Sekmede Deðil';
    } else {
        // Sekmedeyken yapýlacak iþlemler
        document.title = 'Web Sayfasý - Ana Baþlýk';
        // veya belirli bir elementin içeriðini deðiþtirebilirsiniz
        // document.getElementById('myElement').textContent = 'Sekmede';
    }
});
Yukarýdaki JavaScript kodu, visibilitychange olayýný dinleyerek kullanýcýnýn sayfanýn sekmede olup olmadýðýný kontrol eder. Sayfa sekmede deðilken, sayfanýn baþlýk etiketini (document.title) deðiþtirir. Bu þekilde, tarayýcý sekmesinde kullanýcýya özel bir mesaj gösterebilirsiniz.

Eðer sayfanýn içeriðinde belirli bir elementin içeriðini deðiþtirmek istiyorsanýz, o elementin id özelliðini kullanarak bu iþlemi gerçekleþtirebilirsiniz. Örneðin, myElement id'li bir <div> elementi varsa, document.getElementById('myElement').textContent kullanarak içeriðini deðiþtirebilirsiniz.





