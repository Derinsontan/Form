document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("info-form");
    const formContainer = document.querySelector(".form-container");
    const thankYouContainer = document.getElementById("thank-you-container");
    const displayInfo = document.getElementById("display-info");
    const loadingScreen = document.getElementById("loading-screen");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const phone = document.getElementById("phone").value;
        const isValidPhone = /^05\d{9}$/.test(phone);

        if (!isValidPhone) {
            alert("Please enter a valid Turkish phone number (starts with 05 and has 11 digits).");
            return;
        }

        // Hide form, show loading screen
        formContainer.style.display = "none";
        loadingScreen.style.display = "flex";

        // Simulate loading for 10 seconds
        setTimeout(() => {
            loadingScreen.style.display = "none";
            thankYouContainer.style.display = "block";

            displayInfo.innerHTML = `
                <strong>Full Name:</strong> ${fullName}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Address:</strong> ${address}<br>
                <strong>Phone:</strong> ${phone}
            `;
        }, 10000); // 10 seconds loading time
    });
});
