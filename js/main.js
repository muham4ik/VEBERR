
document.addEventListener('DOMContentLoaded', () => {
    // Function to handle scroll event
    function handleScroll() {
        let headerScroll = document.querySelector('.header-scroll');

        if (window.scrollY > 90) {
            headerScroll.classList.add('active');
        } else {
            headerScroll.classList.remove('active');
        }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();


    // Function to handle header mobile menu
    function handleHeaderMob(headerMobSelector, headerMobShowSelector, headerMobCloseSelector, headerMobBgSelector) {
        let headerMob = document.querySelector(headerMobSelector);
        let headerMobShow = document.querySelector(headerMobShowSelector);
        let headerMobClose = document.querySelector(headerMobCloseSelector);
        let headerMobBg = document.querySelector(headerMobBgSelector);

        headerMobShow.addEventListener('click', function () {
            headerMob.classList.add('active');
        });

        headerMobClose.addEventListener('click', function () {
            headerMob.classList.remove('active');
        });

        headerMobBg.addEventListener('click', function () {
            headerMob.classList.remove('active');
        });
    }
    // Apply function to both header mobile menus
    handleHeaderMob('.header_mob', '.header_bars', '.header_close', '.header_mob-bg');
    handleHeaderMob('.header-scroll .header_mob', '.header-scroll .header_bars', '.header-scroll .header_close', '.header-scroll .header_mob-bg');


    // Sidebar active
    document.querySelectorAll('.sidebar_item-title').forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('active');
            const arrow = this.querySelector('.sidebar_item-arrow');
            const checkBox = this.nextElementSibling;

            if (arrow) {
                arrow.classList.toggle('active');
            }

            if (checkBox) {
                checkBox.classList.toggle('active');
            }
        });
    });
    document.querySelectorAll('.more_check-btn').forEach(button => {
        button.addEventListener('click', function () {
            const checkItems = this.parentElement.querySelectorAll('.sidebar_check-inp.none');
            checkItems.forEach(item => {
                item.classList.remove('none');
            });
            this.style.display = 'none';
        });
    });


    // Sidebar show
    let sidebar = document.querySelector('.catalog_sidebar');
    let filterTab = document.querySelector('.product_filter');
    let filterClose = document.querySelector('.sidebar_close');
    let body = document.body;
    try {
        filterTab.addEventListener('click', function () {
            sidebar.classList.toggle('active');
            body.classList.toggle('no-scroll', sidebar.classList.contains('active'));
        });

        filterClose.addEventListener('click', function () {
            sidebar.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    } catch (erorr) {
        console.error();
    }

    // Sidebar scroll
    let catalogBlock = document.querySelector('.catalog_block');
    let sidebarLinks = document.querySelector('.sidebar_links');
    try {
        function updateSidebarPosition() {
            let scrollPosition = window.scrollY || window.pageYOffset;
            let catalogBlockRect = catalogBlock.getBoundingClientRect();
            let catalogBlockTop = catalogBlockRect.top + window.scrollY;
            let catalogBlockHeight = catalogBlockRect.height;
            let catalogBlockBottom = catalogBlockTop + catalogBlockHeight;
            let sidebarHeight = sidebar.offsetHeight;

            try {
                if (window.innerWidth > 1100) {
                    if (scrollPosition + window.innerHeight >= sidebarHeight + catalogBlockTop && scrollPosition + window.innerHeight < catalogBlockBottom) {
                        sidebar.style.position = 'fixed';
                        sidebar.style.top = 'auto';
                        sidebar.style.transform = 'translate3d(0px, 0px, 0px)';
                        sidebar.style.bottom = '0';
                        try {
                            sidebarLinks.style.position = 'relative';  // Add this line to change sidebar_links position
                        } catch (error) {
                            console.error();
                        }
                    } else if (scrollPosition + window.innerHeight >= catalogBlockBottom) {
                        sidebar.style.position = 'absolute';
                        sidebar.style.transform = 'none';
                        sidebar.style.top = 'auto';
                        sidebar.style.bottom = '0px';
                        try {
                            sidebarLinks.style.position = 'relative';  // Add this line to change sidebar_links position
                        } catch (error) {
                            console.error();
                        }
                    } else {
                        sidebar.style.position = 'sticky';
                        sidebar.style.top = '100px';
                        sidebar.style.transform = 'none';
                        sidebar.style.bottom = 'auto';
                        try {
                            sidebarLinks.style.position = 'fixed';  // Reset sidebar_links position
                        } catch (error) {
                            console.error();
                        }
                    }
                } else {
                    sidebar.style.position = 'fixed';
                    sidebar.style.top = '0';
                    sidebar.style.bottom = 'auto';
                    sidebarLinks.style.position = 'fixed';  // Reset sidebar_links position
                }
            } catch (error) {
                console.error();
            }
        }

        window.addEventListener('scroll', updateSidebarPosition);
        window.addEventListener('resize', updateSidebarPosition);
        updateSidebarPosition();
    } catch (error) {
        console.error();
    }


    // Card like active
    const likeTabs2 = document.querySelectorAll('.info_card-btns .like');
    const likeTabs = document.querySelectorAll('.product_card-tab.like');
    const likeTotals = document.querySelectorAll('.like-total');

    likeTabs.forEach(tab => {
        if (tab.classList.contains('active')) {
            likeTotals.forEach(total => {
                let currentCount = parseInt(total.textContent);
                total.textContent = currentCount + 1;
            });
        }
    });

    likeTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tab.classList.toggle('active');

            likeTotals.forEach(total => {
                let currentCount = parseInt(total.textContent);
                if (tab.classList.contains('active')) {
                    total.textContent = currentCount + 1;
                } else {
                    total.textContent = currentCount - 1;
                }
            });
        });
    });

    likeTabs2.forEach(tab => {
        tab.addEventListener('click', function () {
            tab.classList.toggle('active');
        });
    });

    document.querySelectorAll('.product_card-tab.video').forEach(tab => {
        tab.addEventListener('click', function () {
            tab.classList.toggle('active');
        });
    });
    document.querySelectorAll('.info__circle-img').forEach(tab => {
        tab.addEventListener('click', function () {
            tab.classList.toggle('active');
        });
    });

    // radioItem active
    let radioItem = document.querySelector('.product_radio-wrap');
    let radioTab = document.querySelector('.product_radio-tab');
    let radioClose = document.querySelector('.product_radio-btn');
    let radioItemBg = document.querySelector('.product_radio-bg');

    try {
        radioTab.addEventListener('click', function () {
            this.classList.add('active');
            radioItem.classList.add('active');
        });
        radioClose.addEventListener('click', function () {
            radioItem.classList.remove('active');
            radioTab.classList.remove('active')
        });
        radioItemBg.addEventListener('click', function () {
            radioItem.classList.remove('active');
            radioTab.classList.remove('active')
        });
    } catch (error) {
        console.error();
    }


    // Sidebar text modal
    const circles = document.querySelectorAll('.sidebar-title-circle');
    const sidebarModals = document.querySelectorAll('.sidebar_modal');
    const sidebarModalsClose = document.querySelectorAll('.sidebar_modal-close');

    circles.forEach(circle => {
        circle.addEventListener('click', (event) => {
            event.stopPropagation();
            const modal = circle.closest('.sidebar_item-title').querySelector('.sidebar_modal');

            sidebarModals.forEach(m => m.classList.remove('active'));

            modal.classList.add('active');
        });
    });
    document.addEventListener('click', () => {
        sidebarModals.forEach(modal => {
            modal.classList.remove('active');
        });
    });
    sidebarModals.forEach(modal => {
        modal.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });

    sidebarModalsClose.forEach(close => {
        close.addEventListener('click', (e) => {
            sidebarModals.forEach(m => m.classList.remove('active'));
        });
    });

    // Home Slider
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 14,
        slidesPerView: 6,
        autoplay: {
            delay: 1000,
        },
        speed: 800,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            300: {
                spaceBetween: 4,
            },
            776: {
                spaceBetween: 14,
            }
        }
    });
    var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        autoplay: {
            delay: 1000,
        },
        speed: 800,
        thumbs: {
            swiper: swiper,
        },
    });


    try {
        // productCards total
        let viewedBlockContainers = document.querySelectorAll('.viewed_block');
        viewedBlockContainers.forEach(container => {
            let productCards = container.querySelectorAll('.product_card');
            let cardCount = productCards.length;
            let totalElement = container.querySelector('.viewed_card-total');
            if (totalElement) {
                totalElement.innerText = cardCount;
            }
        });

        document.querySelector('.head_message-btn').addEventListener('click', function () {
            document.querySelector('.header_message').style.display = 'none';
        });
    } catch (error) {
        console.error();
    }


    // viewedSlide
    let viewedSlide = new Swiper(".viewedSlide", {
        slidesPerView: 3,
        spaceBetween: 24,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
        breakpoints: {
            300: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            776: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        }
    });
    // viewedSlide2
    let viewedSlide2 = new Swiper(".viewedSlide2", {
        slidesPerView: 4,
        spaceBetween: 24,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
        breakpoints: {
            300: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            776: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        }
    });
    // viewedSlide3
    let viewedSlide3 = new Swiper(".viewedSlide3", {
        slidesPerView: 4,
        spaceBetween: 24,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
        breakpoints: {
            300: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            776: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        }
    });

    // noteSlide
    let noteSlide = new Swiper(".noteSlide", {
        slidesPerView: 3,
        spaceBetween: 24,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
        breakpoints: {
            300: {
                slidesPerView: 1.5,
                spaceBetween: 24,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            776: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        }
    });

    // Info slider
    var infoSlide = new Swiper(".infoSlide", {
        spaceBetween: 14,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            300: {
                slidesPerView: 6,
                spaceBetween: 14,
            },
            450: {
                slidesPerView: 8,
                spaceBetween: 14,
            },
        }
    });
    var infoSlide2 = new Swiper(".infoSlide2", {
        spaceBetween: 10,
        thumbs: {
            swiper: infoSlide,
        },
    });


    // Tabs active
    function handleTabs(tabs, button) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const anyTabActive = Array.from(tabs).some(t => t.classList.contains('active'));
                if (anyTabActive) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });
        });
    }
    const paymentTabs = document.querySelectorAll('.order_payment-tab');
    const orderButton = document.querySelector('.order_item-btn');
    handleTabs(paymentTabs, orderButton);


    // Delevery Card Active
    const tabs = document.querySelectorAll('.delivery_tab');
    const cards = document.querySelectorAll('.delivery_card');
    const circleModalSpan = document.querySelector('.delivery_circle-modal span');
    const itemCircle = document.querySelector('.order_item-title .delivery_item-circle');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            cards.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            cards[index].classList.add('active');

            if (index === 1) {
                circleModalSpan.textContent = 'Выберите службу доставки';
            } else if (index === 2) {
                circleModalSpan.textContent = 'Выберите курьерскую службу';
            } else {
                circleModalSpan.textContent = 'Добавъте получателя';
            }
        });
    });


    // Delivery Logo Tabs
    const deliveryLogoTabs = document.querySelectorAll('.delivery_logo-recipient');
    const deliveryRecipientTab = document.querySelector('.delivery_recipient-tab');
    const addressModal = document.querySelector('.address_modal');
    const addressModalClose = document.querySelector('.address_close');
    const addressModalbg = document.querySelector('.address_modal-bg');
    const addressModalBtn = document.querySelector('.address_form-btn');
    const itemCircleImgs1 = document.querySelectorAll('.delivery_item-circle');

    deliveryLogoTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            itemCircleImgs1.forEach(itemCircleImg1 => itemCircleImg1.classList.add('none'));
            e.preventDefault();
            deliveryLogoTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const anyActive = Array.from(deliveryLogoTabs).some(t => t.classList.contains('active'));
            deliveryRecipientTab.classList.toggle('active', anyActive);
        });
    });

    deliveryRecipientTab.addEventListener('click', toggleModal.bind(null, addressModal));
    addressModalbg.addEventListener('click', toggleModal.bind(null, addressModal));
    addressModalBtn.addEventListener('click', toggleModal.bind(null, addressModal));
    addressModalClose.addEventListener('click', toggleModal.bind(null, addressModal));



    const deliveryCheckTabs = document.querySelectorAll('.delivery_check input[type="checkbox"]');
    const itemCircleImgs3 = document.querySelectorAll('.delivery_item-circle');

    deliveryCheckTabs.forEach(input => {
        input.addEventListener('click', () => {
            itemCircleImgs3.forEach(itemCircleImg3 => {
                if (input.checked) {
                    itemCircleImg3.classList.add('none');
                } else {
                    itemCircleImg3.classList.remove('none');
                }
            });
        });
    });


    // Map Logo Tabs
    const mapLogoTabs = document.querySelectorAll('.delivery_logo-map');
    const mapRecipientTab = document.querySelector('.delivery_map-tab');
    const mapModal = document.querySelector('.map_modal');
    const mapClose = document.querySelector('.map_close');
    const mapModalBg = document.querySelector('.map_modal-bg');
    const itemCircleImgs2 = document.querySelectorAll('.delivery_item-circle');

    mapLogoTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            itemCircleImgs2.forEach(itemCircleImg2 => itemCircleImg2.classList.add('none'));
            e.preventDefault();
            mapLogoTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const anyActive = Array.from(mapLogoTabs).some(t => t.classList.contains('active'));
            mapRecipientTab.classList.toggle('active', anyActive);
        });
    });

    mapRecipientTab.addEventListener('click', toggleModal.bind(null, mapModal));
    mapClose.addEventListener('click', toggleModal.bind(null, mapModal));
    mapModalBg.addEventListener('click', toggleModal.bind(null, mapModal));

    // Function to toggle modal active class
    function toggleModal(modal, e) {
        e.preventDefault();
        modal.classList.toggle('active');
    }


    // Form modals 
    const modals = {
        formModalShow: document.querySelector('#modalFormShow'),
        modalShow1: document.querySelector('#modalShow1'),
        modalShow2: document.querySelector('#modalShow2')
    };

    const modalForms = {
        formModal1: document.querySelector('#formModal1'),
        formModal2: document.querySelector('#formModal2')
    };

    const bodyWrap = document.body;

    function showModal(modalToShow) {
        Object.values(modalForms).forEach(modal => modal.classList.remove('active'));
        modalToShow.classList.add('active');
        bodyWrap.classList.add('no-scroll'); // Scrollni o'chirish
    }

    modals.formModalShow.addEventListener('click', () => showModal(modalForms.formModal1));
    modals.modalShow1.addEventListener('click', () => showModal(modalForms.formModal1));
    modals.modalShow2.addEventListener('click', () => showModal(modalForms.formModal2));

    function hideAllModals() {
        Object.values(modalForms).forEach(modal => modal.classList.remove('active'));
        body.classList.remove('no-scroll'); // Scrollni qayta yoqish
    }

    document.querySelectorAll('.form_modal-bg, .modal_close, .modal_form-btn, .modal_form-btn2').forEach(element => {
        element.addEventListener('click', hideAllModals);
    });
});


