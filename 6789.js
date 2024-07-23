// 6789.js
console.log('JavaScript file is successfully loaded!');

document.addEventListener('DOMContentLoaded', function() {
    var testElement = document.getElementById('test-element');
    if (testElement) {
        testElement.innerText = 'JavaScript has successfully modified this text!';
    } else {
        console.log('Element with id "test-element" not found.');
    }
});
