// Carrusel de imágenes para el banner principal
(function() {
    const images = [
        'assets/img/logos/banner.jpg',
        'assets/img/logos/banner1.jpg',
    ];
    let idx = 0;
    const el = document.getElementById('hero-carousel');
    function showImage(i) {
        el.style.backgroundImage = `url('${images[i]}')`;
    }
    showImage(idx);
    setInterval(() => {
        idx = (idx + 1) % images.length;
        showImage(idx);
    }, 2000);
})();

// Carrusel de sponsors en el footer
(function() {
    const sponsorImages = [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB4QaLV3ASh53P8FqfrQDoYjs6IjFE_TGDz9YgXnNZuNZhARwMMCubxOew3QKU9ZVmzNcm_QU2fFheRgWXJMA0m8At6ABzlOKTtWdPEA_GFzUaBcmQox664YoWkyRg6cFTMLpk1GJmC7YeZw7ACvEi2w8KtRXtP3Z22NCiIefV2o7huILriRkh6z9xrWIgHbHPIMfkOrBQh20LIlcNcDeR1I_Mv_H6TUMI_saHlmTsa5LoD0O9QULysQqlYLAb0wweqbiVRN8Wz8uCO",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD2qyHgxXfqFY1CamYlROMG8PSMVxu5z4xFc_zE8af_aQ7PwntfcSy5nT0UCPiil-m8V67eJEtTFJHw2R63gfn-HvNz5lhv_I0tqup9_WlPVrQx-5oXalOlMV80g9hQzEvdAK1jQt86NUo6hZtgYPuCjRU299kzqjnq3nHxzG1dsemNmdEMx6Ynz8fQtP84eZpEWJqd_ylCqBzG3vIi6EQjDGemRf71rzjsq1VjWthfsP5AkiMI9tDfWGvj4FDjGNLDUb-XD5mxvymM"
    ];
    let idx = 0;
    const el = document.getElementById('sponsor-img');
    function showSponsor(i) {
        el.src = sponsorImages[i];
    }
    showSponsor(idx);
    setInterval(() => {
        idx = (idx + 1) % sponsorImages.length;
        showSponsor(idx);
    }, 2000);
})();
