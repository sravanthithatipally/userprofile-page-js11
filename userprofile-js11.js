let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};
let container_element = document.getElementById("profileContainer");
container_element.classList.add("d-flex", "flex-column", "justify-content-center", "text-center");

let imagecontainer = document.getElementById("imgContainer");

let imageele = document.createElement("img");
imageele.setAttribute("src", profileDetails.imgSrc);
imageele.classList.add("image_styling");
imagecontainer.appendChild(imageele);

let headingele = document.createElement("h1");
headingele.textContent = profileDetails.name;
headingele.classList.add("name");
imagecontainer.appendChild(headingele);

let about = document.createElement("p");
about.textContent = "Age:" + profileDetails.age;
about.classList.add("agesection");
imagecontainer.append(about);