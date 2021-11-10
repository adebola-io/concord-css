const createBoardElement = () => {
    if (document.querySelector("page-board")){
        document.querySelectorAll("page-board").forEach((streamlineBoard)=>{
            let streamlineBoardContainer = document.createElement('div');
            streamlineBoardContainer.classList.value = 'w100 h200'
            let streamlineBoardBackground = document.createElement('div');
            streamlineBoardBackground.classList.value = "h50 w100 "+(streamlineBoard.getAttribute("background-class")?streamlineBoard.getAttribute("background-class"):"");
            streamlineBoardBackground.style.backgroundImage = streamlineBoard.getAttribute("background-image")?streamlineBoard.getAttribute("background-image"):"";
            streamlineBoardBackground.style.backgroundColor = streamlineBoard.getAttribute("background-color")?streamlineBoard.getAttribute("background-color"):"";
            let streamlineBoardContent = document.createElement('div');
            streamlineBoardContent.classList.value = 'w-initial h50 move-up '+streamlineBoard.classList.value;
            streamlineBoard.classList.value = "overflow-h";
            streamlineBoardContent.innerHTML = streamlineBoard.innerHTML; 
            streamlineBoardContainer.append(streamlineBoardBackground); 
            streamlineBoardContainer.append(streamlineBoardContent);
            while (streamlineBoard.firstChild) {
                streamlineBoard.removeChild(streamlineBoard.firstChild)
            };
            streamlineBoard.append(streamlineBoardContainer);
        })
    }
}

