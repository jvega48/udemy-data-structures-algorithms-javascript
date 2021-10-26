class Stacks {
    constructor() {
        this.stack = []
    }

    peek() {
        if (!this.stack || this.stack.length < 0) {
            return console.error("stack empty");
        }

        return this.stack[this.stack.length - 1];
    }

    pop() {
        if (this.stack.length < 0) {
            return console.error("stack empty");
        }
        return this.stack.pop()
    }

    push(val) {
        if (val == null) {
            return console.error('value no present')
        }
        this.stack.push(val)
        return this.stack;
    }

    print_stack() {
        if (this.length < 0) {
            return console.error("the stack is empty");
        }

        if (this.length == 1) {
            return this.stack[0]
        }

        return this.stack.toString()
    }

    size() {
        return this.length;
    }
}


let stacksArray = new Stacks();

console.log(stacksArray.push(1100))
console.log(stacksArray.push(0534))
console.log(stacksArray.push(43434))
console.log(stacksArray.peek())

console.log(stacksArray.print_stack())