document.addEventListener("DOMContentLoaded", function () {

    // info tab active
    const tabs = document.querySelectorAll('.info_tab');
    const contents = document.querySelectorAll('.info_value');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            contents.forEach(content => content.classList.remove('active'));
            contents[index].classList.add('active');
        });
    });


    // Question modal
    const openButton = document.querySelector('.question-open');
    const modal = document.querySelector('.question_modal');
    const closeButton = document.querySelector('.question-close');
    openButton.addEventListener('click', () => {
        modal.classList.add('active');
    });
    closeButton.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    modal.addEventListener('click', (event) => {
        if (!event.target.closest('.question_modal-wrap')) {
            modal.classList.remove('active');
        }
    });

    const reviewOpen = document.querySelectorAll('.info_review-btn');
    const reviewModal = document.querySelector('.review_modal');
    const reviewClose = document.querySelector('.review-close');
    reviewOpen.forEach(tab => {
        tab.addEventListener('click', () => {
            reviewModal.classList.add('active');
        });
    })
    reviewClose.addEventListener('click', () => {
        reviewModal.classList.remove('active');
    });
    reviewModal.addEventListener('click', (event) => {
        if (!event.target.closest('.review_modal-wrap')) {
            reviewModal.classList.remove('active');
        }
    });


    // Basket tab
    const basketTabs = document.querySelectorAll('.basket-tab');
    const basketTotals = document.querySelectorAll('.basket-total');

    basketTabs.forEach(tab => {
        if (tab.classList.contains('active')) {
            basketTotals.forEach(total => {
                let currentCount = parseInt(total.textContent);
                total.textContent = currentCount + 1;
            });
        }
    });

    basketTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tab.classList.toggle('active');

            basketTotals.forEach(total => {
                let currentCount = parseInt(total.textContent);
                if (tab.classList.contains('active')) {
                    total.textContent = currentCount + 1;
                } else {
                    total.textContent = currentCount - 1;
                }
            });
        });
    });

    // Basket text change
    const basketChange = document.querySelectorAll('.basket-change');
    const basketTotals2 = document.querySelectorAll('.basket-total');
    const basketText = document.querySelectorAll('.basket-text');

    basketChange.forEach(tab => {
        tab.addEventListener('click', function () {
            let anyActive = Array.from(basketChange).some(item => item.classList.contains('active'));

            basketChange.forEach(item => {
                if (anyActive) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            });

            basketTotals2.forEach(total => {
                let currentCount = parseInt(total.textContent);
                if (anyActive) {
                    total.textContent = currentCount - 1;
                } else {
                    total.textContent = currentCount + 1;
                }
            });

            if (anyActive) {
                basketText.forEach(text => {
                    text.textContent = 'Добавить в корзину';
                });
            } else {
                basketText.forEach(text => {
                    text.textContent = 'В корзине';
                });
            }
        });
    });    


    // Like text change 
    const likeChange = document.querySelectorAll('.info_right-tab.like-tab');
    const likeTotals2 = document.querySelectorAll('.like-total');

    likeChange.forEach(tab => {
        tab.addEventListener('click', function () {
            tab.classList.toggle('active');
            likeTotals2.forEach(total => {
                let currentCount = parseInt(total.textContent);
                if (tab.classList.contains('active')) {
                    total.textContent = currentCount + 1;
                } else {
                    total.textContent = currentCount - 1;
                }
            });

            const basketText = tab.querySelector('.like-text');
            if (basketText.textContent === 'В избранном') {
                basketText.textContent = 'В избранное';
            } else {
                basketText.textContent = 'В избранном';
            }
        });
    });


    // More review
    const moreReviewCard = document.querySelector('.more_review');
    const infoReviewCards = document.querySelectorAll('.info_review-card');

    moreReviewCard.addEventListener('click', () => {
        infoReviewCards.forEach(card => {
            card.classList.remove('none');
        });
    });


    // Star active
    const starContainers = document.querySelectorAll('.info_review-star');
    starContainers.forEach(container => {
        const stars = container.querySelectorAll('.star-img');

        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                if (star.classList.contains('active')) {
                    star.classList.remove('active');
                    star.classList.add('noActive');

                    for (let i = index + 1; i < stars.length; i++) {
                        stars[i].classList.remove('active');
                        stars[i].classList.add('noActive');
                    }
                } else {
                    stars.forEach(s => s.classList.add('noActive')); 
                    for (let i = 0; i <= index; i++) {
                        stars[i].classList.add('active');
                        stars[i].classList.remove('noActive');
                    }
                }
            });
        });
    });


    // Tab review
    const reviewTab = document.querySelector('#reviewTab');
    const infoReviewTab = document.querySelector('#infoReviewTab');
    const reviewValue = document.querySelector('#reviewValue');
    const questionTab = document.querySelector('#questionTab');
    const infoQuestionTab = document.querySelector('#infoQuestionTab');
    const questionValue = document.querySelector('#questionValue');
    const infoValues = document.querySelectorAll('.info_value');
    const infoTabs = document.querySelectorAll('.info_tab');
    reviewTab.addEventListener('click', function () {
        infoValues.forEach(value => value.classList.remove('active'));
        infoTabs.forEach(tab => tab.classList.remove('active'));
        infoReviewTab.classList.add('active');
        reviewValue.classList.add('active');
    });
    questionTab.addEventListener('click', function () {
        infoValues.forEach(value => value.classList.remove('active'));
        infoTabs.forEach(tab => tab.classList.remove('active'));
        infoQuestionTab.classList.add('active');
        questionValue.classList.add('active');
    });
});


