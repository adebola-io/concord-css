const createBoardElement = () => {
    if (document.querySelector("page-board")){
        document.querySelectorAll("page-board").forEach((streamlineBoard)=>{
            if (streamlineBoard.getAttribute('height')) {
            streamlineBoard.style.height = streamlineBoard.getAttribute('height')} else if (window.innerHeight<900){
                streamlineBoard.style.height = (window.innerHeight-48).toString()+'px';
            }
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