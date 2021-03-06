class LinkedList {
    constructor(value) {

        this.head = new Node(value)
        // this.previous = null;
        this.length = 1;
        this.tail = this.head
    }

    // it will append node at the end of the list
    _append(value) {
        let newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    // appends node at the front of the list
    _prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    // will return the node at the index
    _traversToIndex(index) {
        if (index >= this.length || index == -1) {
            console.log("cant access index " + index)
            return null
        }
        let counter = 0;

        let nodeToReturn = this.head;
        while (counter != index && nodeToReturn != null) {
            console.log(nodeToReturn.data, counter)
            nodeToReturn = nodeToReturn.next;
            counter++;
        }

        return nodeToReturn
    }

    _remove(index) {
        let removeNode = this._traversToIndex(index - 1);
        let refNextNode = removeNode.next;
        removeNode.next = refNextNode.next;
        this.length--;
        return this;
    }

    _insertRandomItems(list, n) {
        for (let i = 0; i < n; i++) {
            list._append(i)
        }
    }

    _insertRandomCharsPrepend(list, n) {
        for (let i = 97; i < n; i++) {
            let char = String.fromCharCode(i);
            list._prepend(char)
        }
    }

    _insertAtIndex(value, index) {
        if (index >= this.length) {
            console.log("cant add at the index will be adding it to the end.")
            return this._append(value)
        }
        let newNode = new Node(value)
        let nodeAtIndex = this._traversToIndex(index - 1)
        let pointToNodeAtIndex = nodeAtIndex.next;
        nodeAtIndex.next = newNode;
        newNode.next = pointToNodeAtIndex;
        this.length++;
        return this.head;


    }
    size() {
        return this.length;
    }

    _printList() {
        let items = [];
        let cur = this.head;

        while (cur != null) {
            items.push(cur.data);
            cur = cur.next;
        }
        return items;
    }

    _reverseLinkList() {
        if (!this.head.next) {
            return this.head;
        }

        let first = this.head;
        let second = first.next;
        this.tail = this.head;
        while (second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;

        return this;
    }

}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    __str__() {
        return "" + this.data + ""
    }

}
let linklist = new LinkedList(20);
let list2 = new LinkedList("c");
linklist._insertRandomItems(linklist, 10)
linklist._insertRandomCharsPrepend(list2, 120)
console.log("node at 5", linklist._traversToIndex(6))
console.log("node at 5", list2._traversToIndex(6))
console.log("the size", linklist._printList())
console.log("the size", linklist._printList())
console.log(linklist._reverseLinkList())
