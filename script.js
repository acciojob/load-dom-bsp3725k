// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Create a text node with the message
  const message = document.createTextNode("DOM load success");
  // Append the message to the body
  document.body.append(message);
});
