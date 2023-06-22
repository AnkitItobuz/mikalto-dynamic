const massageImage = document.querySelectorAll(".massage-image");
const windowImage = document.querySelectorAll(".window-view");
const soapsImage = document.querySelectorAll(".soaps-image");
const wildImage = document.querySelectorAll(".wild-image");
// alert()
getImages()
async function getImages(){
    try{
        let data = await fetch('http://localhost:9400/').then((data) => data.json());
massageImage.forEach(element => {
    element.src = data.experienceSection.massageImage;
  });

  windowImage.forEach(element=>{
    element.src = data.experienceSection.windowView;
  })

  soapsImage.forEach(element=>{
    element.src = data.experienceSection.soapsImage;
  })

  wildImage.forEach(element=>{
    element.src = data.experienceSection.wildImage;
  })
}
  catch{
    console.log('error');
  }
}