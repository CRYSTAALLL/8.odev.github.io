let sorular_resim = ['yapi.jpg', 'sonaksamyemegi.jpg', 'istiklal.jpg', 'leblebi.jpg', 'srilanka.jpg', 'oyunbitti.jpg'];
let sorular_yazi_dizi = [
    'SORU #1 <br> <br> Yukarıdaki yapının adı nedir? ',
    'SORU #2 <br> <br> Bu tablo kime aittir?',
    'SORU #3 <br> <br> İstiklal Marşı hangi yıl yazılmıştır?',
    'SORU #4 <br> <br>Fotoğraftaki leblebisi ile ünlü şehrimiz neresidir?',
    "SORU #5 <br> <br>Sri Lanka hangi kıtadadır?",
];
let buton1_cevap = ['Rodos Heykeli', 'Raffaello Sanzio', '1923', 'BALIKESİR', 'AVRUPA'];
let buton2_cevap = ['İskenderiye feneri', 'Michelangelo', '1920', 'SİNOP', 'ASYA'];
let buton3_cevap = ['Artemis Tapınağı', 'Vincent van Gogh', '1919', 'ÇORUM', 'AMERİKA'];
let buton4_cevap = ['Halikarnas Mozolesi', 'Leonardo da Vinci', '1921', 'ZONGULDAK', 'AFRİKA'];
let buton5_cevap = [' ', ' ', ' ', ' MANİSA', 'Avustralya'];
let dogru_cevaplar = ['iskenderiye feneri', 'Leonardo da Vinci', '1921', 'ÇORUM', 'ASYA'];




let buton = document.getElementById('basla_btn');
let baslangıc_resmi = document.getElementById('resim');
let metin_panel = document.getElementById('metin_panel');
let soru_panel = document.getElementById('soru_panel');
let sorular_text = document.getElementById('sorular');
let cevap_ne_text = document.getElementById('cevap_ne_text');
let cevap_btn1 = document.getElementById('cevap_btn1');
let cevap_btn2 = document.getElementById('cevap_btn2');
let cevap_btn3 = document.getElementById('cevap_btn3');
let cevap_btn4 = document.getElementById('cevap_btn4');
let cevap_btn5 = document.getElementById('cevap_btn5');
let kronometre = document.getElementById('kronometre');
let kacinci_soru = document.getElementById('soru_sayisi');
let dogru_soru = document.getElementById('dogru_soru');
let tekrar_btn = document.getElementById('tekrar_btn');


var soruSayisi = 0;
let buton_degeri = '';
let buton_sirasi;
let second;
let zaman;
dogru_sayisi = 0;
cevap_btn1.addEventListener('click', function() {
    buton_degeri = cevap_btn1.getAttribute('value');
    buton_sirasi = 1;
    butonListener();
    cevap_kontrol(buton_degeri, buton_sirasi);

});
cevap_btn2.addEventListener('click', function() {
    buton_degeri = cevap_btn2.getAttribute('value');
    buton_sirasi = 2;
    butonListener();
    cevap_kontrol(buton_degeri, buton_sirasi);
});
cevap_btn3.addEventListener('click', function() {
    buton_degeri = cevap_btn3.getAttribute('value');
    buton_sirasi = 3;
    butonListener();
    cevap_kontrol(buton_degeri, buton_sirasi);
});
cevap_btn4.addEventListener('click', function() {
    buton_degeri = cevap_btn4.getAttribute('value');
    buton_sirasi = 4;
    butonListener();
    cevap_kontrol(buton_degeri, buton_sirasi);
});
cevap_btn5.addEventListener('click', function() {
    buton_degeri = cevap_btn5.getAttribute('value');
    buton_sirasi = 5;
    butonListener();
    cevap_kontrol(buton_degeri, buton_sirasi);
});


buton.addEventListener('click', function() {

    init();

});


function init() {

    baslangıc_resmi.remove();
    buton.style.display = 'none';
    sorular_text.remove();
    cevap_ne_text.style.display = 'inline';
    cevap_ne_text.innerHTML = 'Cevap nedir?';
    cevap_btn1.style.display = 'inline';
    cevap_btn2.style.display = 'inline';
    cevap_btn3.style.display = 'inline';
    cevap_btn4.style.display = 'inline';
    if (soruSayisi > 2) {
        cevap_btn5.style.display = 'inline';
    }

    metin_panel.lastChild.remove();
    kacinci_soru.innerHTML = soruSayisi + 1;
    sorular_yazi();
    sorular_gorsel();
    cevap_yerlestir();
    clearInterval(zaman);
    second = 15;
    sayac();
}

function sorular_gorsel() {

    let ımg = document.createElement('img');
    ımg.setAttribute('src', sorular_resim[soruSayisi]);
    ımg.setAttribute('id', 'resim')
    soru_panel.appendChild(ımg);
}

function sorular_yazi() {
    metin_panel.setAttribute('id', 'metin_panel2');
    let yazi = document.createElement('p');
    yazi.setAttribute('id', 'sorular')
    yazi.innerHTML = sorular_yazi_dizi[soruSayisi];
    metin_panel.appendChild(yazi);
}

