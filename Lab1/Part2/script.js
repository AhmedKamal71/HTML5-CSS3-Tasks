const redRange = document.getElementById('redRange');
const greenRange = document.getElementById('greenRange');
const blueRange = document.getElementById('blueRange');
const displayText = document.getElementById('displayText');

redRange.addEventListener('input', updateColor);
greenRange.addEventListener('input', updateColor);
blueRange.addEventListener('input', updateColor);

function updateColor() {
    const redValue = redRange.value;
    const greenValue = greenRange.value;
    const blueValue = blueRange.value;

    displayText.textContent = `Change The 3 Coors Ranges Above And Observe My Color Change`;
    displayText.style.color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}
