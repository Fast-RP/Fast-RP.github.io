window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const text = params.get("txt") || "1234"; 
    document.getElementById("dynamicText").textContent = text;
};