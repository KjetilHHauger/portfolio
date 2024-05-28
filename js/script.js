// script.js
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('arcCanvas');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 50; // Increased radius
    const gap = 0.02; // Angular gap in radians

    // Define colors and lineWidth
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 20; // Increased line width

    // Draw left quarter circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI + gap, 1.5 * Math.PI - gap);
    ctx.stroke();

    // Draw right quarter circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 1.5 * Math.PI + gap, 2 * Math.PI - gap);
    ctx.stroke();

    // Draw bottom semi-circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0 + gap, Math.PI - gap);
    ctx.stroke();
});
