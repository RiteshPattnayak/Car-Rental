// Car data
const cars = [
  {
    name: "Maruti Swift",
    price: 1200,
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
  },
  {
    name: "Hyundai i20",
    price: 1500,
    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170://imgd.aeplcdn.com/1056x594/n/cw/ec/130459/i20-exterior-right-front-three-quarter-2.jpeg"
  },
  {
    name: "Tata Nexon",
    price: 2000,
   
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
    //img: "https://imgd.aehttps://images.unsplash.com/photo-1641430589592-71899ccfb388?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170plcdn.com/1056x594/n/cw/ec/157019/nexon-exterior-right-front-three-quarter.jpeg"
  },
  {
    name: "Toyota Fortuner",
    price: 4500,
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
    
  }
];
const myhome= document.getElementById("myhome");

const carList = document.getElementById("carList");
const searchInput = document.getElementById("searchInput");








//const carList = document.getElementById("carList");

carList.addEventListener("click", function() {
  window.location.href =  "/";
});

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
