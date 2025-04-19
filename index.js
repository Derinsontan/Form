document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("info-form");
    const formContainer = document.querySelector(".form-container");
    const thankYouContainer = document.getElementById("thank-you-container");
    const displayInfo = document.getElementById("display-info");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const phone = document.getElementById("phone").value;

        displayInfo.innerHTML = `
            <strong>Full Name:</strong> ${fullName}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Address:</strong> ${address}<br>
            <strong>Phone:</strong> ${phone}
        `;

        formContainer.style.display = "none";
        thankYouContainer.style.display = "block";
    });
});