// Input mask
document.addEventListener('DOMContentLoaded', function () {
    let phoneInputs = document.querySelectorAll('.phone-inp');

    function applyMask(input) {
        let maskOptions = {
            mask: '+7 (000) 000-00-00',
            lazy: false
        };

        input.placeholder = '+7 (___) ___-__-__';

        input.addEventListener('focus', function () {
            new IMask(input, maskOptions);
        });
    }

    phoneInputs.forEach(function (phoneInp) {
        applyMask(phoneInp);
    });

});


// Location
const locationTab = document.querySelector('.header_location-tab');
const locationArrow = document.querySelector('.header_location-arrow');
const locationTexts = document.querySelector('.header_location-texts');
const locationSpans = document.querySelectorAll('.header_location-texts span');

locationTab.addEventListener('click', (event) => {
    event.stopPropagation();
    locationArrow.classList.toggle('active');
    locationTexts.classList.toggle('active');
});

locationSpans.forEach(span => {
    span.addEventListener('click', (event) => {
        locationTab.querySelector('span').textContent = event.target.textContent;
        locationArrow.classList.remove('active');
        locationTexts.classList.remove('active');
    });
});

document.addEventListener('click', (event) => {
    if (!locationTab.contains(event.target)) {
        locationArrow.classList.remove('active');
        locationTexts.classList.remove('active');
    }
});


