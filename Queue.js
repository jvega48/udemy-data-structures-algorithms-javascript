class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        if (this.top == null || this.length < 0) {
            return console.error("stack empty");
        }
        return this.first;
    }

    dequeue() {

        if (this.first == null || this.length < 0) {
            return console.error("stack empty");
        }

        if (this.first == this.last || this.length == 1) {
            this.last = null
        }

        this.first = this.first.next;
        this.length--;
        return this.top;
    }

    enqueue(val) {
        let node = new Node(val)
        if (this.first == null) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
        return this;
    }

    print_queue() {
        if (this.length < 0) {
            return console.error("emtyp qeue");
        }
        if (this.length == 1 | this.first == this.last) {
            return this.first;
        }
        let first = this.first;
        let queue = []
        while (first) {
            queue.push(first.value);
            first = first.next;
        }
        return queue;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length < 0;
    }
}

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

let queue = new Queue()
console.log("this peek", queue.peek())
console.log("this peek", queue.enqueue(90))
console.log("this peek", queue.enqueue(100))
console.log("this peek", queue.enqueue(77))
console.log("this peek", queue.enqueue(66))
console.log("this peek", queue.enqueue(34543))
console.log("this peek", queue.enqueue(1054350))

console.log("this queuee", queue.print_queue())

console.log("this peek", queue.dequeue())
console.log("this queuee", queue.print_queue())
console.log("is this empty", queue.isEmpty())