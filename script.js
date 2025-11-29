const doctors = {
    'Cardiology': [
        { name: "Dr. Muhammad Asim", specialty: "Cardiologist", experience: "15 years", fee: "Rs. 3000", rating: "4.8", availability: "Mon-Sat" },
        { name: "Dr. Sana Riaz", specialty: "Cardiologist", experience: "9 years", fee: "Rs. 2700", rating: "4.6", availability: "Wed-Mon" },
        { name: "Dr. Farhan Ahmed", specialty: "Cardiologist", experience: "12 years", fee: "Rs. 3200", rating: "4.7", availability: "Tue-Sat" },
        { name: "Dr. Aisha Nadeem", specialty: "Interventional Cardiologist", experience: "18 years", fee: "Rs. 3500", rating: "4.9", availability: "Mon-Fri" },
        { name: "Dr. Hamza Riaz", specialty: "Cardiologist", experience: "11 years", fee: "Rs. 2900", rating: "4.7", availability: "Tue-Sun" },
        { name: "Dr. Samina Khan", specialty: "Pediatric Cardiologist", experience: "13 years", fee: "Rs. 3100", rating: "4.8", availability: "Wed-Sat" }
    ],
    'Dermatology': [
        { name: "Dr. Ayesha Khan", specialty: "Dermatologist", experience: "12 years", fee: "Rs. 2500", rating: "4.9", availability: "Mon-Fri" },
        { name: "Dr. Nadia Shahid", specialty: "Dermatologist", experience: "8 years", fee: "Rs. 2300", rating: "4.7", availability: "Tue-Sat" },
        { name: "Dr. Zara Malik", specialty: "Cosmetic Dermatologist", experience: "10 years", fee: "Rs. 2800", rating: "4.8", availability: "Mon-Sat" },
        { name: "Dr. Fahad Hassan", specialty: "Dermatologist", experience: "14 years", fee: "Rs. 2600", rating: "4.6", availability: "Wed-Mon" },
        { name: "Dr. Hira Ahmed", specialty: "Pediatric Dermatologist", experience: "9 years", fee: "Rs. 2400", rating: "4.7", availability: "Tue-Fri" },
        { name: "Dr. Salman Iqbal", specialty: "Dermatologist", experience: "16 years", fee: "Rs. 2900", rating: "4.8", availability: "Mon-Thu" }
    ],
    'Orthopedic': [
        { name: "Dr. Ahmed Raza", specialty: "Orthopedic Surgeon", experience: "18 years", fee: "Rs. 3500", rating: "4.7", availability: "Mon-Sat" },
        { name: "Dr. Bilal Khan", specialty: "Orthopedic Surgeon", experience: "20 years", fee: "Rs. 4000", rating: "4.9", availability: "Mon-Fri" },
        { name: "Dr. Tariq Mahmood", specialty: "Spine Surgeon", experience: "15 years", fee: "Rs. 3800", rating: "4.8", availability: "Tue-Sat" },
        { name: "Dr. Saira Jamil", specialty: "Joint Replacement Specialist", experience: "12 years", fee: "Rs. 3300", rating: "4.6", availability: "Wed-Sun" },
        { name: "Dr. Usman Ali", specialty: "Sports Medicine Specialist", experience: "10 years", fee: "Rs. 3000", rating: "4.7", availability: "Mon-Fri" },
        { name: "Dr. Maryam Siddiqui", specialty: "Pediatric Orthopedic", experience: "13 years", fee: "Rs. 3200", rating: "4.8", availability: "Tue-Sat" }
    ],
    'Gynecology': [
        { name: "Dr. Fatima Malik", specialty: "Gynecologist", experience: "10 years", fee: "Rs. 2800", rating: "4.9", availability: "Tue-Sun" },
        { name: "Dr. Sara Iqbal", specialty: "Gynecologist", experience: "14 years", fee: "Rs. 3000", rating: "4.8", availability: "Mon-Sat" },
        { name: "Dr. Ambreen Qureshi", specialty: "Obstetrician", experience: "16 years", fee: "Rs. 3200", rating: "4.7", availability: "Wed-Mon" },
        { name: "Dr. Noor Fatima", specialty: "Fertility Specialist", experience: "12 years", fee: "Rs. 3500", rating: "4.9", availability: "Mon-Fri" },
        { name: "Dr. Rafia Yousaf", specialty: "Gynecologist", experience: "9 years", fee: "Rs. 2600", rating: "4.6", availability: "Tue-Sat" },
        { name: "Dr. Mehwish Ali", specialty: "High-Risk Pregnancy Specialist", experience: "15 years", fee: "Rs. 3300", rating: "4.8", availability: "Mon-Thu" }
    ],
    'Pediatrics': [
        { name: "Dr. Hassan Ali", specialty: "Pediatrician", experience: "14 years", fee: "Rs. 2200", rating: "4.8", availability: "Mon-Sat" },
        { name: "Dr. Zainab Hassan", specialty: "Pediatrician", experience: "11 years", fee: "Rs. 2400", rating: "4.7", availability: "Tue-Sun" },
        { name: "Dr. Adnan Karim", specialty: "Neonatologist", experience: "17 years", fee: "Rs. 2800", rating: "4.9", availability: "Mon-Fri" },
        { name: "Dr. Laiba Shahid", specialty: "Pediatric Allergist", experience: "10 years", fee: "Rs. 2500", rating: "4.6", availability: "Wed-Sat" },
        { name: "Dr. Kamran Javed", specialty: "Pediatrician", experience: "13 years", fee: "Rs. 2300", rating: "4.7", availability: "Tue-Fri" },
        { name: "Dr. Sobia Rafiq", specialty: "Child Development Specialist", experience: "12 years", fee: "Rs. 2600", rating: "4.8", availability: "Mon-Thu" }
    ],
    'Neurology': [
        { name: "Dr. Imran Malik", specialty: "Neurologist", experience: "16 years", fee: "Rs. 3500", rating: "4.8", availability: "Mon-Fri" },
        { name: "Dr. Mariam Shah", specialty: "Neurologist", experience: "13 years", fee: "Rs. 3200", rating: "4.6", availability: "Wed-Sun" },
        { name: "Dr. Faisal Ahmad", specialty: "Stroke Specialist", experience: "19 years", fee: "Rs. 3800", rating: "4.9", availability: "Mon-Sat" },
        { name: "Dr. Sadia Aziz", specialty: "Epilepsy Specialist", experience: "11 years", fee: "Rs. 3300", rating: "4.7", availability: "Tue-Fri" },
        { name: "Dr. Waqar Hussain", specialty: "Movement Disorder Specialist", experience: "14 years", fee: "Rs. 3400", rating: "4.8", availability: "Wed-Sat" },
        { name: "Dr. Amina Tariq", specialty: "Pediatric Neurologist", experience: "10 years", fee: "Rs. 3100", rating: "4.6", availability: "Mon-Thu" }
    ],
    'Gastroenterology': [
        { name: "Dr. Kashif Raza", specialty: "Gastroenterologist", experience: "17 years", fee: "Rs. 3300", rating: "4.7", availability: "Mon-Sat" },
        { name: "Dr. Hina Arif", specialty: "Gastroenterologist", experience: "10 years", fee: "Rs. 2900", rating: "4.5", availability: "Tue-Sat" },
        { name: "Dr. Naveed Akhtar", specialty: "Hepatologist", experience: "18 years", fee: "Rs. 3600", rating: "4.8", availability: "Mon-Fri" },
        { name: "Dr. Rubina Saeed", specialty: "Endoscopist", experience: "12 years", fee: "Rs. 3100", rating: "4.7", availability: "Wed-Sun" },
        { name: "Dr. Jahangir Khan", specialty: "Gastroenterologist", experience: "14 years", fee: "Rs. 3200", rating: "4.6", availability: "Tue-Fri" },
        { name: "Dr. Farah Naz", specialty: "Pediatric Gastroenterologist", experience: "11 years", fee: "Rs. 3000", rating: "4.7", availability: "Mon-Thu" }
    ],
    'ENT': [
        { name: "Dr. Usman Tariq", specialty: "ENT Specialist", experience: "12 years", fee: "Rs. 2600", rating: "4.8", availability: "Mon-Fri" },
        { name: "Dr. Rabia Malik", specialty: "ENT Specialist", experience: "9 years", fee: "Rs. 2400", rating: "4.6", availability: "Wed-Sun" },
        { name: "Dr. Aamir Shahzad", specialty: "Rhinologist", experience: "15 years", fee: "Rs. 2900", rating: "4.7", availability: "Mon-Sat" },
        { name: "Dr. Kiran Fatima", specialty: "Pediatric ENT", experience: "11 years", fee: "Rs. 2700", rating: "4.8", availability: "Tue-Fri" },
        { name: "Dr. Zahid Latif", specialty: "Head & Neck Surgeon", experience: "17 years", fee: "Rs. 3100", rating: "4.9", availability: "Wed-Sat" },
        { name: "Dr. Bushra Azam", specialty: "Audiologist", experience: "10 years", fee: "Rs. 2500", rating: "4.6", availability: "Mon-Thu" }
    ],
    'Pulmonology': [
        { name: "Dr. Shahid Hussain", specialty: "Pulmonologist", experience: "15 years", fee: "Rs. 3100", rating: "4.7", availability: "Mon-Sat" },
        { name: "Dr. Amna Saeed", specialty: "Pulmonologist", experience: "11 years", fee: "Rs. 2800", rating: "4.6", availability: "Tue-Sat" },
        { name: "Dr. Asif Mahmood", specialty: "Critical Care Specialist", experience: "18 years", fee: "Rs. 3400", rating: "4.8", availability: "Mon-Fri" },
        { name: "Dr. Shazia Bibi", specialty: "Sleep Medicine Specialist", experience: "13 years", fee: "Rs. 3000", rating: "4.7", availability: "Wed-Sun" },
        { name: "Dr. Rizwan Ahmed", specialty: "Interventional Pulmonologist", experience: "16 years", fee: "Rs. 3300", rating: "4.9", availability: "Tue-Fri" },
        { name: "Dr. Naila Habib", specialty: "Asthma & Allergy Specialist", experience: "12 years", fee: "Rs. 2900", rating: "4.6", availability: "Mon-Thu" }
    ]
};

