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