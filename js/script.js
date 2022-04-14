new Vue({
    el: '#app',
    data: {
        mainTitle: "",
        mainSlogan: "",
        poetryName: "",
        poetName: "",
        date: "",
        adjust: "",
    },
});

// Uploading LogoImages
const imageInput = document.querySelector("#imageInput");
var uploadedImage = "";

imageInput.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadedImage = reader.result
        document.querySelector("#displayImage").style.backgroundImage = `url(${uploadedImage})`;
    });
    reader.readAsDataURL(this.files[0]);
});

// Uploading ProfileImages
const profileInput = document.querySelector("#profileInput");
var uploadedImage = "";

profileInput.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadedProfile = reader.result
        document.querySelector("#displayProfile").style.backgroundImage = `url(${uploadedProfile})`;
    });
    reader.readAsDataURL(this.files[0]);
});