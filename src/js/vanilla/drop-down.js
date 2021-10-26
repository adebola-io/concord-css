const addDropDown = () => {
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
                        navbarlinkContainer.classList.value = 'txt-plain py-3 pleft-3'
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
                            headerDropDown.style.height = (window.innerHeight-20).toString()+'px';
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