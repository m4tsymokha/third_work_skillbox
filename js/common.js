window.addEventListener('DOMContentLoaded', function() {
    
    /* Burger Menu */
    document.getElementById('burger-menu-toggle').addEventListener('click', function(event){
        this.classList.toggle('burger-menu-open');
        document.querySelector('.header__nav').classList.toggle('header__mobile-menu-open');
    });
    


    /* Search */
    document.querySelector('.header__search-button').addEventListener('click', function(event){
        document.querySelector('.header__search').classList.add('search__form-open');
        document.querySelector('.search__form-field').removeAttribute('tabindex');
        document.querySelector('.search__form_btn-submit').removeAttribute('tabindex');
        document.querySelector('.header__search-close-button').removeAttribute('tabindex');
    });
    document.querySelector('.header__search-close-button').addEventListener('click', function(event){
        document.querySelector('.header__search').classList.remove('search__form-open');
        document.querySelector('.search__form-field').setAttribute('tabindex','-1');
        document.querySelector('.search__form_btn-submit').setAttribute('tabindex','-1');
        document.querySelector('.header__search-close-button').setAttribute('tabindex','-1');
    });



    /* Slider */
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        // If we need pagination
        pagination: {
            // The parameter below is necessary because we use own classes
            clickable: true,
            // Assign own classes
            el: '.slider__items-nav',
            bulletClass: 'slider__items-nav-item',
            bulletActiveClass: 'slider__items-nav-item-active',
            bulletElement: 'li',
            modifierClass: 'slider-nav-'
        },
        // And if we need scrollbar
        scrollbar: {
            hide: true
        },
    });
   


    /* Tabs at section "How we work" */
    document.querySelectorAll('.how__carousel-nav-link').forEach(function(tabsBtn){
        tabsBtn.addEventListener('click', function(event){            
            // Navigation
            document.querySelectorAll('.how__carousel-nav-link').forEach(function(tabLink){
                tabLink.classList.remove('how__carousel-nav-link_active')
            });
            event.target.classList.add('how__carousel-nav-link_active');
            // Tabs
            const path = event.currentTarget.dataset.tab;
            document.querySelectorAll('.how__carousel-item').forEach(function(tabContent){
                tabContent.classList.remove('how__carousel-item-active')
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('how__carousel-item-active');
            // Off default
            event.preventDefault();
        }) 
    });

});



/* Accordion at section "FAQ" (jQuery UI) */
$(function() {
    $('#faq-accordion').accordion({
        header: ".faq__accordion-item-title",
        /* The next option does not allow height of the blocks with the text to guid by the largest */
        heightStyle: 'content'
    });
});