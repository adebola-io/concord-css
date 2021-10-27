
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
        createBoardElement();
        addDropDown();
        addHoverClasses();
        createSearchIcon();
        createCarousels();
        // addVibration();
        stickPopup();
    }
}

var Streamline = new StreamlineUI();
Streamline.runAll();
window.Streamline = Streamline;