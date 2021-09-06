class Node {
    constructor(data) {
        this.previous = null;
        this.data = data;
        this.next = null;
    }
}
     
    

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    prepand(_data) {
        let n = new Node(_data);

        if (this.size === 0) {
            this.head = n;
            this.tail = n;
        } else {
            // this.head.next = n.data;
            // n.previous = this.head.data;
            // this.tail = n;

        }
        this.size++;
    }
    append() { }
    printData() {
        console.log(this.tail);
    }
}

let d = new DoubleLinkedList();
d.prepand("A");
d.prepand("B");
d.printData();