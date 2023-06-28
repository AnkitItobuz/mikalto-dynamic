const massageImage = document.querySelectorAll(".massage-image");
const windowImage = document.querySelectorAll(".window-view");
const soapsImage = document.querySelectorAll(".soaps-image");
const wildImage = document.querySelectorAll(".wild-image");

async function getImages() {
  try {
    let apiData = await fetch("http://localhost:8400/experienceSection").then(
      (apiData) => apiData.json()
    );
    massageImage.forEach((element) => {
      element.src = apiData.data.massageImage;
    });

    windowImage.forEach((element) => {
      element.src = apiData.data.windowView;
    });

    soapsImage.forEach((element) => {
      element.src = apiData.data.soapsImage;
    });

    wildImage.forEach((element) => {
      element.src = apiData.data.wildImage;
    });
  } catch {
    console.log("error");
  }
}
getImages();

