/* eslint-disable linebreak-style */


var tmin = 1;
var tseg = 35;
  
var tpitch = (tmin * 60000) + (tseg * 1000);
setTimeout('show()', tpitch);
console.log('pitch em:', tpitch,'ms - totalizando',tmin,'min','e',tseg,'seg'); 
function show(){
var list = document.getElementsByClassName('ocultar');
for (var i = 0; i < list.length; i++) {
    list[i].style.visibility = 'visible';
    list[i].style.display = 'block';
    }
}


const animateSpin = () => {
  const roleta2 = document.querySelector('#roleta2');
  if (roleta2) {
    roleta2.classList.remove('spinner');
    roleta2.classList.add('wheel__spinner_animated-1');

    // Play the audio
    const rouletteAudio = document.getElementById('rouletteAudio');
    if (rouletteAudio) {
      rouletteAudio.play();
    }

    // Show the pop-up after 12 seconds
    setTimeout(() => {
      roleta2.classList.remove('wheel__spinner_animated-1');

      // Show the pop-up
      showPopup();

      const winAudio = document.getElementById('winAudio');
      if (winAudio) {
        winAudio.play();
      }

      const btn = document.getElementById
      ("button-roulette")
      if(btn){
        btn.style.display = "none"
      }

      const spin = document.getElementById
      ("roleta2")

      if(spin){
        spin.style.display = "none"
      }

      // // Your existing code
      // const formElem = document.querySelector('form');
      // const pageContent = document.querySelector('#page-content');
      // if (formElem) formElem.classList.remove('hide-me');
      // if (pageContent) pageContent.classList.add('page-content');
    }, 12000);
  }
};
const animateSteps = (number) => {
  const stepLoaded = document.querySelector(`.step-loaded.step${number}`);
  const barLoaded = document.querySelector(`.bar-loaded.step${number}`);
  if (stepLoaded) stepLoaded.classList.add('loaded');
  setTimeout(() => {
    if (barLoaded) barLoaded.classList.add('loaded');
  }, 12000);
};

const addSpinAnimation = (element) => {
  element.addEventListener('click', () => {
    animateSpin();
    animateSteps(1);

    setTimeout(() => {
      try {
        // // Get the elements by their class name
        // const section01 = document.querySelector('.section-01');
        // const section02 = document.querySelector('.section-02');

        // // Change the display property
        // if (section01 && section02) {
        //   section01.style.display = 'none';
        //   section02.style.display = 'block';
        // }

        window.location.href = "https://afiliados.startbet.io/visit/?bta=40898&brand=startbet&afp=camiladireto"
      } catch (error) {
        console.error("Error changing section displays: ", error);
      }
    }, 12000);
  });
};

// Function to show the pop-up
// Function to show the pop-up and redirect to another page
// function showPopup() {
//   // Customize the pop-up content and styles as needed
//   const popup = document.getElementById('popup');
//   const btn = document.getElementById('button-roulette');
//   const sec01 = document.getElementById('section01')
//   const sec02 = document.getElementById('section02')

//   if(btn){
//     btn.style.display = "none"
//   }

//   if (popup) {
//     popup.style.display = 'flex';

//     // Add a click event listener to the pop-up
//     popup.addEventListener('click', () => {
//       // Redirect to another page
//       // window.location.href = "https://startbet.io/casino";

//       sec01.style.display = "none";
//       popup.style.display = 'none';

//       if(sec02){
//         sec02.style.display = "block";
//       }

      
//     });
//   }
// }

// Add event listener to all elements with the class .runSpin
document.querySelectorAll('.runSpin').forEach(addSpinAnimation);


(function () {
  console.log('%cScript de rastreio by @delconti - Startbet', 'color: purple; font-size: 20px;');

  let parametros = ["utm_source"];
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);

  // Coletando parâmetros sem duplicatas
  for (const [key] of params) {
      if (!parametros.includes(key)) {
          parametros.push(key);
      }
  }

  // Coleta parâmetros UTM da URL atual e do referrer
  const urlParamsCapt = new URLSearchParams(window.location.search);
  const urlParamsCaptReferrer = new URLSearchParams(document.referrer.split('?')[1] || '');
  let utms = {};

  parametros.forEach(el => {
      if (el === "utm_source") {
          utms[el] = urlParamsCapt.get(el) ?? (document.referrer ? (urlParamsCaptReferrer.get(el) ?? new URL(document.referrer).hostname) : "direto");
      } else {
          utms[el] = urlParamsCapt.get(el) ?? (urlParamsCaptReferrer.get(el) ?? "");
      }
  });

  let scks = Object.values(utms).filter(value => value !== "");

  // Remove valores duplicados no sck da URL atual
  let currentSckValues = [];
  if (urlParamsCapt.get('sck')) {
      currentSckValues = urlParamsCapt.get('sck').split('|');
  }
  scks = scks.filter(value => !currentSckValues.includes(value));

  document.querySelectorAll('a').forEach(el => {
      const elURL = new URL(el.href);
      if (!elURL.hash) {
          const elSearchParams = new URLSearchParams(elURL.search);
          let modified = false;
          for (let key in utms) {
              if (!elSearchParams.has(key)) {
                  elSearchParams.append(key, utms[key]);
                  modified = true;
              }
          }
          if (!elSearchParams.has('sck') && scks.length > 0) {
              elSearchParams.append('sck', scks.join('|'));
              modified = true;
          }
          if (modified) {
              el.href = elURL.origin + elURL.pathname + "?" + elSearchParams.toString();
          }
      }
  });
})();

console.log('%cScript de rastreamento de vendas desenvolvido pela Comunidade NOD - Dericson Calari e Samuel Choairy', 'font-size:20px;color:yellow;');