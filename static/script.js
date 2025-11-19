const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function goToRandomMap() {
  const maps = [
    'https://tomo-shintk.github.io/yurutabi-site/herusinki.html',
    'https://tomo-shintk.github.io/yurutabi-site/ke-putaun.html',
    'https://tomo-shintk.github.io/yurutabi-site/matyupityu.html',
    'https://tomo-shintk.github.io/yurutabi-site/monsan.html',
    'https://tomo-shintk.github.io/yurutabi-site/amusuterudamu.html',
    'https://tomo-shintk.github.io/yurutabi-site/berugi.html',
    'https://tomo-shintk.github.io/yurutabi-site/doitu.html',
    'https://tomo-shintk.github.io/yurutabi-site/igirisu.html',
    'https://tomo-shintk.github.io/yurutabi-site/ke-putaun.html',
    'https://tomo-shintk.github.io/yurutabi-site/kyoto.html',
    'https://tomo-shintk.github.io/yurutabi-site/meruborun.html',
    'https://tomo-shintk.github.io/yurutabi-site/naiagara.html',
    'https://tomo-shintk.github.io/yurutabi-site/piramido.html',
    'https://tomo-shintk.github.io/yurutabi-site/riodejaneiro.html',
    'https://tomo-shintk.github.io/yurutabi-site/santori.html',
    'https://tomo-shintk.github.io/yurutabi-site/rutserun.html',
    'https://tomo-shintk.github.io/yurutabi-site/sidoni.html',
    'https://tomo-shintk.github.io/yurutabi-site/supein.html',
    'https://tomo-shintk.github.io/yurutabi-site/sutokuhorumu.html',
    'https://tomo-shintk.github.io/yurutabi-site/tai.html',
    'https://tomo-shintk.github.io/yurutabi-site/venetsia.html',
  ];
  const randomUrl = maps[Math.floor(Math.random() * maps.length)];
  window.open(randomUrl, '_blank');
}
