// Car data
const cars = [
  {
    name: "Maruti Swift",
    price: 1200,
    img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/144325/swift-exterior-right-front-three-quarter.jpeg"
  },
  {
    name: "Hyundai i20",
    price: 1500,
    img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/130459/i20-exterior-right-front-three-quarter-2.jpeg"
  },
  {
    name: "Tata Nexon",
    price: 2000,
    img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/157019/nexon-exterior-right-front-three-quarter.jpeg"
  },
  {
    name: "Toyota Fortuner",
    price: 4500,
    img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/145287/fortuner-exterior-right-front-three-quarter.jpeg"
  }
];

const carList = document.getElementById("carList");
const searchInput = document.getElementById("searchInput");

// Load cars dynamically
function loadCars(filter = "") {
  carList.innerHTML = "";
  cars
    .filter(car => car.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(car => {
      const card = document.createElement("div");
      card.classList.add("car-card");
      card.innerHTML = `
        <img src="${car.img}" alt="${car.name}">
        <h3>${car.name}</h3>
        <p>Price: ₹${car.price}/day</p>
      `;
      carList.appendChild(card);
    });
}

loadCars(); // initial load

// Filter cars on search
searchInput.addEventListener("input", e => loadCars(e.target.value));

// Booking form handling
document.getElementById("bookingForm").addEventListener("submit", e => {
  e.preventDefault();
  const carName = document.getElementById("carName").value.trim();
  const pickup = document.getElementById("pickupDate").value;
  const ret = document.getElementById("returnDate").value;
  const location = document.getElementById("location").value.trim();

  const confirmation = document.getElementById("confirmation");

  if (!carName || !pickup || !ret || !location) {
    confirmation.style.color = "red";
    confirmation.textContent = "Please fill all fields correctly!";
    return;
  }

  confirmation.style.color = "#4caf50";
  confirmation.textContent = `✅ Booking confirmed for ${carName} from ${pickup} to ${ret} at ${location}.`;
  
  e.target.reset();
});
