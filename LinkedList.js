class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        this.tail = null
    }

    size() {
        return this.length;
    }

    insert(index, value) {
 


        if (index > this.length) {
            return "index out of bound"
        }
        let parent = this.traver_to_node(index-1)       
        let node = new Node(value)

        let current = this.head
        if (current == null) {
            this.head = node
            this.tail = this.head
        } else {
            if(index == 1) {
                this.preappend(value)
            } else {
                let hold_index = parent.next
                parent.next = node
                node.next = hold_index

            //     while (current != null && i < index) {
            //         parent = current
            //         current =current.next
            //         i++;
            //     }

            //     if(current) {
            //         node.next = current.next
            //         current.next = node;
            //     } else {
            //         current.next = node
            //     }
            // }
                this.length++;
            }                
            return this.print_list()
        }
    }
    search(value){
        let head = this.head

        while(head){
            if(head.data == value) {
                return true
            }
            head = head.next;
        }
        return false
    }

    append(value) {
        let node = new Node(value)

        if (this.head == null) {
            this.head = node;
            this.tail = this.head
        } else {
            let current;
            current = this.head;
            while (current.next) {
                current = current.next
            }
            this.tail.next = node
            this.tail = node
        }

        this.length++;
    }

    preappend(value) {
        let node = new Node(value)
        if (this.head == null) {
            this.head = node
        } else {
            node.next = this.head;
            this.head = node
        }
        this.length++;
    }

    print_list() {
        let element = []
        if (this.head == null) {
            console.log("None")
            return null
        }
        let current = this.head

        while (current != null) {
            element.push(current.data)
            current = current.next
        }
        return element
    }

    get_index(value){
        let runner = this.head

        let count = 0;
        while(runner){
            if(runner.data == value){
                return count
            }
            runner = runner.next;
            count++;
        }    
        return null
    }

    traver_to_node(index){
        let h = this.head
        let counter = 0;
        while(h != null && counter != index) {
            h = h.next
            counter++;
        }
        return h
    }

    // delete(value){
    //     let current = this.head;
    //     let parent;
    //     while(current && current.data != value){
    //         // if(current.data == value){

    //         // }
    //         parent = current
    //         current = current.next
    //     }

    //     if (current){
    //         parent
    //     }
    //     return this.head
    // }



}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    __str__() {
        console.log(this.data, this.next)
    }
}
let linklist = new LinkedList()
// linklist.head = new Node(2)
linklist.append(4)
console.log("the print", linklist.print_list())
linklist.append(3)
console.log("the print", linklist.print_list())
linklist.append(4)
linklist.insert(3,99999)
console.log("the print", linklist.print_list())
linklist.preappend(1001)
linklist.append(8)
linklist.preappend(100)
console.log("the print", linklist.print_list())
console.log("the size", linklist.size())
console.log("the print", linklist.print_list())
console.log('the search', linklist.search(779879) )
console.log("the index of 100 is ", linklist.get_index(099090))