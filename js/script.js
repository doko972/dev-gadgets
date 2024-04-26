
document.addEventListener("DOMContentLoaded", function () {

    const picturesImg = document.querySelector(".pictures-img");
    const thumbsImgs = document.querySelectorAll(".thumbs-img");
    const prevBtn = document.querySelector(".pictures-prev");
    const nextBtn = document.querySelector(".pictures-next");

    const imagePaths = Array.from(thumbsImgs).map(img => img.src.replace("-s.png", "-l.png"));

    let currentIndex = 0;

    function showImage(index) {
        picturesImg.src = imagePaths[index];
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % imagePaths.length;
        showImage(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
        showImage(currentIndex);
    }
    prevBtn.addEventListener("click", showPrevImage);
    nextBtn.addEventListener("click", showNextImage);

    thumbsImgs.forEach((thumbImg, index) => {
        thumbImg.addEventListener("mouseenter", () => {
            currentIndex = index;
            showImage(currentIndex);
        });
    });





    //////////
    /*PANIER*/
    /////////
    // Au clic sur le bouton d’ajout au panier, le compteur du panier présent dans le header se
    // met à jour avec la quantité de produit ajoutée via le champ à gauche du bouton.
    // Si la quantité de produits au panier est supérieure à 99 le compteur affiche “99+”.
    // Une fois le produit ajouté au panier, le bouton d’ajout est désactivé :
    // ● le style du bouton est actualisé pour indiquer le changement d’état ;




    const addBtn = document.querySelector(".add-cta");
    const addQty = document.querySelector(".add-qty");
    const cartNb = document.querySelector(".cart-nb");

    /**
     * update "panier" counter with text content if quantity > 99
     * @param {number} quantity quantity
     */
    function updateQuantity(quantity) {
        if (quantity > 99) {
            cartNb.textContent = "99+";
        } else {
            cartNb.textContent = quantity;
        }
    }

    function addToCard() {
        const quantity = parseInt(addQty.value);
        updateQuantity(quantity);
        // ● il n’est plus possible de cliquer sur le bouton et d’ajouter le produit au panier.
        addBtn.disable = true;
        // ● le texte du bouton change pour “Déjà au panier” ;
        addBtn.textContent = 'Déjà au panier';

    }
    addBtn.addEventListener('click', function () {
        addToCard();
        console.log('click panier');
    });

});
//Hidde text//
document.querySelector("#product-subttl").addEventListener('click', function (event) {
    document.querySelector("#text1").classList.toggle('text-hidden');
});
document.querySelector("#product-subttl-sd").addEventListener('click', function (event) {
    document.querySelector("#text2").classList.toggle('text-hidden');
});
