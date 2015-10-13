function DoublyLinkedList () {
    this._head = new Node("HEAD", null, null);
    this._tail = new Node("TAIL", null, null);

    this._head.next = this._tail;
    this._tail.prev = this._head;

    this.length = 0;
}

DoublyLinkedList.prototype.head = function() {
    return this._head.next.data;
};

DoublyLinkedList.prototype.tail = function() {
    return this._tail.prev.data;
};

DoublyLinkedList.prototype.append = function(data) {
    this.insertAt(this.length,data);

    return this;
};

DoublyLinkedList.prototype.at = function(index) {
    return this._at(index).data;
};

DoublyLinkedList.prototype._at = function(index) {
    if (isNaN(index) || index > this.length) {
        throw new Error('Invalid index.');
    }

    var current = this._head.next,
        counter = 0;

    while (index != counter && counter <= this.length) {
        current = current.next;
        counter++;
    }

    return current;
};

DoublyLinkedList.prototype.insertAt = function(index, data) {
    var position = this._at(index),
        newNode = new Node(data, position.prev, position);

    position.prev = newNode;
    newNode.prev.next = newNode;
    this.length++;

    return this;
};

DoublyLinkedList.prototype.deleteAt = function(index) {
    var position = this._at(index);

    position.next.prev = position.prev;
    position.prev.next = position.next;
    this.length--;

    position.prev = null;
    position.next = null;
    position.data = null;

    return this;
};

DoublyLinkedList.prototype.reverse = function() {
    var currentH = this._head.next,
        currentT = this._tail.prev,
        index = 0, tmp;

    while(index != Math.floor(this.index / 2)){
        tmp = currentH.data;
        currentH.data = currentT.data;
        currentT.data = tmp;

        currentH = currentH.next;
        currentT = currentT.prev;
    }

    return this;
};

DoublyLinkedList.prototype.each = function(func) {
     var current = this._head.next;

    while(current !== null) {
        current.data = func(current.data);
        current = current.next;
    }

    return this;
};

DoublyLinkedList.prototype.indexOf = function(data) {
    var index = 0,
        current = this._head.next;

    while(current !== null && current.data !== data) {
        current = current.next;
        index++;
    }

    return current === null ? -1 : index;
};

function Node(data, prev, next) {
    this.prev = prev;
    this.next = next;
    this.data = data;
}