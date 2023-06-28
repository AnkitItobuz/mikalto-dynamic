const leftScroll = document.querySelectorAll(".left-scroll");
const rightScroll = document.querySelectorAll(".right-scroll");
const slides = document.querySelectorAll(".slides");
const checkIn = document.querySelector(".check-in-date");
const submit = document.querySelector(".submit-btn");

let checkInDate;
let checkOutDate;

window.onload = function () {
  const todayDate = new Date().toISOString().split("T")[0];
  checkInDate = todayDate;
  document.getElementsByName("check-in-date")[0].setAttribute("min", checkInDate);

  checkOutDate = document.getElementsByClassName("check-out-date");
  checkOutDate.value = todayDate.toISOString().slice(0, 10);
  console.log(checkOutDate.value);
  checkOutDate.setAttribute("min", todayDate.toISOString().slice(0, 10));

};

async function heroSection() {
  try {
    let apiData = await fetch("http://localhost:8400/heroSection").then((apiData) =>
      apiData.json()
    );
    document.querySelector(".hero-section").style.backgroundImage = `url(${apiData.data.image})`;
  } catch (error) {
    console.log("error in hero section");
  }
}
heroSection();

async function welcomeSection() {
  try {
    let apiData = await fetch("http://localhost:8400/welcomeSection").then(
      (apiData) => apiData.json()
    );
    document.querySelector(".house-image").src = apiData.data.houseImage;
    document.querySelector(".pool-image").src = apiData.data.poolImage;
    document.querySelector(".house2-image").src =
      apiData.data.house2Image;
  } catch (error) {
    console.log("error in welcome section");
  }
}
welcomeSection();

async function roomsSection() {
  try {
    let apiData = await fetch("http://localhost:8400/roomsSection").then((apiData) =>
      apiData.json()
    );
    document.querySelector(".standard-room").src =
      apiData.data.standardRoom.img;
    document.querySelector(".standard-room-price").innerHTML =
      apiData.data.standardRoom.price;
    document.querySelector(".standard-bed").innerHTML =
      apiData.data.standardRoom.bed;
    document.querySelector(".standard-capacity").innerHTML =
      apiData.data.standardRoom.capacity;
    document.querySelector(".standard-size").innerHTML =
      apiData.data.standardRoom.roomSize;
    document.querySelector(".standard-view").innerHTML =
      apiData.data.standardRoom.view;

    document.querySelector(".luxary-room").src =
      apiData.data.luxaryRoom.img;
    document.querySelector(".luxary-room-price").innerHTML =
      apiData.data.luxaryRoom.price;
    document.querySelector(".luxary-bed").innerHTML =
      apiData.data.luxaryRoom.bed;
    document.querySelector(".luxary-capacity").innerHTML =
      apiData.data.luxaryRoom.capacity;
    document.querySelector(".luxary-size").innerHTML =
      apiData.data.luxaryRoom.roomSize;
    document.querySelector(".luxary-view").innerHTML =
      apiData.data.luxaryRoom.view;

    document.querySelector(".ordinary-room").src =
      apiData.data.ordinaryRoom.img;
    document.querySelector(".ordinary-room-price").innerHTML =
      apiData.data.ordinaryRoom.price;
    document.querySelector(".ordinary-bed").innerHTML =
      apiData.data.ordinaryRoom.bed;
    document.querySelector(".ordinary-capacity").innerHTML =
      apiData.data.ordinaryRoom.capacity;
    document.querySelector(".ordinary-size").innerHTML =
      apiData.data.ordinaryRoom.roomSize;

    document.querySelector(".ordinary-view").innerHTML =
      apiData.data.ordinaryRoom.view;
  } catch (error) {
    console.log("error in rooms section");
  }
}
roomsSection();

async function activitiesSection() {
  try {
    let apiData = await fetch("http://localhost:8400/activitiesSection").then(
      (apiData) => apiData.json()
    );
    document.querySelector(".swimming-pool-image").src =
      apiData.data.swimmingPool;
    document.querySelector(".home-image").src = apiData.data.house;
  } catch (error) {
    console.log("error in rooms section");
  }
}
activitiesSection();

async function experienceSection() {
  try {
    let apiData = await fetch("http://localhost:8400/experienceSection").then(
      (apiData) => apiData.json()
    );
    document.querySelector(".massage-image").src =
      apiData.data.massageImage;
    document.querySelector(".window-view").src =
      apiData.data.windowView;
    document.querySelector(".soaps-image").src =
      apiData.data.soapsImage;
    document.querySelector(".wild-image").src =
      apiData.data.wildImage;
  } catch (error) {
    console.log("error in experience section");
  }
}
experienceSection();

