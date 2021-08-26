const buildUrl = "Build";
const loaderUrl = buildUrl + "/Hackathon.loader.js";
const config = {
  dataUrl: buildUrl + "/Hackathon.data",
  frameworkUrl: buildUrl + "/Hackathon.framework.js",
  codeUrl: buildUrl + "/Hackathon.wasm",
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
} else {
  let x = canvas.width / 16;
  canvas.width = x;
  canvas.height = x * 9;
}

const script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
  createUnityInstance(canvas, config, (progress) => {})
    .then((unityInstance) => {})
    .catch((message) => {
      alert(message);
    });
};
document.body.appendChild(script);

const playButton = document.querySelector(".buttonWrapper");
const startScreen = document.querySelector(".startScreen");
playButton.addEventListener("click", () => {
  startScreen.classList.add("fadeOut");
  setTimeout(function () {
    startScreen.style.display = "none";
  }, 900);
});

const elements = document.querySelectorAll(".hidden");

console.log(elements);

elements.forEach((element) => {
  setTimeout(function () {
    element.classList.remove("hidden");
  }, 1550);
});