// Delevery new card create
document.addEventListener('DOMContentLoaded', () => {
    const addressInput = document.querySelector('#addressInp');
    const addressTextarea = document.querySelector('#addressTextarea');
    const submitButton = document.querySelector('.address_form-btn');
    const sidebarCheckInp = document.querySelector('#sidebarCheckInp');
    const templateDeliveryCheck = document.querySelector('#deliveryAddreess');
    const orderItemBtn = document.querySelector('.order_item-btn');

    submitButton.addEventListener('click', () => {
        const addressValue = addressInput.value.trim();
        const commentValue = addressTextarea.value.trim();

        if (addressValue && commentValue) {
            const newDeliveryCheck = templateDeliveryCheck.cloneNode(true);

            const newId = `deliveryCheck${document.querySelectorAll('.delivery_addreess-check').length + 1}`;
            const newCheckbox = newDeliveryCheck.querySelector('input[type="checkbox"]');
            const newLabel = newDeliveryCheck.querySelector('label');
            newCheckbox.id = newId;
            newLabel.htmlFor = newId;

            const newP = newDeliveryCheck.querySelector('p');
            const newSpan = newDeliveryCheck.querySelector('span');
            newP.textContent = commentValue;
            newSpan.textContent = addressValue;

            sidebarCheckInp.appendChild(newDeliveryCheck);

            addressInput.value = '';
            addressTextarea.value = '';

            newDeliveryCheck.style.display = 'flex';
            sidebarCheckInp.style.display = 'flex';
            sidebarCheckInp.classList.add('active');
            if (sidebarCheckInp.classList.contains('active')) {
                orderItemBtn.classList.add('active');
            } else {
                orderItemBtn.classList.remove('active');
            }
        }
    });
});


