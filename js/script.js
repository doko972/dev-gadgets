
document.addEventListener("DOMContentLoaded", function () {
    const picturesImg = document.querySelector(".pictures-img");
    const thumbsImgs = document.querySelectorAll(".thumbs-img");
    const prevBtn = document.querySelector(".pictures-prev");
    const nextBtn = document.querySelector(".pictures-next");

    const imagePaths = Array.from(thumbsImgs).map(img => img.src.replace("-s.png", "-l.png"));

    let currentIndex = 0;
    /**
     * Get img with index
     * @param {number} index index number
     */
    function showImage(index) {
        picturesImg.src = imagePaths[index];
    }
    /**
     * Change Index of img in +
     * @param {number} index index number
     */
    function showNextImage() {
        currentIndex = (currentIndex + 1) % imagePaths.length;
        showImage(currentIndex);
    }
    /**
     * Change Index of img in -
     * @param {number} index index number
     */
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
            addBtn.disable = true;
            addBtn.textContent = 'Déjà au panier';

        }
        addBtn.addEventListener('click', function () {
            addToCard();
            console.log('click panier');
        });

    });
    /**Hidden text */
    document.querySelector("#product-subttl").addEventListener('click', function () {
        document.querySelector("#text1").classList.toggle('text-hidden');
    });
    document.querySelector("#product-subttl-sd").addEventListener('click', function () {
        document.querySelector("#text2").classList.toggle('text-hidden');
    });



    /*IMG in bottom page*/
    const similarLstImg = document.querySelector(".similar-itm");
    const prevBtnLeft = document.querySelector(".pictures-left");
    const nextBtnRigth = document.querySelector(".pictures-rigth");

    // function showNextImage() {
    //     similarLstImg = (similarLstImg + 1) % similarLstImg.length;
    // }
    // function showPrevImage() {
    //     similarLstImg = (similarLstImg - 1 + similarLstImg.length) % similarLstImg.length;
    // }
    prevBtnLeft.addEventListener("click", showPrevImage);
    nextBtnRigth.addEventListener("click", showNextImage);
});
/////////////////////////////////////////
