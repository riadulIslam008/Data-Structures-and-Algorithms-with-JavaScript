 //
 // ──────────────────────────────────────────────────────────────────── I ──────────
 //   :::::: C I R C U L A R   Q U E U E : :  :   :    :     :        :          :
 // ──────────────────────────────────────────────────────────────────────────────
 //

 

//
// ─── IN ORDER TO IMPLEMENT THE QUEUE THE FOLLOWING FUNCTIONALITY SHOULD BE SUPPORTED IN THE QUEUE 
//

/*
  
enqueue(el) - Adding the element (el) on the back of the queue
dequeue() — Removing element from the front of the queue
isEmpty()- Check whether the queue is empty
getFront() — Fetch the the first element in the queue
clear() — Clear the queue

*/






// Queue 
class Queue {
  constructor() {
    this.array = []; // store data in here.
    this.rear = 0; //is  used to th position in which the next element will be stored.
   // this.size = 4; //maximun number of elements a queue can have.
    this.head = 0;
  }

  enqueue(data) {
    // if (this.rear == this.size) {
    //   return console.log("Array is full");
    // }
    //Put the data in rear position and increase the rear position
    this.array[this.rear] = data;
    this.rear++;
    console.log(`Element In ${this.rear}`);
  }

  length() {
    return this.rear;
  }

  dequeue() {
    if (this.rear == this.head) return ("Array is Empty")

    // this.rear --;
    // console.log(this.rear);
    // return  this.array.shift();
    let element = this.array[this.head];
    this.head++;
    return element;
  }

  printAllValue() {
    for (var i = 0; i < this.rear; i++) {
      console.log(this.array[i]);
    }
  }

  reasetQueue() {
    this.rear = 0;
    this.array.length = 0;
  }

}


// var q = new Queue;
// q.enqueue(20);
// q.enqueue(10);
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());


class CircularQueueByMe{
  constructor(capacity){
    this.array = []; // where put data
    this.rear = 0; //index of data put position 
    this.head = 0; // index of data taka position
    this.size = 0; // array present Size
    this.capacity = capacity; // maximum array size
  }
  enqueue(element){
  if (this.isFull()) throw (new Error("Array is Full"));

    this.array[this.rear] = element;
    this.rear = (this.rear +1) % (this.capacity);
    console.log(`Rear ${this.rear}`);
    this.size++;
  }

  dequeue(){
    if(this.size === 0) throw (new Error("Empty array"));

    let data = this.array[this.head];
    this.head = (this.head + 1) % (this.capacity);
    this.size--;
    console.log(`Head ${this.head}`);
    console.log(`Rear ${this.rear}`);
    return data;
  }
  printAllData(){
    for(var i=0; i< this.array.length; i++){
      console.log(this.array[i]);
    }
  }
  isFull(){
    return this.size ===  this.capacity;
  }
}
const  r = new CircularQueueByMe(5);
console.log(r.isFull());
r.enqueue(10);
r.enqueue(20);
r.enqueue(30);
r.enqueue(40);
r.enqueue(50);
console.log(r.dequeue());
console.log(r.dequeue());
console.log(r.dequeue());
console.log(r.dequeue());
console.log(r.dequeue());
r.enqueue(100);
r.enqueue(200);
r.enqueue(300);
r.enqueue(400);
r.enqueue(500);
console.log(r.dequeue());
r.enqueue(1000);

r.printAllData();
// r.enqueue(30);
// r.enqueue(40);
// r.dequeue();
// r.printAllData();
// r.enqueue(50);

// console.log(r.arraySize());