// Modal form new card create
document.addEventListener('DOMContentLoaded', () => {
    const formModal1 = document.querySelector('#formModal1');
    const formNameInp = formModal1.querySelector('.form_name-inp');
    const formTelInp = formModal1.querySelector('.phone-inp');
    const submitButton = formModal1.querySelector('.modal_form-btn');
    const formModalValue = document.querySelector('#formModalValue');
    const deliveryValue = document.querySelector('#deliveryValue');
    const orderItemBtn = document.querySelector('.order_item-btn');

    submitButton.addEventListener('click', () => {
        const addressValue = formNameInp.value.trim();
        const commentValue = formTelInp.value.trim();

        if (addressValue && commentValue) {
            const newDeliveryCheck = deliveryValue.cloneNode(true);

            const newId = `deliveryCheck${document.querySelectorAll('.delivery_addreess-check').length + 1}`;
            const newCheckbox = newDeliveryCheck.querySelector('input[type="checkbox"]');
            const newLabel = newDeliveryCheck.querySelector('label');
            newCheckbox.id = newId;
            newLabel.htmlFor = newId;

            const newP = newDeliveryCheck.querySelector('p');
            const newSpan = newDeliveryCheck.querySelector('span');
            newP.textContent = commentValue;
            newSpan.textContent = addressValue;

            formModalValue.appendChild(newDeliveryCheck);

            formNameInp.value = '';
            formTelInp.value = '';

            newDeliveryCheck.style.display = 'flex';
            formModalValue.style.display = 'flex';
            formModalValue.classList.add('active');
            if (formModalValue.classList.contains('active')) {
                orderItemBtn.classList.add('active');
            } else {
                orderItemBtn.classList.remove('active');
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const formModal2 = document.querySelector('#formModal2');
    const formNameInp2 = formModal2.querySelector('.form_name-inp2');
    const formTelInp2 = formModal2.querySelector('.phone-inp2');
    const submitButton = formModal2.querySelector('.modal_form-btn2');
    const formModalValue2 = document.querySelector('#formModalValue2');
    const deliveryValue2 = document.querySelector('#deliveryValue2');
    const orderItemBtn = document.querySelector('.order_item-btn');


    submitButton.addEventListener('click', () => {
        const addressValue = formNameInp2.value.trim();
        const commentValue = formTelInp2.value.trim();

        if (addressValue && commentValue) {
            const newDeliveryCheck = deliveryValue2.cloneNode(true);

            const newId = `deliveryCheck${document.querySelectorAll('.delivery_addreess-check').length + 1}`;
            const newCheckbox = newDeliveryCheck.querySelector('input[type="checkbox"]');
            const newLabel = newDeliveryCheck.querySelector('label');
            newCheckbox.id = newId;
            newLabel.htmlFor = newId;

            const newP = newDeliveryCheck.querySelector('p');
            const newSpan = newDeliveryCheck.querySelector('span');
            newP.textContent = commentValue;
            newSpan.textContent = addressValue;

            formModalValue2.appendChild(newDeliveryCheck);

            formNameInp2.value = '';
            formTelInp2.value = '';

            newDeliveryCheck.style.display = 'flex';
            formModalValue2.style.display = 'flex';
            formModalValue2.classList.add('active');

            if (formModalValue2.classList.contains('active')) {
                orderItemBtn.classList.add('active');
            } else {
                orderItemBtn.classList.remove('active');
            }
        }
    });
});