const addDropDown = () => {
        if (document.querySelector('page-header')){
            document.querySelectorAll('page-header').forEach(streamlineHeader=>{
                if (streamlineHeader.nextElementSibling.tagName === 'HR'){
                    let line = streamlineHeader.nextElementSibling;
                    line.style.marginTop = (parseInt(window.getComputedStyle(streamlineHeader, null).getPropertyValue('height').slice(0,2))+5).toString()+'px';
                }
            })
        }
        if (document.querySelector("page-header") && document.querySelector("page-header").querySelector(".drop-down-item")){
                document.querySelectorAll("page-header").forEach(streamlineHeader=>{
                    let color = window.getComputedStyle(streamlineHeader, null).getPropertyValue('color'),
                        justifyContent = window.getComputedStyle(streamlineHeader, null).getPropertyValue('justify-content'),
                        headerDropDown = document.createElement('div'), 
                        dropDownButton = document.createElement('div'),
                        unOrderedList = document.createElement('ul'),
                        dropDownClickCounter = 0,
                        dropDownStyleCounter = 0,
                        headerContain = document.createElement('page-header');
                        headerContain.style.background = 'transparent';
                    headerDropDown.classList.value = 'fcol w100 h0 overflow-h header-drop-down';
                    unOrderedList.classList.value = "w100 h100 p0 m0";
                    streamlineHeader.querySelectorAll(".drop-down-item").forEach(dropItem=>{
                        let navbarlinkContainer = document.createElement('li');
                        navbarlinkContainer.classList.value = 'py-3 pleft-3'
                        navbarlinkContainer.append(dropItem.cloneNode(true));
                        unOrderedList.append(navbarlinkContainer);
                    })
                    headerDropDown.append(unOrderedList);
                    dropDownButton.style.height = dropDownButton.style.width = window.getComputedStyle(streamlineHeader, null).getPropertyValue('height');
                    dropDownButton.innerHTML = `
                        <div class="header-drop-btn-bar" style="background: ${color};"></div>
                        <div class="header-drop-btn-bar" style="background: ${color};"></div>
                        <div class="header-drop-btn-bar" style="background: ${color};"></div>`
                    dropDownButton.classList.value = 'pointer fcol fcx '+ (justifyContent==='center'?'absolute left mleft-2 ':'') + 'header-drop-btn';
                    headerContain.classList.value = streamlineHeader.classList.value+' header relative';
                    headerContain.innerHTML = streamlineHeader.innerHTML;
                    headerContain.prepend(dropDownButton);
                    if (document.body.firstChild.nextSibling === streamlineHeader){let space = document.createElement('header-space'); document.body.prepend(space)}
                    while (streamlineHeader.firstChild) {
                      streamlineHeader.removeChild(streamlineHeader.firstChild)
                    };
                    streamlineHeader.append(headerContain);
                    streamlineHeader.style.flexDirection = "column";
                    streamlineHeader.style.padding = '0';
                    streamlineHeader.style.width = '100%';

                    // Usability of attribute 'dropspeed'
                    if (streamlineHeader.getAttribute('dropspeed')) {
                        headerDropDown.style.transitionDuration = streamlineHeader.getAttribute('dropspeed');
                    }

                    // Usability of attribute 'droptype'
                    let dropDownType = streamlineHeader.getAttribute('droptype');
                    let sizelessDiv, dropDownHeight, headerSpace;
                    switch (dropDownType) {
                        case 'pull':
                        case 'fade':
                            streamlineHeader.style.height = "fit-content";
                            streamlineHeader.append(headerDropDown);
                            if (dropDownType==='fade') headerDropDown.style.opacity = '0';
                            headerDropDown.style.height = 'fit-content';
                            dropDownHeight = headerDropDown.offsetHeight+'px';
                            headerDropDown.style.height = '0px';
                            dropDownButton.addEventListener('click', ()=>{
                                dropDownClickCounter++;
                                if (dropDownType==='fade') {
                                    headerDropDown.style.height = dropDownClickCounter%2===0?'0':'fit-content';
                                    headerDropDown.style.opacity = dropDownClickCounter%2===0?'0':'1';}
                                else if (dropDownType=='pull') {
                                    headerDropDown.style.height = dropDownClickCounter%2===0?'0':dropDownHeight;
                                }
                            })  
                            break;
                        case 'expand':
                            sizelessDiv = document.createElement('div');
                            sizelessDiv.classList.value = 's0 mright-auto mleft-2';
                            headerDropDown.classList.remove('w100', 'h0');
                            headerDropDown.classList.add('brdr-curve-5px','shadow-2px');
                            headerDropDown.style.transform = 'translateY(3px)';
                            headerDropDown.style.background = window.getComputedStyle(streamlineHeader, null).getPropertyValue('background');
                            sizelessDiv.append(headerDropDown);
                            headerDropDown.style.height = 'fit-content';
                            headerDropDown.style.width = '500px';
                            streamlineHeader.append(sizelessDiv);
                            let dropDownWidth = '345px';
                            dropDownHeight = (headerDropDown.offsetHeight-30)+'px';
                            headerDropDown.style.height = '0';
                            headerDropDown.style.width = '0';
                            dropDownButton.addEventListener('click', ()=>{
                                dropDownClickCounter++;
                                headerDropDown.style.width = dropDownClickCounter%2===0?'0':dropDownWidth;
                                headerDropDown.style.height = dropDownClickCounter%2===0?'0':dropDownHeight;
                            });
                            break;
                        case 'sidebar':
                            default:
                            sizelessDiv = document.createElement('div');
                            headerSpace = document.createElement('header-space');
                            sizelessDiv.classList.value = 's0 mright-auto ';
                            headerDropDown.classList.remove('h0');
                            headerDropDown.classList.add('h100', 'move-left');
                            headerDropDown.style.width = '300px';
                            headerDropDown.prepend(headerSpace);
                            sizelessDiv.append(headerDropDown);
                            streamlineHeader.prepend(sizelessDiv);
                            headerDropDown.style.height = (window.innerHeight).toString()+'px';
                            headerDropDown.style.background = window.getComputedStyle(streamlineHeader, null).getPropertyValue('background');
                            dropDownButton.addEventListener('click', ()=>{
                                dropDownClickCounter++;
                                // headerDropDown.style.width = dropDownClickCounter%2===0?'0':'300px';
                                headerDropDown.style.transform = dropDownClickCounter%2===0?'translate(-100%)':'translate(0)';
                            })
                        break;
                    }

                    // Usability of attribute 'droptoggle'
                    let dropDownToggle = streamlineHeader.getAttribute('droptoggle');
                    switch (dropDownToggle){
                        case 'staircase':
                            dropDownButton.innerHTML = `
                            <div class="header-drop-btn-stair-1" style="background: ${color}"></div>
                            <div class="header-drop-btn-stair-2" style="background: ${color}"></div>
                            <div class="header-drop-btn-bar" style="background: ${color}"></div>
                        `
                            let bar1 = dropDownButton.querySelectorAll('div')[0];
                            let bar2 = dropDownButton.querySelectorAll('div')[1];
                            let bar3 = dropDownButton.querySelectorAll('div')[2];
                            dropDownButton.addEventListener('click', ()=>{
                                dropDownStyleCounter++;
                                bar1.style.height= dropDownStyleCounter%2==0?'5%':'0';
                                bar2.style.width = dropDownStyleCounter%2==0?'35%':'50%';
                                bar2.style.transform = dropDownStyleCounter%2==0?'none':'rotate(-45deg) translate(-19%, -94%)';
                                bar3.style.transform = dropDownStyleCounter%2==0?'none':'rotate(45deg) translate(-35%)';
                            })
                            break;
                        case 'reverse-staircase':
                            dropDownButton.innerHTML = `
                                <div class="header-drop-btn-bar" style="background: ${color}"></div>
                                <div class="header-drop-btn-stair-2" style="background: ${color}"></div>
                                <div class="header-drop-btn-stair-1" style="background: ${color}"></div>
                            `
                            break;
                        case 'sandwich':
                            dropDownButton.innerHTML = `
                                <div class="header-drop-btn-bar" style="background: ${color}"></div>
                                <div class="header-drop-btn-bar" style="background: ${color}"></div>
                            `
                            dropDownButton.addEventListener('click', ()=>{
                                dropDownStyleCounter++;
                                let bar1 = dropDownButton.querySelectorAll('.header-drop-btn-bar')[0];
                                let bar2 = dropDownButton.querySelectorAll('.header-drop-btn-bar')[1];
                                bar1.style.transform = 'rotate('+(dropDownStyleCounter%2==0?'0':'45')+'deg)';
                                bar2.style.transform = 'rotate('+(dropDownStyleCounter%2==0?'0':'-45')+'deg)';
                                bar1.style.margin = (dropDownStyleCounter%2==0?'5%':'0');
                                bar2.style.margin = (dropDownStyleCounter%2==0?'5%':'0');
                            })
                            break;
                        case 'matrix':
                    
                            break;
                        default:
                            break;
                    }
                    let dropDownColor = streamlineHeader.getAttribute('dropcolor');
                    if (dropDownColor){headerDropDown.style.backgroundColor = dropDownColor; }
                })
            }
    }