function cevap_yerlestir() {
    cevap_btn1.setAttribute('value', buton1_cevap[soruSayisi]);
    cevap_btn2.setAttribute('value', buton2_cevap[soruSayisi]);
    cevap_btn3.setAttribute('value', buton3_cevap[soruSayisi]);
    cevap_btn4.setAttribute('value', buton4_cevap[soruSayisi]);
    cevap_btn5.setAttribute('value', buton5_cevap[soruSayisi]);
}


function cevap_kontrol(buton_degeri, buton_sirasi) {




    if (dogru_cevaplar[soruSayisi] == buton_degeri) {
        dogru_sayisi++;
        cevap_ne_text.innerHTML = 'Doğru';
        dogru_soru.innerHTML = dogru_sayisi + "  /";
        switch (buton_sirasi) {
            case 1:
                cevap_btn1.style.background = 'green';
                setTimeout(function() {
                    cevap_btn1.style.background = 'white';
                }, 1000);
                break;
            case 2:
                cevap_btn2.style.background = 'green';
                setTimeout(function() {
                    cevap_btn2.style.background = 'white';
                }, 1000);
                break;
            case 3:
                cevap_btn3.style.background = 'green';
                setTimeout(function() {
                    cevap_btn3.style.background = 'white';
                }, 1000);
                break;
            case 4:
                cevap_btn4.style.background = 'green';
                setTimeout(function() {
                    cevap_btn4.style.background = 'white';
                }, 1000);
                break;
            case 5:
                cevap_btn5.style.background = 'green';
                setTimeout(function() {
                    cevap_btn5.style.background = 'white';
                }, 1000);
                break;
            default:

        }


    } else {
        cevap_ne_text.innerHTML = 'Yanlış!!!';
        switch (buton_sirasi) {
            case 1:
                cevap_btn1.style.background = 'red';
                setTimeout(function() {
                    cevap_btn1.style.background = 'white';
                }, 1000);
                break;
            case 2:
                cevap_btn2.style.background = 'red';
                setTimeout(function() {
                    cevap_btn2.style.background = 'white';
                }, 1000);
                break;
            case 3:
                cevap_btn3.style.background = 'red';
                setTimeout(function() {
                    cevap_btn3.style.background = 'white';
                }, 1000);
                break;
            case 4:
                cevap_btn4.style.background = 'red';
                setTimeout(function() {
                    cevap_btn4.style.background = 'white';
                }, 1000);
                break;
            case 5:
                cevap_btn5.style.background = 'red';
                setTimeout(function() {
                    cevap_btn5.style.background = 'white';
                }, 1000);
                break;
            default:
        }
        dogru_cevap();
    }

}


function dogru_cevap() {

    if (soruSayisi == 0) {
        cevap_btn2.style.background = 'green';
        setTimeout(function() {
            cevap_btn2.style.background = 'white';
        }, 1000);
    } else if (soruSayisi == 1) {
        cevap_btn4.style.background = 'green';
        setTimeout(function() {
            cevap_btn4.style.background = 'white';
        }, 1000);
    } else if (soruSayisi == 2) {
        cevap_btn4.style.background = 'green';
        setTimeout(function() {
            cevap_btn4.style.background = 'white';
        }, 1000);
    } else if (soruSayisi == 3) {
        cevap_btn3.style.background = 'green';
        setTimeout(function() {
            cevap_btn3.style.background = 'white';
        }, 1000);
    } else if (soruSayisi == 4) {
        cevap_btn2.style.background = 'green';
        setTimeout(function() {
            cevap_btn2.style.background = 'white';
        }, 1000);
    }

}


function butonListener() {




    if (soruSayisi < 4) {

        setTimeout(function() {
            soruSayisi++;
            init();
        }, 1000);
    } else {
        setTimeout(() => {
            oyun_bitti();
        }, 1000);

    }

}

function oyun_bitti() {
    let ımg = document.createElement('img');
    ımg.setAttribute('src', sorular_resim[5]);
    ımg.setAttribute('id', 'resim')
    soru_panel.appendChild(ımg);
    second = 0;
    cevap_ne_text.innerHTML = 'OYUN BİTTİ'
    cevap_btn1.style.display = 'none';
    cevap_btn2.style.display = 'none';
    cevap_btn3.style.display = 'none';
    cevap_btn4.style.display = 'none';
    cevap_btn5.style.display = 'none';

    metin_panel.lastChild.remove();
    let yazi = document.createElement('p');
    yazi.setAttribute('id', 'sorular')
    yazi.innerHTML = "Toplam puan :" + dogru_sayisi + "  / 5";
    metin_panel.appendChild(yazi);
    tekrar_btn.style.display = 'inline';
    tekrar_btn.addEventListener('click', function() {
        soruSayisi = 0;
        dogru_soru.innerHTML = '0  /';
        tekrar_btn.style.display = 'none';
        init();



    });





}




function sayac() {
    zaman = setInterval(() => {
        kronometre.innerHTML = second;
        second = second - 1;
        zaman_kontrol();
    }, 1000);
}

function zaman_kontrol() {
    if (second < 0) {
        clearInterval(zaman);
        dogru_cevap();
        butonListener();
    }



}