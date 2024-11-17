function handleSubmit(event) {
  // Prevent the default form submission behavior (which would reload the page)
  event.preventDefault();
  
  // Grab the values entered by the user in the form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Construct the mailto link to open the default email client with pre-filled information
  const mailtoLink = `mailto:space_explorer@keemail.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
  
  try {
      // Attempt to open the user's default email client with the constructed mailto link
      window.location.href = mailtoLink;

      // Display success message and hide error message
      document.getElementById('successMessage').style.display = 'block';
      document.getElementById('errorMessage').style.display = 'none';

      // Optionally, reset the form fields after successful submission
      document.getElementById('contactForm').reset();

  } catch (error) {
      // If there is an error, display the error message and hide the success message
      document.getElementById('errorMessage').style.display = 'block';
      document.getElementById('successMessage').style.display = 'none';
      
      // Log the error to the console (for debugging purposes)
      console.error('Error sending the email:', error);
  }
  
  return false; // Ensure the form does not reload the page (already handled by preventDefault)
}
