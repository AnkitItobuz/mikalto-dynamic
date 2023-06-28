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

  const checkOutDate = document.getElementsByClassName("check-out-date");
  checkOutDate.value = todayDate.toISOString().slice(0, 10);
  console.log(checkOutDate.value);
  checkOutDate.setAttribute("min", todayDate.toISOString().slice(0, 10));

};

async function heroSection() {
  try {
    let data = await fetch("http://localhost:8400/heroSection").then((data) =>
      data.json()
    );
    document.querySelector(
      ".hero-section"
    ).style.backgroundImage = `url(${data.heroSection.image})`;
  } catch (error) {
    console.log("error in hero section");
  }
}
heroSection();

async function welcomeSection() {
  try {
    let data = await fetch("http://localhost:8400/welcomeSection").then(
      (data) => data.json()
    );
    document.querySelector(".house-image").src = data.welcomeSection.houseImage;
    document.querySelector(".pool-image").src = data.welcomeSection.poolImage;
    document.querySelector(".house2-image").src =
      data.welcomeSection.house2Image;
  } catch (error) {
    console.log("error in welcome section");
  }
}
welcomeSection();

async function roomsSection() {
  try {
    let data = await fetch("http://localhost:8400/roomsSection").then((data) =>
      data.json()
    );
    document.querySelector(".standard-room").src =
      data.roomsSection.standardRoom.img;
    document.querySelector(".standard-room-price").innerHTML =
      data.roomsSection.standardRoom.price;
    document.querySelector(".standard-bed").innerHTML =
      data.roomsSection.standardRoom.bed;
    document.querySelector(".standard-capacity").innerHTML =
      data.roomsSection.standardRoom.capacity;
    document.querySelector(".standard-size").innerHTML =
      data.roomsSection.standardRoom.roomSize;
    document.querySelector(".standard-view").innerHTML =
      data.roomsSection.standardRoom.view;

    document.querySelector(".luxary-room").src =
      data.roomsSection.luxaryRoom.img;
    document.querySelector(".luxary-room-price").innerHTML =
      data.roomsSection.luxaryRoom.price;
    document.querySelector(".luxary-bed").innerHTML =
      data.roomsSection.luxaryRoom.bed;
    document.querySelector(".luxary-capacity").innerHTML =
      data.roomsSection.luxaryRoom.capacity;
    document.querySelector(".luxary-size").innerHTML =
      data.roomsSection.luxaryRoom.roomSize;
    document.querySelector(".luxary-view").innerHTML =
      data.roomsSection.luxaryRoom.view;

    document.querySelector(".ordinary-room").src =
      data.roomsSection.ordinaryRoom.img;
    document.querySelector(".ordinary-room-price").innerHTML =
      data.roomsSection.ordinaryRoom.price;
    document.querySelector(".ordinary-bed").innerHTML =
      data.roomsSection.ordinaryRoom.bed;
    document.querySelector(".ordinary-capacity").innerHTML =
      data.roomsSection.ordinaryRoom.capacity;
    document.querySelector(".ordinary-size").innerHTML =
      data.roomsSection.ordinaryRoom.roomSize;

    document.querySelector(".ordinary-view").innerHTML =
      data.roomsSection.ordinaryRoom.view;
  } catch (error) {
    console.log("error in rooms section");
  }
}
roomsSection();

async function activitiesSection() {
  try {
    let data = await fetch("http://localhost:8400/activitiesSection").then(
      (data) => data.json()
    );
    document.querySelector(".swimming-pool-image").src =
      data.activitiesSection.swimmingPool;
    document.querySelector(".home-image").src = data.activitiesSection.house;
  } catch (error) {
    console.log("error in rooms section");
  }
}
activitiesSection();

async function experienceSection() {
  try {
    let data = await fetch("http://localhost:8400/experienceSection").then(
      (data) => data.json()
    );
    document.querySelector(".massage-image").src =
      data.experienceSection.massageImage;
    document.querySelector(".window-view").src =
      data.experienceSection.windowView;
    document.querySelector(".soaps-image").src =
      data.experienceSection.soapsImage;
    document.querySelector(".wild-image").src =
      data.experienceSection.wildImage;
  } catch (error) {
    console.log("error in experience section");
  }
}
experienceSection();

async function helloSection() {
  try {
    let data = await fetch("http://localhost:8400/helloSection").then((data) =>
      data.json()
    );
    document.querySelector(
      ".hello-section"
    ).style.backgroundImage = `url(${data.helloSection.backgroundImage})`;
  } catch (error) {
    console.log("error in hello section");
  }
}
helloSection();

async function ratingSection() {
  try {
    let data = await fetch("http://localhost:8400/ratingSection").then((data) =>
      data.json()
    );
    document.querySelector(".first-customer-image").src =
      data.ratingSection.firstCustomer.customerImage;
    document.querySelector(".first-customer-name").innerHTML =
      data.ratingSection.firstCustomer.customerName;
    document.querySelector(".first-rating-date").innerHTML =
      data.ratingSection.firstCustomer.dateOfReview;
    document.querySelector(".first-customer-head").innerHTML =
      data.ratingSection.firstCustomer.reviewHead;
    document.querySelector(".first-customer-review").innerHTML =
      data.ratingSection.firstCustomer.reviewDetails;

    document.querySelector(".second-customer-image").src =
      data.ratingSection.secondCustomer.customerImage;
    document.querySelector(".second-customer-name").innerHTML =
      data.ratingSection.secondCustomer.customerName;
    document.querySelector(".second-rating-date").innerHTML =
      data.ratingSection.secondCustomer.dateOfReview;
    document.querySelector(".second-customer-head").innerHTML =
      data.ratingSection.secondCustomer.reviewHead;
    document.querySelector(".second-customer-review").innerHTML =
      data.ratingSection.secondCustomer.reviewDetails;

    document.querySelector(".third-customer-image").src =
      data.ratingSection.thirdCustomer.customerImage;
    document.querySelector(".third-customer-name").innerHTML =
      data.ratingSection.thirdCustomer.customerName;
    document.querySelector(".third-rating-date").innerHTML =
      data.ratingSection.thirdCustomer.dateOfReview;
    document.querySelector(".third-customer-head").innerHTML =
      data.ratingSection.thirdCustomer.reviewHead;
    document.querySelector(".third-customer-review").innerHTML =
      data.ratingSection.thirdCustomer.reviewDetails;
  } catch (error) {
    console.log("error in rating section");
  }
}

ratingSection();

async function joinUsSection() {
  try {
    let data = await fetch("http://localhost:8400/joinUsSection").then((data) =>
      data.json()
    );
    document.querySelector(".bridge").src = data.joinUsSection.bridgeImage;
    document.querySelector(".cat-image").src = data.joinUsSection.catImage;
    document.querySelector(".dog-image").src = data.joinUsSection.forestImage;
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
