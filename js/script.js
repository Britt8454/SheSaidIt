const forms = document.querySelector(".forms");
const pwShowHide = document.querySelectorAll(".eye-icon");
const links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        const pwFields = eyeIcon.closest(".forms").querySelectorAll(".password");

        pwFields.forEach(password => {
            password.type = (password.type === "password") ? "text" : "password";
        });

        eyeIcon.classList.toggle("bx-hide");
        eyeIcon.classList.toggle("bx-show");
    });
});

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        forms.classList.toggle("show-signup");
    });
});
