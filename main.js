const card = document.querySelector(".card"),
    btn = document.querySelector(".btn"),
    close = document.querySelector(".close") 


btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

function openModal(e) {
    e.preventDefault();
    card.style.display = "block";
}

function closeModal() {
    card.style.display = "none";
}