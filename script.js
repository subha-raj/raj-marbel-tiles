/* ==========================================
   MOBILE MENU
========================================== */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


/* ==========================================
   CLOSE MOBILE MENU
   AFTER CLICKING A NAVIGATION LINK
========================================== */

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


/* ==========================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================== */

document.addEventListener("click", function (event) {

    const clickedInsideNavigation =
        navLinks.contains(event.target);

    const clickedMenuButton =
        menuButton.contains(event.target);


    if (
        !clickedInsideNavigation &&
        !clickedMenuButton
    ) {

        navLinks.classList.remove("show");

    }

});


/* ==========================================
   PRODUCT CATEGORY FILTER
========================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const productCards =
    document.querySelectorAll(".product-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {


        /* Remove active class */

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        /* Add active class */

        button.classList.add("active");


        /* Get selected category */

        const selectedCategory =
            button.getAttribute("data-filter");


        /* Filter products */

        productCards.forEach(function (card) {

            const cardCategory =
                card.getAttribute("data-category");


            if (
                selectedCategory === "all" ||
                cardCategory === selectedCategory
            ) {

                card.classList.remove("hidden");

            }

            else {

                card.classList.add("hidden");

            }

        });

    });

});


/* ==========================================
   CURRENT YEAR
========================================== */

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* ==========================================
   SIMPLE SCROLL ANIMATION
========================================== */

const animatedElements =
    document.querySelectorAll(
        ".product-card, .gallery-item, .contact-card"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


animatedElements.forEach(function (element) {

    observer.observe(element);

});
/* ==========================================
   GALLERY IMAGE DATA
========================================== */

const galleryData = {

    shop: {

        title: "দোকানের ছবি",

        images: [

            "images/shop/shop1.jpg",
            "images/shop/shop2.jpg",
            "images/shop/shop3.jpg",
            "images/shop/shop4.jpg",
            "images/shop/shop5.jpg"

        ]

    },


    tiles: {

        title: "টাইলসের ছবি",

        images: [

            "images/tiles/tile1.jpeg",
            "images/tiles/tile2.jpeg",
            "images/tiles/tile3.jpeg",
            "images/tiles/tile4.jpeg",
            "images/tiles/tile5.jpeg",
            "images/tiles/tile6.jpeg",
            "images/tiles/tile7.jpeg",
            "images/tiles/tile8.jpeg",
            "images/tiles/tile9.jpeg",
            "images/tiles/tile10.jpeg"

        ]

    },


    marble: {

        title: "মার্বেলের ছবি",

        images: [

            "images/marble/marble1.jpeg",
            "images/marble/marble2.jpeg",
            "images/marble/marble3.jpeg",
            "images/marble/marble4.jpeg",
            "images/marble/marble5.jpeg",
            "images/marble/marble6.jpeg",
            "images/marble/marble7.jpeg",
            "images/marble/marble8.jpeg",
            "images/marble/marble9.jpeg",
            "images/marble/marble10.jpeg"

        ]

    },


    paint: {

        title: "পেইন্টের ছবি",

        images: [

            "images/paint/paint1.jpg",
            "images/paint/paint2.jpg",
            "images/paint/paint3.jpg",
            "images/paint/paint4.jpg",
            "images/paint/paint5.jpg"

        ]

    },


    pipes: {

        title: "পাইপ ও সাইফনের ছবি",

        images: [

            "images/pipes/pipe1.jpg",
            "images/pipes/pipe2.jpg",
            "images/pipes/pipe3.jpg",
            "images/pipes/pipe4.jpg",
            "images/pipes/pipe5.jpg"

        ]

    },


    products: {

        title: "অন্যান্য পণ্যের ছবি",

        images: [

            "images/products/product1.jpg",
            "images/products/product2.jpg",
            "images/products/product3.jpg",
            "images/products/product4.jpg",
            "images/products/product5.jpg"

        ]

    }

};


/* ==========================================
   GET GALLERY ELEMENTS
========================================== */

const galleryCategories =
    document.querySelectorAll(
        ".gallery-category"
    );


const galleryModal =
    document.getElementById(
        "galleryModal"
    );


const galleryClose =
    document.getElementById(
        "galleryClose"
    );


const galleryModalTitle =
    document.getElementById(
        "galleryModalTitle"
    );


const galleryModalGrid =
    document.getElementById(
        "galleryModalGrid"
    );


/* ==========================================
   OPEN GALLERY
========================================== */

galleryCategories.forEach(function (category) {

    category.addEventListener(
        "click",
        function () {

            const categoryName =
                category.getAttribute(
                    "data-category"
                );


            openGallery(categoryName);

        }
    );

});


/* ==========================================
   OPEN GALLERY FUNCTION
========================================== */

function openGallery(categoryName) {

    const category =
        galleryData[categoryName];


    if (!category) {

        return;

    }


    /* Set title */

    galleryModalTitle.textContent =
        category.title;


    /* Clear previous images */

    galleryModalGrid.innerHTML = "";


    /* Add images */

    category.images.forEach(
        function (imagePath, index) {


            const imageContainer =
                document.createElement(
                    "div"
                );


            imageContainer.className =
                "gallery-modal-item";


            const image =
                document.createElement(
                    "img"
                );


            image.src = imagePath;


            image.alt =
                category.title +
                " " +
                (index + 1);


            image.loading = "lazy";


            /* Prevent broken image icon */

            image.onerror = function () {

                imageContainer.remove();

            };


            imageContainer.appendChild(
                image
            );


            galleryModalGrid.appendChild(
                imageContainer
            );

        }
    );


    /* Show modal */

    galleryModal.classList.add(
        "active"
    );


    /* Prevent background scrolling */

    document.body.style.overflow =
        "hidden";

}


/* ==========================================
   CLOSE GALLERY
========================================== */

function closeGallery() {

    galleryModal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


/* ==========================================
   CLOSE BUTTON
========================================== */

galleryClose.addEventListener(
    "click",
    closeGallery
);


/* ==========================================
   CLICK OUTSIDE MODAL
========================================== */

galleryModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target === galleryModal
        ) {

            closeGallery();

        }

    }
);


/* ==========================================
   ESC KEY TO CLOSE
========================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            galleryModal.classList.contains(
                "active"
            )
        ) {

            closeGallery();

        }

    }
);