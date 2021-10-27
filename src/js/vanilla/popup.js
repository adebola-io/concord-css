const triggerPopup = (popupName) => {
    if (document.querySelector(`page-popup[name='${popupName}']`)){
        let popup = document.querySelector(`page-popup[name='${popupName}']`).cloneNode(true);
        popup.classList.value = `block ${popup.classList.value}`;
        if (popup.innerText === '') {
            popup.innerText = popupName;
            popup.style.color = '#717171';
            popup.classList.value = `fc fnt-11pt txt-uppercase ${popup.classList.value}`;
        }
        let popupContainer = document.createElement('page-popup-container');
        popupContainer.append(popup);
        popupContainer.setAttribute('name', popupName);
        document.body.append(popupContainer);

        // Usability of attribute 'type'
        let popupAnimation = popup.getAttribute('animation');
        switch (popupAnimation){
            case 'expand':
                popup.animate(
                    [
                        {transform: 'scale(0.8)'},
                        {transform: 'scale(1.2)'},
                        {transform: 'scale(1)'},
                    ],
                    {duration: 300, iterations: 1, fill: "forwards"}
                )
                popupContainer.addEventListener('click', (e)=>{
                    if (!(e.target === popup)){
                            popup.animate(
                                [
                                    {transform: 'scale(1)'},
                                    {transform: 'scale(1.2)'},
                                    {opacity: '0', transform: 'scale(0.8)'}
                                ],
                                {duration: 300, iterations: 1, fill: "forwards"}
                            )   
                        setTimeout(()=>{popupContainer.remove()}, 300);
                    }
                })
                break;
            case 'condense-in':
                popup.animate(
                    [
                        {transform: 'scale(1.2)', filter: 'opacity(0)'},
                        {transform: 'scale(1)', filter: 'opacity(1)'}
                    ],
                    {duration: 200, iterations: 1, fill: "forwards"}
                )
                popupContainer.addEventListener('click', (e)=>{
                    if (!(e.target === popup)){
                            popup.animate(
                                [
                                    {transform: 'scale(1)', filter: 'opacity(1)'},
                                    {transform: 'scale(1.2)', filter: 'opacity(0)'}
                                ],
                                {duration: 200, iterations: 1, fill: "forwards"}
                            )   
                        setTimeout(()=>{popupContainer.remove()}, 300);
                    }
                })
                break;
            case 'none':
                popup.style.transform = 'scale(1)';
                popupContainer.addEventListener('click', (e)=>{
                    if (!(e.target === popup)){
                        popupContainer.remove();
                    }
                })
                break;
            case 'fade':
                default:
                popup.animate(
                    [
                        {transform: 'scale(1)',  opacity: '0'},
                        {transform: 'scale(1)', opacity: '1'}
                    ],
                    {duration: 300, iterations: 1, fill: "forwards"}
                )
                popupContainer.addEventListener('click', (e)=>{
                    if (!(e.target === popup)){
                            popup.animate(
                                [
                                    {opacity: '1'},
                                    {opacity: '0'},
                                ],
                                {duration: 300, iterations: 1, fill: "forwards"}
                            )   
                        setTimeout(()=>{popupContainer.remove()}, 300);
                    }
                })
                break;
        }
    } else {
        console.error(`The popup ${popupName} does not exist.`)
    }
}
const dismissPopup = (popupName) =>{
    if (document.querySelector(`page-popup-container[name='${popupName}']`)){
        let popup = document.querySelector(`page-popup-container[name='${popupName}']`).querySelector(`page-popup`);
        let popupAnimation = popup.getAttribute('animation');
        let popupContainer = popup.parentNode;
        switch (popupAnimation){
            case 'expand':
                popup.animate(
                    [
                        {transform: 'scale(1)'},
                        {transform: 'scale(1.2)'},
                        {opacity: '0', transform: 'scale(0.8)'}
                    ],
                        {duration: 300, iterations: 1, fill: "forwards"}
                )   
                setTimeout(()=>{popupContainer.remove()}, 300);
                break;
            case 'condense-in':
                popup.animate(
                    [
                        {transform: 'scale(1)', filter: 'opacity(1)'},
                        {transform: 'scale(1.2)', filter: 'opacity(0)'}
                    ],
                    {duration: 200, iterations: 1, fill: "forwards"}
                )   
                setTimeout(()=>{popupContainer.remove()}, 300);
                break;
            case 'fade':
                default:
                popup.animate(
                    [
                        {opacity: '1'},
                        {opacity: '0'},
                    ],
                    {duration: 300, iterations: 1, fill: "forwards"}
                )   
                setTimeout(()=>{popupContainer.remove()}, 300);
                break;
            case 'none':
                popupContainer.remove();
                break;
            }
    } else console.error(`The popup ${popupName} is not open.`)
}

// Usability of attribute 'stay'
const stickPopup = () => {
     if (document.querySelector(`page-popup[stay]`)){
        let popup = document.querySelector(`page-popup[stay]`).cloneNode(true);
        let popupName = popup.getAttribute('name');
        popup.classList.value = `block ${popup.classList.value}`;
        if (popup.innerText === '') {popup.innerText = ''}
        let popupContainer = document.createElement('page-popup-container');
        popupContainer.append(popup);
        popupContainer.setAttribute('name', popupName);
        document.body.append(popupContainer);

        // Usability of attribute 'type'
        let popupAnimation = popup.getAttribute('animation');
        switch (popupAnimation){
            case 'expand':
                popup.animate(
                    [
                        {transform: 'scale(0.8)'},
                        {transform: 'scale(1.2)'},
                        {transform: 'scale(1)'},
                    ],
                    {duration: 300, iterations: 1, fill: "forwards"}
                )
                break;
            case 'fade':
                default:
                popup.animate(
                    [
                        {transform: 'scale(1.2)', filter: 'opacity(0)'},
                        {transform: 'scale(1)', filter: 'opacity(1)'}
                    ],
                    {duration: 200, iterations: 1, fill: "forwards"}
                )
                break;
        }
    }
}