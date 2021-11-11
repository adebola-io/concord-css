"use strict";
exports.__esModule = true;
exports.fillElement = exports.fillWindow = exports.doNothing = exports.dataStructures = void 0;
/**
 * A set of useful ways to organize information in a system.
 */
exports.dataStructures = {
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
    LinkedList: /** @class */ (function () {
        function class_1() {
            this.Node = /** @class */ (function () {
                function class_2() {
                    this.data = 0;
                }
                return class_2;
            }());
        }
        return class_1;
    }()),
    DoublyLinkedList: /** @class */ (function () {
        function DoublyLinkedList() {
        }
        return DoublyLinkedList;
    }()),
    CircularLinkedList: /** @class */ (function () {
        function CircularLinkedList() {
        }
        return CircularLinkedList;
    }()),
    Stack: /** @class */ (function () {
        function class_3() {
            var _this = this;
            this.t = -1;
            this.arr = [];
            this.maxSize = 0;
            /**
            * This function returns the current size of the stack.
            */
            this.size = function () { return _this.t + 1; };
        }
        /**
         * This function checks and returns the value of the item at the top of the stack.
         */
        class_3.prototype.peek = function () {
            if (this.isEmpty()) {
                console.error('The Stack is empty.');
            }
            else {
                return this.arr[this.t];
            }
        };
        ;
        /**
         * This function returns a boolean value that indicates whether a stack is full or not, based on the maximum size specified.
         */
        class_3.prototype.isFull = function () {
            if (this.maxSize) {
                return this.t === this.maxSize - 1;
            }
            else {
                return false;
            }
        };
        /**
         * This function returns a boolean value that indicates whether a stack is empty or not.
         */
        class_3.prototype.isEmpty = function () {
            return this.t === -1;
        };
        /**
         * This function removes an item from the top of the stack and returns its value.
         */
        class_3.prototype.pop = function () {
            if (this.isEmpty()) {
                console.error('This stack is already empty.');
            }
            else {
                return this.arr[this.t--];
            }
        };
        /**
         * This function add an item to the top of the stack.
         * @param data
         * The item to be added to the stack.
         */
        class_3.prototype.push = function (data) {
            if (this.isFull()) {
                console.error('The stack is already full.');
            }
            else {
                this.arr[++this.t] = data;
            }
        };
        return class_3;
    }()),
    /**
    * A linear FIFO (First In, First Out) data structure which follows a particular order in which the operations are performed, from which only the earliest item added to the queue can be removed at a time.
    */
    Queue: /** @class */ (function () {
        function class_4() {
            this.f = 0;
            this.b = 0;
            this.arr = [];
            this.maxSize = 0;
        }
        /**
         * This function returns the current size of the stack.
         */
        class_4.prototype.size = function () {
            return this.b - this.f;
        };
        ;
        /**
         * This function returns a boolean value that indicates whether a queue is empty or not.
         */
        class_4.prototype.isEmpty = function () {
            return this.f >= this.b;
        };
        ;
        /**
         * This function returns a boolean value that indicates whether a queue is full or not, according to the max size specified.
         */
        class_4.prototype.isFull = function () {
            if (this.maxSize) {
                return this.b === this.maxSize;
            }
            else {
                return false;
            }
        };
        ;
        /**
         * This function inserts a new item at the end of a queue.
         * An undefined value will be returned if the queue is already full.
         * @param {any} data
         * The item to be inserted in the queue.
         *
         */
        class_4.prototype.enqueue = function (data) {
            if (this.isFull()) {
                console.warn('Operation rejected. You cannot enqueue into a queue that is full.');
                return;
            }
            else {
                this.arr.push(data);
                ++this.b;
            }
        };
        /**
         * This function removes the item at the front of a queue and return its value.
         * An undefined value will be returned if the queue is already empty.
         */
        class_4.prototype.dequeue = function () {
            if (this.isEmpty()) {
                console.warn("You are trying to dequeue from an already empty queue.");
                return;
            }
            else {
                return this.arr[this.f++];
            }
        };
        /**
         * This function checks and returns the value of the item at the beginning of the queue.
         */
        class_4.prototype.front = function () {
            if (!this.isEmpty())
                return this.arr[this.f];
            else
                return;
        };
        /**
         * This function checks and returns the value of the item at the end of the queue.
         */
        class_4.prototype.rear = function () {
            if (!this.isEmpty())
                return this.arr[this.b - 1];
            else
                return;
        };
        return class_4;
    }()),
    HashTable: /** @class */ (function () {
        function HashTable() {
        }
        return HashTable;
    }()),
    Tree: /** @class */ (function () {
        function Tree() {
        }
        return Tree;
    }()),
    BinarySearchTree: /** @class */ (function () {
        function BinarySearchTree() {
        }
        return BinarySearchTree;
    }()),
    Heap: /** @class */ (function () {
        function Heap() {
        }
        return Heap;
    }()),
    Graph: /** @class */ (function () {
        function Graph() {
        }
        return Graph;
    }())
};
/**
 * A dead function.
 */
function doNothing() {
}
exports.doNothing = doNothing;
/**
 * This function sets both the document and the body to fill the window.
 */
function fillWindow() {
}
exports.fillWindow = fillWindow;
/**
 * Takes a selector of a node and sets its size to 100% of its parent node.
 * @param selector
 * A class, ID, tag or attribute selector of the node.
 */
function fillElement(selector) {
    var element = document.querySelector(selector);
    element.style.height = '100%';
    element.style.width = '100%';
}
exports.fillElement = fillElement;
var ConcordClass = /** @class */ (function () {
    function ConcordClass() {
        this.dataStructures = exports.dataStructures;
        this.fillWindow = fillWindow;
        this.fillElement = fillElement;
    }
    return ConcordClass;
}());
var Concord = new ConcordClass();
