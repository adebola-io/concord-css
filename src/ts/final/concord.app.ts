/**
 * A set of useful ways to organize information in a system.
 */
export var dataStructures = {
    /**
     * A linear data type that holds a sequence of items.
     */
    // Array: class {
    //     arr = [];
    //     /**
    //      * This function returns a string that contains all the elements of the array.
    //      * @returns string
    //      */
    //     traverse(){
    //         let t: string = ''
    //         for (let i: number = 0; i < this.arr.length; i++){
    //             t += this.arr[i].toString()+' ';
    //         }
    //         return t;
    //     };
    //     search(item: any){};
    //     update(formerValue: any, newValue: any){};
    //     push(item:any) {};
    //     push(item:any) {}
    // },
    /**
    * A linear LIFO (Last In, First Out) data structure that holds an ordered sequence of items, from which only the last item added to the stack can be removed at a time.
    */
    LinkedList: class {
        Node = class {
            data: number = 0;
        }
    },
    DoublyLinkedList: class {

    },
    CircularLinkedList: class {

    },
    Stack: class {
        t = -1;
        arr = [];
        maxSize = 0;
        /**
        * This function returns the current size of the stack.
        */
        size = () => {return this.t+1;}
        /**
         * This function checks and returns the value of the item at the top of the stack.
         */
        peek () {
            if (this.isEmpty()){
                console.error('The Stack is empty.')
            } else {
                return this.arr[this.t];
            }
        };
        /**
         * This function returns a boolean value that indicates whether a stack is full or not, based on the maximum size specified.
         */
        isFull() {
            if (this.maxSize) {
                return this.t === this.maxSize-1;
            } else {
                return false;
            }
        }
        /**
         * This function returns a boolean value that indicates whether a stack is empty or not.
         */
        isEmpty() {
            return this.t === -1;
        }
        /**
         * This function removes an item from the top of the stack and returns its value.
         */
        pop () {
            if (this.isEmpty()) {
                console.error('This stack is already empty.')
            } else {
                return this.arr[this.t--];
            }
        }
        /**
         * This function add an item to the top of the stack.
         * @param data
         * The item to be added to the stack.
         */
        push(data : any) {
            if (this.isFull()) {
                console.error('The stack is already full.');
            } else {
                this.arr[++this.t] = data;
            }
        }
    },
    /**
    * A linear FIFO (First In, First Out) data structure which follows a particular order in which the operations are performed, from which only the earliest item added to the queue can be removed at a time.
    */
    Queue: class {
        f = 0;
        b = 0;
        arr = [];
        maxSize = 0;
        /**
         * This function returns the current size of the stack.
         */
        size () {
            return this.b-this.f;
        };
        /**
         * This function returns a boolean value that indicates whether a queue is empty or not.
         */
        isEmpty() {
            return this.f >= this.b;
        };
        /**
         * This function returns a boolean value that indicates whether a queue is full or not, according to the max size specified.
         */
        isFull () {
            if (this.maxSize) {
                return this.b === this.maxSize;
            } else {
                return false;
            }
        };
        /**
         * This function inserts a new item at the end of a queue.
         * An undefined value will be returned if the queue is already full.
         * @param {any} data 
         * The item to be inserted in the queue.
         * 
         */
        enqueue(data: any) {
            if (this.isFull()) {
                console.warn('Operation rejected. You cannot enqueue into a queue that is full.')
                return;
            } else {
                this.arr.push(data);
                ++this.b;
            }
        }
        /**
         * This function removes the item at the front of a queue and return its value.
         * An undefined value will be returned if the queue is already empty.
         */
        dequeue() {
            if (this.isEmpty()){
                console.warn("You are trying to dequeue from an already empty queue.");
                return;
            } else {
                return this.arr[this.f++];
            }
        }
        /**
         * This function checks and returns the value of the item at the beginning of the queue.
         */
        front() {
            if (!this.isEmpty()) return this.arr[this.f]; else return;
        }
        /**
         * This function checks and returns the value of the item at the end of the queue.
         */
        rear() {
            if (!this.isEmpty()) return this.arr[this.b-1]; else return;
        }
    },
    HashTable: class {

    },
    Tree: class {

    },
    BinarySearchTree: class {

    },
    Heap: class {

    },
    Graph: class {

    }
}

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
class ConcordClass {
    dataStructures = dataStructures;
    fillWindow = fillWindow;
    fillElement = fillElement;
}

var Concord = new ConcordClass();