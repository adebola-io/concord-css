const createCarousels = () => {
    if (document.querySelector('page-carousel')){
        document.querySelectorAll('page-carousel').forEach(carousel=>{
            carousel.classList.value = `w100 overflow-h ${carousel.classList.value}`;
            let content = carousel.innerHTML;
            if (carousel.getAttribute('height')){
                carousel.style.height = carousel.getAttribute('height');
            } else {
                carousel.style.height = '365px';
            }
            let carouselLineup = document.createElement('div');
            let carouselContent = document.createElement('div');
            carouselContent.classList.value = 'carousel-content w-fit-content flex fcy h100';
            if (carousel.querySelector('carousel-item')){
                carousel.querySelectorAll('carousel-item').forEach(carouselItem=>{
                    while (carousel.firstChild) {
                        carousel.removeChild(carousel.firstChild)
                    };
                    carouselLineup.classList.value = `carousel-lineup hide-scrollbar w100 overflow-x-s ${carousel.getAttribute('heading')?'h85':'h100'}`
                    let itemType = carouselItem.getAttribute('type');
                    switch (itemType) {
                        case 'book':
                        default:
                            break;
                    }
                    carouselContent.append(carouselItem);
                })
                carouselLineup.append(carouselContent);
                carousel.append(carouselLineup);
            }
            if (carousel.getAttribute('heading')){
                let carouselHeading = document.createElement('h1');
                carouselHeading.innerHTML = carousel.getAttribute('heading');
                carouselHeading.classList.value = `carousel-heading ${carousel.getAttribute('heading-class')?carousel.getAttribute('heading-class'):''}`
                carousel.prepend(carouselHeading);
            }            
        })
    }
}