const addHoverClasses = () => {
        if (document.querySelector('[hover-class]')) {
            document.querySelectorAll('[hover-class]').forEach(element=>{
                let originalClassListValue = element.classList.value;
                element.addEventListener('mouseover', ()=>{
                    element.classList.value = element.classList.value+' '+element.getAttribute('hover-class');  
                    this.addVibration();
                })
                element.addEventListener('mouseout', ()=>{
                    element.classList.value = originalClassListValue;
                })
            })
        }
    }

const addNavBar = () => {
    if (document.querySelector('page-navbar')){
        document.querySelectorAll('page-navbar').forEach(streamlineNavBar=>{
            if (streamlineNavBar.previousElementSibling.tagName === 'HR'){
                let line =  streamlineNavBar.previousElementSibling;
                line.classList.value = `fixed bottom ${line.classList.value}`
                line.style.marginBottom = `${parseInt(window.getComputedStyle(streamlineNavBar, null).getPropertyValue('height').slice(0, -2))+parseInt(window.getComputedStyle(line, null).getPropertyValue('margin-bottom').slice(0, -2))}px`
                console.log(line.style.marginBottom)
            }
        })
    }
}
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
                    {duration: 200, iterations: 1, fill: "forwards"}
                )
                popupContainer.addEventListener('click', (e)=>{
                    if (!(e.target === popup)){
                            popup.animate(
                                [
                                    {transform: 'scale(1)'},
                                    {transform: 'scale(1.2)'},
                                    {opacity: '0', transform: 'scale(0.8)'}
                                ],
                                {duration: 200, iterations: 1, fill: "forwards"}
                            )   
                        setTimeout(()=>{popupContainer.remove()}, 200);
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
                        setTimeout(()=>{popupContainer.remove()}, 200);
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
                    {duration: 200, iterations: 1, fill: "forwards"}
                )
                popupContainer.addEventListener('click', (e)=>{
                    if (!(e.target === popup)){
                            popup.animate(
                                [
                                    {opacity: '1'},
                                    {opacity: '0'},
                                ],
                                {duration: 200, iterations: 1, fill: "forwards"}
                            )   
                        setTimeout(()=>{popupContainer.remove()}, 200);
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
                        {duration: 200, iterations: 1, fill: "forwards"}
                )   
                setTimeout(()=>{popupContainer.remove()}, 200);
                break;
            case 'condense-in':
                popup.animate(
                    [
                        {transform: 'scale(1)', filter: 'opacity(1)'},
                        {transform: 'scale(1.2)', filter: 'opacity(0)'}
                    ],
                    {duration: 200, iterations: 1, fill: "forwards"}
                )   
                setTimeout(()=>{popupContainer.remove()}, 200);
                break;
            case 'fade':
                default:
                popup.animate(
                    [
                        {opacity: '1'},
                        {opacity: '0'},
                    ],
                    {duration: 200, iterations: 1, fill: "forwards"}
                )   
                setTimeout(()=>{popupContainer.remove()}, 200);
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
                    {duration: 200, iterations: 1, fill: "forwards"}
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
const createSearchIcon = () => {
      if (document.querySelector('search-icon')){
          document.querySelectorAll('search-icon').forEach(searchIcon=>{
            let iconColor = searchIcon.getAttribute('color');
            let iconSize = searchIcon.getAttribute('size');
            if (iconColor){
               searchIcon.style.setProperty('--searchIconColor', iconColor);
            } else {
              let inheritedColor = window.getComputedStyle(searchIcon.parentNode, null).getPropertyValue('color');
              searchIcon.style.setProperty('--searchIconColor', inheritedColor);
            }
            if (iconSize){
                searchIcon.style.height = searchIcon.style.width = iconSize;
            }
          })
      }  
    }
 const setThemeColor = (color) => {
        if (document.querySelector('meta[name="theme-color"]')) {
            document.querySelector('meta[name="theme-color"]').remove();
        }
        let metaTag = document.createElement('meta');
        metaTag.name = "theme-color";
        metaTag.content = color;
        document.querySelector('head').append(metaTag);
    }

const setSecondaryColor = (color) => {
    document.body.style.setProperty('--secondaryColor', color);
}

class StreamlineUI {
    triggerPopup = (popup) => {
        triggerPopup(popup);
    };
    dismissPopup = (popup) =>{
        dismissPopup(popup);
    };
    setThemeColor = (color) => {
        setThemeColor(color);
    };
    setSecondaryColor = (color) => {
        setSecondaryColor(color);
    };
    runAll () {
        // addAnimations();
        createBoardElement();
        addDropDown();
        addHoverClasses();
        addNavBar();
        createSearchIcon();
        // createCarousels();
        // addVibration();
        stickPopup();
    }
}

var Streamline = new StreamlineUI();
Streamline.runAll();
window.Streamline = Streamline;