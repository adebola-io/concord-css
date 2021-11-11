/**
 * A dead function.
 */
export function doNothing () {

}
/**
 * This function sets both the document and the body to fill the window.
 */
export function fillWindow() {

}
/**
 * Takes a selector of a node and sets its size to 100% of its parent node.
 * @param selector
 * A class, ID, tag or attribute selector of the node.
 */
export function fillElement(selector: string) {
    let element = document.querySelector(selector) as HTMLElement;
    element.style.height = '100%';
    element.style.width = '100%';   
}