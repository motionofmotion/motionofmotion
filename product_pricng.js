const switchElement = document.getElementById('toggleSwitch');
const textElement = document.getElementById('displayText');
const textElement_2 = document.getElementById('secText');

switchElement.addEventListener('change', function() {
  if (this.checked) {
    textElement.textContent = '$4.09';
  } else {
    textElement.textContent = '$9.09';
  }

  if (this.checked) {
    textElement_2.textContent = '$39.99';
  } else {
    textElement_2.textContent = '$49.99';
  }
});