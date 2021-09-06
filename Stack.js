class Stack {
    constructor(maxLength) {
        this.maxLength = maxLength;
        this.top = -1;
        this.length = 0;
        this.stack = [];
    }

    isFull() {
        return this.maxLength === this.length;
    }

    add(data) {
        if (this.isFull()) {
            console.log("Array full");
            return;
        }


        this.top++;
        this.stack[this.top] = data;
        this.length++;
    }

    remove() {
        //  console.log(this.top);
        if (this.top === -1) {
            console.log("Array Empty");
            return;
        }
        let data = this.stack[this.top];
        this.top--;
        this.length--;
        return data;
    }

    print() {
        console.log("Rest value");
        for (var i = 0; i < this.length; i++) {

            console.log(this.stack[i]);
        }
    }
}

let s = new Stack(5);
s.add(100);
s.add(200);
s.add(300);
s.add(400);
s.add(500);
// s.add(600);
// s.print();
console.log(s.remove());
console.log(s.remove());
console.log(s.remove());
s.print();