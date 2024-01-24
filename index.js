document.addEventListener('DOMContentLoaded', function () {
  const registrationForm = document.getElementById('registrationForm');
  const entriesTableBody = document.querySelector('#entriesTable tbody');

  registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptTerms = document.getElementById('acceptTerms').checked;

    // Validate Date of Birth (DOB)
    const age = calculateAge(new Date(dob));
    if (age < 18 || age > 55) {
      alert('Age must be between 18 and 55.');
      return;
    }

    // Add entry to the table
    const newRow = entriesTableBody.insertRow();
    newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${password}</td><td>${dob}</td><td>${acceptTerms ? 'Yes' : 'No'}</td>`;

    // Clear the form
    registrationForm.reset();
  });

  function calculateAge(birthDate) {
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
      return age - 1;
    }

    return age;
  }
});
