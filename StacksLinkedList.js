class Stacks {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        if (this.top == null || this.length < 0) {
            return console.error("stack empty");
        }
        return this.top;
    }

    pop() {
        if (this.top == null || this.length < 0) {
            return console.error("stack empty");
        }

        let nextElemtent = this.top.next;

        this.top = nextElemtent;
        this.length--;
        return this.top;
    }

    push(val) {
        let newNode = new Node(val);

        if (this.top == null || this.length == 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            let head_ = this.top;
            this.top = newNode;
            newNode.next = head_.next;
            this.top.next = head_;
        }
        this.length++;
        return this.top;
    }

    print_stack() {
        if (this.length < 0) {
            return console.error("the stack is empty");
        }
        let stacks_ = []
        if (this.length == 1) {
            return this.top.value
        }

        let r = this.top;

        while (r != null) {
            stacks_.push(r.value)
            r = r.next
        }
        return stacks_
    }

    size() {
        return this.length;
    }
}

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

let stack = new Stacks()

console.log("push 43", stack.push(43))
console.log("push 99", stack.push(99))
console.log("push 100", stack.push(100))
console.log("push 111", stack.push(111))
console.log(" print", stack.print_stack())
console.log("pop 111 ", stack.pop())
console.log(" print", stack.print_stack())
console.log("pop 100 ", stack.pop())
console.log(" print", stack.print_stack())
console.log("pop 99 ", stack.pop())
console.log(" print", stack.print_stack())

console.log("top 100", stack.top, stack.bottom)
console.log("size", stack.size())