async function helloSection() {
  try {
    let apiData = await fetch("http://localhost:8400/helloSection").then((apiData) =>
      apiData.json()
    );
    document.querySelector(
      ".hello-section"
    ).style.backgroundImage = `url(${apiData.data.backgroundImage})`;
  } catch (error) {
    console.log("error in hello section");
  }
}
helloSection();

async function ratingSection() {
  try {
    let apiData = await fetch("http://localhost:8400/ratingSection").then((apiData) =>
      apiData.json()
    );
    document.querySelector(".first-customer-image").src =
      apiData.data.firstCustomer.customerImage;
    document.querySelector(".first-customer-name").innerHTML =
      apiData.data.firstCustomer.customerName;
    document.querySelector(".first-rating-date").innerHTML =
      apiData.data.firstCustomer.dateOfReview;
    document.querySelector(".first-customer-head").innerHTML =
      apiData.data.firstCustomer.reviewHead;
    document.querySelector(".first-customer-review").innerHTML =
      apiData.data.firstCustomer.reviewDetails;

    document.querySelector(".second-customer-image").src =
      apiData.data.secondCustomer.customerImage;
    document.querySelector(".second-customer-name").innerHTML =
      apiData.data.secondCustomer.customerName;
    document.querySelector(".second-rating-date").innerHTML =
      apiData.data.secondCustomer.dateOfReview;
    document.querySelector(".second-customer-head").innerHTML =
      apiData.data.secondCustomer.reviewHead;
    document.querySelector(".second-customer-review").innerHTML =
      apiData.data.secondCustomer.reviewDetails;

    document.querySelector(".third-customer-image").src =
      apiData.data.thirdCustomer.customerImage;
    document.querySelector(".third-customer-name").innerHTML =
      apiData.data.thirdCustomer.customerName;
    document.querySelector(".third-rating-date").innerHTML =
      apiData.data.thirdCustomer.dateOfReview;
    document.querySelector(".third-customer-head").innerHTML =
      apiData.data.thirdCustomer.reviewHead;
    document.querySelector(".third-customer-review").innerHTML =
      apiData.data.thirdCustomer.reviewDetails;
  } catch (error) {
    console.log("error in rating section");
  }
}

ratingSection();

async function joinUsSection() {
  try {
    let apiData = await fetch("http://localhost:8400/joinUsSection").then((apiData) =>
      apiData.json()
    );
    document.querySelector(".bridge").src = apiData.data.bridgeImage;
    document.querySelector(".cat-image").src = apiData.data.catImage;
    document.querySelector(".dog-image").src = apiData.data.forestImage;
  } catch (error) {
    console.log("error in join us section");
  }
}

joinUsSection();

let start = 0;
let end = slides.length - 1;
let mid = Math.round((start + end - start) / 2);
slides[mid].classList.remove("slides");

leftScroll.forEach((element) => {
  element.addEventListener("click", () => {
    if (mid > start) {
      slides[mid].classList.add("slides");
      mid = mid - 1;
      slides[mid].classList.remove("slides");
    } else if (mid === start) {
      slides[mid].classList.add("slides");
      mid = end;
      slides[mid].classList.remove("slides");
    } else {
      return;
    }
  });
});

rightScroll.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(mid);
    if (mid < end) {
      slides[mid].classList.add("slides");
      mid = mid + 1;
      slides[mid].classList.remove("slides");
      console.log(mid);
    } else if (mid === end) {
      slides[mid].classList.add("slides");
      mid = start;
      slides[mid].classList.remove("slides");
    } else {
      return;
    }
  });
});

const form = document.querySelector(".form");
 form.addEventListener("submit", (e) => {
  e.preventDefault();
 
   let  data = fetch("http://localhost:8400/post-data", {
    method: "POST",
    headers: {
      "Content-type": "data/json; charset=UTF-8",
    },
    body: `id=${Date.now()}&checkInDate=${document.querySelector(".check-in-date ").value
      }&checkOutDate=${document.querySelector(".check-out-date ").value
      }&noOfAdults=${document.querySelector(".adults-no").value}&noOfchildren=${document.querySelector(".children-no").value
      }`,
  })
     document.querySelector(".check-in-date ").value = "";
    document.querySelector(".check-out-date ").value = "";
    document.querySelector(".adults-no").value = "";
    document.querySelector(".children-no").value = "";
    (alert("form submitted successfully"));


})
