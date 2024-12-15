// Grab the element with the ID 'growingInput' and store it in the 'textarea' variable
const textarea = document.getElementById('growingInput');

// Get the initial width of the textarea and store it in 'initialWidth'
const initialWidth = textarea.offsetWidth;

// Add an event listener to the textarea that triggers on 'input' (when user types or modifies content)
textarea.addEventListener('input', function() {
  // Reset the height to 'auto' to recalculate the height based on content
  this.style.height = 'auto';
  
  // Set the height to match the scroll height (the height of all the content)
  // This makes the textarea grow vertically to fit all the text
  this.style.height = this.scrollHeight + 'px';
  
  // Check if the content width (scrollWidth) is greater than the initial width
  if (this.scrollWidth > initialWidth) {
    // If content is wider than initial width, set width to 100% of its container
    // This makes the textarea expand horizontally
    this.style.width = '100%';
  }
});
