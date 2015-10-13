function DoublyLinkedList () {
    this._head = new Node(null, null, null);
    this._tail = new Node(null, null, null);

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
    // if (!index || isNaN(index) || index > this.length) {
    //     throw new Error('Invalid index.');
    // }

    var current = this._head,
        counter = 0;

    while (counter++ != index && counter <= this.length) {
        current = current.next;
    }

    return current;
};

DoublyLinkedList.prototype.insertAt = function(index, data) {
    var position = this._at(index),
        newNode = new Node(data, position, position.next);

    position.next = newNode;
    newNode.next.prev = newNode;
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

};

DoublyLinkedList.prototype.each = function(func) {

};

DoublyLinkedList.prototype.indexOf = function(data) {

};

function Node(data, prev, next) {
    this.prev = prev;
    this.next = next;
    this.data = data;
}