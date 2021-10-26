
class StreamlineUI {
    triggerPopup = (popup) => {
        triggerPopup(popup);
    }
    dismissPopup = (popup) =>{
        dismissPopup(popup);
    }
    runAll () {
        createBoardElement();
        addDropDown();
        addHoverClasses();
        createSearchIcon();
        setThemeColor();
        addVibration();
        stickPopup();
    }
}

var Streamline = new StreamlineUI();
Streamline.runAll();
window.Streamline = Streamline;