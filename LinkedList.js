/*১ম -এ একটা নোড তৈরী করে নিতে হবে। 
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.header = null; //এগুলা একধরনের পয়েন্টার। যার মাধ্যেমে ভ্যালু রাখা যাবে।
        this.tail = null; //এগুলা একধরনের পয়েন্টার। যার মাধ্যেমে ভ্যালু রাখা যাবে।
        this.size = 0; //কতটি ভ্যালু রাখা হয়েছে তার হিসেব।

    }

    prepand(_data) {

        let n = new Node(_data);
        if (this.size === 0) {
            this.header = n;
            this.tail = n;
        } else {
            n.next = this.header;
            this.header = n;
        }
        this.size++;
    }

    append(_data) {
        let n = new Node(_data);
        if (this.size === 0) {
            this.header = n;
            this.tail = n; //30
        } else {
            const temp = this.tail; //temp = 30,
            this.tail = n; //tail = 20
            temp.next = this.tail; // temp = 30, 20
        }
        this.size++;
    }

    printAllData() {
        let current = this.header;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }

    removeFrist() {
        if (this.size === 0) return console.log("Empty LibkedList");

        let removeItem = this.header.data;

        if (this.size === 1) {
            this.header = null;
            this.tail = null;
            console.log(this.header);
            return removeItem;
        }

        this.header = this.header.next;
        this.size--;
        //console.log(this.header);
        return removeItem;
    }
    removeLast() {
        if (this.size === 0) return console.log("Empty");

        let currentTail = this.tail.data;
        if (this.size === 1) {
            this.header = null;
            this.tail = null;
        }

        var currentHead = this.header;
        while (currentHead.next.next != null) {
            currentHead = currentHead.next;
        }
        currentHead.next = null;
        this.tail = currentTail;
        this.size--;
        return currentTail;
    }

    insertAtIndex(index, data) {
        let n = new Node(data);

        let previous = null;
        let current = this.header;
        let counter = 0;

        while (counter < index) {
            previous = current;
            current = current.next;
            counter++;
        }

        n.next = current;
        previous.next = n;
        this.size++;
    }

    insertBeforItem(targetData, data) {
        let n = new Node(data);

        let previous = null;
        let currentData = this.header;
        while (targetData != currentData.data) {
            previous = currentData;
            currentData = currentData.next;
        }
        n.next = currentData;
        previous.next = n;
        this.size++;
    }
    insertAfterItem(targetData, data) {
        let n = new Node(data);

        let _next = null;
        let currentData = this.header;
        while (targetData != currentData.data) {

            currentData = currentData.next;
            _next = currentData.next;
            // console.log(currentData);
            // console.log(_next);
        }
        n.next = _next;
        currentData.next = n;
       // console.log(n);
         this.size++;
    }

}

let l = new LinkedList();
// l.prepand(100);
// l.prepand(200);
// //  l.prepand(300);

// l.append(30);
// //  l.append(20);
// //  l.append(10);
// l.printAllData();

// console.log(`RemoveFrist : ${l.removeFrist()}`);
// console.log(`RemoveLast : ${l.removeLast()}`);
// l.printAllData();

l.append("A");
l.append("B");
l.append("C");
l.append("D");
// l.printAllData();
l.insertAtIndex(2, "X");
l.insertBeforItem("B", "Y");
l.insertAfterItem("B", "Y");
l.printAllData();

