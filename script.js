const doctors = {
  // … Your full doctors object
};

let selectedDoctor = null;
let currentDepartment = null;

function showDoctors(department) {
  currentDepartment = department;
  const departmentDoctors = doctors[department];

  document.getElementById("departmentsContainer").style.display = "none";
  document.getElementById("departmentTitle").classList.add("hidden");
  document.getElementById("backBtn").classList.remove("hidden");
  document.getElementById("doctorsTitle").classList.remove("hidden");
  document.getElementById("selectedDeptName").textContent = department;

  const container = document.getElementById("doctorsContainer");
  container.classList.add("active");
  container.innerHTML = "";

  departmentDoctors.forEach((doctor) => {
    const initial = doctor.name.split(" ")[1].charAt(0);

    const card = document.createElement("div");
    card.className = "doctor-card";

    card.innerHTML = `
      <div class="doctor-header">
        <div class="doctor-avatar">${initial}</div>
        <div class="doctor-info">
          <h3>${doctor.name}</h3>
          <div class="specialty">${doctor.specialty}</div>
          <div class="experience">${doctor.experience}</div>
          <div class="rating">⭐ ${doctor.rating}</div>
        </div>
      </div>

      <div class="doctor-details">
        <div class="detail-row"><span class="detail-label">Fee:</span><span class="detail-value">${doctor.fee}</span></div>
        <div class="detail-row"><span class="detail-label">Available:</span><span class="detail-value">${doctor.availability}</span></div>
      </div>

      <div class="button-row">
        <button class="book-btn" onclick='openBooking(${JSON.stringify(doctor)})'>Book</button>
        <button class="profile-btn" onclick='openProfile(${JSON.stringify(doctor)})'>Profile</button>
      </div>
    `;

    container.appendChild(card);
  });
}

function showDepartments() {
  document.getElementById("departmentsContainer").style.display = "grid";
  document.getElementById("departmentTitle").classList.remove("hidden");
  document.getElementById("backBtn").classList.add("hidden");
  document.getElementById("doctorsTitle").classList.add("hidden");
  document.getElementById("doctorsContainer").classList.remove("active");
}

function openBooking(doctor) {
  selectedDoctor = doctor;
  document.getElementById("bookingModal").style.display = "block";
}

function closeModal() {
  document.getElementById("bookingModal").style.display = "none";
}

function confirmBooking() {
  alert("Appointment Confirmed!");
  closeModal();
}

function openProfile(doctor) {
  document.getElementById("profileName").textContent = doctor.name;
  document.getElementById("profileSpecialty").textContent = doctor.specialty;
  document.getElementById("profileExperience").textContent = doctor.experience;
  document.getElementById("profileFee").textContent = doctor.fee;
  document.getElementById("profileRating").textContent = doctor.rating;
  document.getElementById("profileAvailability").textContent = doctor.availability;

  document.getElementById("profileModal").style.display = "block";
}

function closeProfileModal() {
  document.getElementById("profileModal").style.display = "none";
}
