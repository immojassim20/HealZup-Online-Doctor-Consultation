const doctors = {
  Cardiology: [
    { name: "Dr. Ali Khan", specialty: "Cardiologist", experience: "10 years", fee: "Rs. 2000", availability: "Mon-Fri", rating: 4.8 },
    { name: "Dr. Sara Malik", specialty: "Cardiologist", experience: "8 years", fee: "Rs. 1800", availability: "Tue-Sat", rating: 4.6 }
  ],
  Dermatology: [
    { name: "Dr. Hina Iqbal", specialty: "Dermatologist", experience: "5 years", fee: "Rs. 1500", availability: "Mon-Fri", rating: 4.5 }
  ],
  Orthopedic: [
    { name: "Dr. Omar Farooq", specialty: "Orthopedic", experience: "12 years", fee: "Rs. 2500", availability: "Mon-Fri", rating: 4.9 }
  ],
  Gynecology: [
    { name: "Dr. Nadia Riaz", specialty: "Gynecologist", experience: "9 years", fee: "Rs. 2200", availability: "Tue-Sat", rating: 4.7 }
  ]
};

let selectedDoctor = null;

function showDoctors(department) {
  const departmentDoctors = doctors[department];
  document.getElementById("departmentsContainer").style.display = "none";
  document.getElementById("departmentTitle").classList.add("hidden");
  document.getElementById("backBtn").classList.remove("hidden");
  document.getElementById("doctorsTitle").classList.remove("hidden");
  document.getElementById("selectedDeptName").textContent = department;

  const container = document.getElementById("doctorsContainer");
  container.classList.add("active");
  container.innerHTML = "";

  departmentDoctors.forEach(doctor => {
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
      <div class="card-actions">
        <button class="btn btn-book" onclick='openBooking(${JSON.stringify(doctor)})'>Book</button>
        <button class="btn btn-profile" onclick='openProfile(${JSON.stringify(doctor)})'>Profile</button>
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
  document.getElementById("bookingModal").classList.add("active");
}

function confirmBooking() {
  alert(`Appointment booked with ${selectedDoctor.name}!`);
  closeModal('bookingModal');
}

function openProfile(doctor) {
  const content = `
    <h3>${doctor.name}</h3>
    <p><strong>Specialty:</strong> ${doctor.specialty}</p>
    <p><strong>Experience:</strong> ${doctor.experience}</p>
    <p><strong>Fee:</strong> ${doctor.fee}</p>
    <p><strong>Rating:</strong> ⭐ ${doctor.rating}</p>
    <p><strong>Availability:</strong> ${doctor.availability}</p>
  `;
  document.getElementById("profileContent").innerHTML = content;
  document.getElementById("profileModal").classList.add("active");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("active");
}

