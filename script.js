function repositionButton() {
    // Randomly reposition the "Yes" button
    const yesButton = document.getElementById('yesButton');
    yesButton.style.position = 'absolute';
    yesButton.style.left = Math.random() * window.innerWidth + 'px';
    yesButton.style.top = Math.random() * window.innerHeight + 'px';
}
