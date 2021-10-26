class DoublyLinkedList {
    constructor(value) {

        this.head = new Node(value)
        // this.previous = null;
        this.length = 1;
        this.tail = this.head
    }

    // it will append node at the end of the list
    _append(value) {
        let newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    // appends node at the front of the list
    _prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode
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

        if (nodeAtIndex) {
            let pointToNodeAtIndex = nodeAtIndex.next;
            nodeAtIndex.next = newNode;
            newNode.prev = nodeAtIndex
            newNode.next = pointToNodeAtIndex;
            pointToNodeAtIndex.prev = newNode;
            this.length++;
            return this.head;
        }

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
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }

    __str__() {
        return "" + this.data + ""
    }

}

let list = new DoublyLinkedList(99);

console.log(list._append(100))
console.log(list._prepend(666))
console.log(list._printList())