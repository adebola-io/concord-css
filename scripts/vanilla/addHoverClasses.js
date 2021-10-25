export function addHoverClasses () {
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