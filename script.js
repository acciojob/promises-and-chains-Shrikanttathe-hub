//your JS code here. If required.
 document.getElementById('userForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevents the default form submission behavior

      const ageInput = document.getElementById('age');
      const nameInput = document.getElementById('name');

      const age = parseInt(ageInput.value);
      const name = nameInput.value;

      // Validate inputs
      if (isNaN(age) || age <= 0 || name.trim() === '') {
        alert('Please enter valid age and name.');
        return;
      }

      // Create a promise
      const agePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age >= 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000);
      });

      // Handle promise resolution or rejection
      agePromise
        .then((message) => {
          alert(message);
        })
        .catch((message) => {
          alert(message);
        });
    });