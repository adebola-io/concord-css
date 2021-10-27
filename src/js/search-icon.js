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