let selectedDoctor = null;
let currentDepartment = null;

function showDoctors(department) {
    currentDepartment = department;
    const departmentDoctors = doctors[department];
    
    // Hide departments, show doctors
    document.getElementById('departmentsContainer').style.display = 'none';
    document.getElementById('departmentTitle').classList.add('hidden');
    document.getElementById('backBtn').classList.remove('hidden');
    document.getElementById('doctorsTitle').classList.remove('hidden');
    document.getElementById('selectedDeptName').textContent = department;
    
    const container = document.getElementById('doctorsContainer');
    container.classList.add('active');
    container.innerHTML = '';

    departmentDoctors.forEach(doctor => {
        const initial = doctor.name.split(' ')[1].charAt(0);
        const card = document.createElement('div');
        card.className = 'doctor-card';
        card.innerHTML = `
            <div class="doctor-header">
                <div class="doctor-avatar">${initial}</div>
                <div class="doctor-info">
                    <h3>${doctor.name}</h3>
                    <div class="specialty">${doctor.specialty}</div>
                    <div class="experience">${doctor.experience} experience</div>
                </div>
            </div>
            <div class="doctor-details">
                <div class="detail-row">
                    <span class="detail-label">Consultation Fee:</span>
                    <span class="detail-value">${doctor.fee}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Rating:</span>
                    <span class="detail-value rating">★ ${doctor.rating}/5.0</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Available:</span>
                    <span class="detail-value">${doctor.availability}</span>
                </div>
            </div>
            <button class="book-btn" onclick='openBookingModal(${JSON.stringify(doctor)})'>Book Appointment</button>
        `;
        container.appendChild(card);
    });

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showDepartments() {
    // Show departments, hide doctors
    document.getElementById('departmentsContainer').style.display = 'grid';
    document.getElementById('departmentTitle').classList.remove('hidden');
    document.getElementById('backBtn').classList.add('hidden');
    document.getElementById('doctorsTitle').classList.add('hidden');
    document.getElementById('doctorsContainer').classList.remove('active');
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openBookingModal(doctor) {
    selectedDoctor = doctor;
    document.getElementById('bookingModal').style.display = 'block';
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('appointmentDate').setAttribute('min', today);
}

function closeModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

function confirmBooking() {
    const name = document.getElementById('patientName').value;
    const phone = document.getElementById('patientPhone').value;
    const date = document.getElementById('appointmentDate').value;
    const time = document.getElementById('appointmentTime').value;

    if (!name || !phone || !date) {
        alert('Please fill in all required fields');
        return;
    }

    alert(`Appointment Confirmed!\n\nDoctor: ${selectedDoctor.name}\nPatient: ${name}\nDate: ${date}\nTime: ${time}\nFee: ${selectedDoctor.fee}\n\nYou will receive a confirmation SMS shortly.`);
    closeModal();
    
    // Reset form
    document.getElementById('patientName').value = '';
    document.getElementById('patientPhone').value = '';
    document.getElementById('appointmentDate').value = '';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('bookingModal');
    if (event.target == modal) {
        closeModal();
    }
}