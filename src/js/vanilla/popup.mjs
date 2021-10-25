export function triggerPopup (popupName) {
    if (document.querySelector(`page-popup[name='${popupName}']`)){
        let popup = document.querySelector(`page-popup[name='${popupName}']`).cloneNode(true);
        let popupContainer = document.createElement('page-popup-container');
        popupContainer.append(popup);
        popupContainer.setAttribute('name', popupName);
        document.body.append(popupContainer);

        // Usability of attribute 'type'
        let popupType = popup.getAttribute('type');
        switch (popupType){
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
            case 'fade':
                default:
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
        }
    } else {
        console.error(`The popup ${popupName} does not exist.`)
    }
}
export function dismissPopup (popupName){
    if (document.querySelector(`page-popup-container[name='${popupName}']`)){
        let popup = document.querySelector(`page-popup-container[name='${popupName}']`).querySelector(`page-popup`);
        let popupType = popup.getAttribute('type');
        switch (popupType){
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
            case 'fade':
                default:
                popup.animate(
                    [
                        {transform: 'scale(1)', filter: 'opacity(1)'},
                        {transform: 'scale(1.2)', filter: 'opacity(0)'}
                    ],
                    {duration: 200, iterations: 1, fill: "forwards"}
                )   
                    setTimeout(()=>{popupContainer.remove()}, 300);
                break;
        }
    } else console.error(`The popup ${popupName} is not open.`)
}