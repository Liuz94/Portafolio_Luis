const scene = document.querySelector('.scene');
let isDragging = false;
let startX, startY;
let currentRotation = { x: 35, y: 35 };
let targetRotation = { x: 35, y: 35 };
let animationFrame;

function animate() {
    if (!isDragging) {
        currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
        currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;
        
        if (Math.abs(currentRotation.x - targetRotation.x) < 0.2 && 
            Math.abs(currentRotation.y - targetRotation.y) < 0.2) {
            scene.style.animation = 'autoRotate 12s infinite linear';
        }
    }
    
    scene.style.transform = `rotateX(${currentRotation.x}deg) rotateY(${currentRotation.y}deg)`;
    animationFrame = requestAnimationFrame(animate);
}

scene.addEventListener('mousedown', (e) => {
    isDragging = true;
    scene.style.animation = 'none';
    const style = window.getComputedStyle(scene);
    const matrix = new DOMMatrix(style.transform);
    
    currentRotation.x = matrix.m12;
    currentRotation.y = matrix.m13;
    targetRotation.x = 35;
    targetRotation.y = 35;
    
    startX = e.clientX;
    startY = e.clientY;
    scene.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        
        currentRotation.x = 35 - deltaY * 0.5;
        currentRotation.y = 35 + deltaX * 0.5;
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        scene.style.cursor = 'grab';
        targetRotation.x = 35;
        targetRotation.y = 35;
    }
});

animate();