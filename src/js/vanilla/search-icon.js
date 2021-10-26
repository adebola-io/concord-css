const createSearchIcon = () => {
      if (document.querySelector('search-icon')){
          document.querySelectorAll('search-icon').forEach(searchIcon=>{
            let iconColor = searchIcon.getAttribute('color');
            let iconSize = searchIcon.getAttribute('size');
            if (iconColor){
               searchIcon.style.setProperty('--searchIconColor', iconColor);
               console.log(searchIcon.style.searchColor);
            } 
            if (iconSize){
                searchIcon.style.height = searchIcon.style.width = iconSize;
            }
          })
      }  
    }