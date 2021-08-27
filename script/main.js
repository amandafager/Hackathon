const buildUrl = "Build";
const loaderUrl = buildUrl + "/Hackathon (Compressed).loader.js";
const config = {
  dataUrl: buildUrl + "/Hackathon (Compressed).data",
  frameworkUrl: buildUrl + "/Hackathon (Compressed).framework.js",
  codeUrl: buildUrl + "/Hackathon (Compressed).wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "DefaultCompany",
  productName: "Hackathon",
  productVersion: "1.0",
};

const canvas = document.querySelector("canvas");
const mobileWarning = document.querySelector("#unity-mobile-warning");

if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
  config.devicePixelRatio = 1;
  mobileWarning.style.display = "block";
  setTimeout(() => {
    mobileWarning.style.display = "none";
  }, 5000);
}

const bubbleFour = document.querySelector(".buttonWrapper");
const bubbleOne = document.querySelector(".bubbleOne");
const bubbleTwo = document.querySelector(".bubbleTwo");
const bubbleThree = document.querySelector(".bubbleThree");
const button = document.querySelector("button");
const heading = document.querySelector("h1");
const aboutLink = document.querySelector(".aboutLink");

function startAnimation() {
  heading.classList.add("fadeInH1");
  bubbleOne.classList.add("bubbleOneFade");
  bubbleTwo.classList.add("bubbleTwoFade");
  bubbleThree.classList.add("bubbleThreeFade");
  bubbleFour.classList.add("buttonWrapperFade");
  aboutLink.classList.add("fadeInAboutLink");
}

function enableStartButton() {
  const startScreen = document.querySelector(".startScreen");

  bubbleFour.style.cursor = "pointer";
  button.style.cursor = "pointer";

  bubbleFour.addEventListener("click", () => {
    startScreen.classList.add("fadeOut");
    setTimeout(function () {
      startScreen.style.display = "none";
    }, 900);
  });
}

function removeHidden() {
  const elements = document.querySelectorAll(".hidden");
  elements.forEach((element) => {
    setTimeout(function () {
      element.classList.remove("hidden");
      enableStartButton();
    }, 1550);
  });
}

const loadingBar = document.querySelector("#unity-loading-bar");
const progressBarFull = document.querySelector("#unity-progress-bar-full");
loadingBar.style.display = "block";

const script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
  createUnityInstance(canvas, config, (progress) => {
    progressBarFull.style.width = 100 * progress + "%";
  })
    .then((unityInstance) => {
      loadingBar.style.display = "none";
      startAnimation();
      removeHidden();
    })
    .catch((message) => {
      alert(message);
    });
};
document.body.appendChild(script);
