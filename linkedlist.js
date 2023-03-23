const Node = () => {
  let next = null,
      val = null;
  return {val, next};
}

const LinkedList = () => {
  let headNode = null,
      length = 0;

  const isEmpty = () => length === 0;
  const isValidIndex = index => {
    return (index >= 0 && index < length) ||
           (index < 0 && length + index >= 0)
  }

  const append = val => {
    const newNode = Node();
    newNode.val = val;
    if (isEmpty()) {
        headNode = newNode;
        length++;
        return
    }
    let currentNode = headNode;
    while (currentNode.next !== null) {
        currentNode = currentNode.next; 
    }
    currentNode.next = newNode;
    length++;
  }

  const prepend = val => {
    const newNode = Node();
    newNode.val = val;
    newNode.next = headNode;
    headNode = newNode;
    length++;
  }

  const insertAt = (val, index) => {
    if (!isValidIndex(index)) return;
    let currentNode = headNode,
        previousNode = null;
    if (index < 0) index += length;
    while (index > 0) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      index--;
    }
    const newNode = Node();
    newNode.val = val;
    newNode.next = currentNode;
    if (previousNode === null) {
      headNode = newNode;
    } else {
      previousNode.next = newNode;
    }
    length++;
  }

  const size = () => length;

  const head = () => headNode;

  const tail = () => {
    if (isEmpty()) return null;
    let currentNode = headNode;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  const at = index => {
    if (!isValidIndex(index)) return null;
    let currentNode = headNode;
    if (index < 0) index += length;

    while (index > 0) {
      currentNode = currentNode.next;
      index--;
    }
    return currentNode;
  }

  const pop = () => {
    if (isEmpty()) return null;
    let currentNode = headNode;
        previousNode = null;
    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (previousNode === null) {
      headNode = null;
    } else {
      previousNode.next = null;
    }
    length--;
    return currentNode;
  }

  const removeAt = index => {
    if (!isValidIndex(index)) return null;
    let currentNode = headNode,
        previousNode = null;
    if (index < 0) index += length;
    while (index > 0) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      index--;
    }
    if (previousNode === null) {
      headNode = currentNode.next;
    } else {
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode;
  }

  const contains = val => {
    let currentNode = headNode;
    while (currentNode !== null) {
      if (currentNode.val === val) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  const find = val => {
    let currentNode = headNode;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.val === val) return index;
      currentNode = currentNode.next;
      index++;
    }
    return null;
  }

  const toString = () => {
    let str = ""
    let currentNode = headNode;
    while (currentNode !== null) {
      str += `( ${currentNode.val} ) -> `;
      currentNode = currentNode.next;
    }
    str += "null";
    return str;
  }

  return {
    append,
    prepend,
    insertAt,
    size,
    head,
    tail,
    at,
    pop,
    removeAt,
    contains,
    find,
    toString
  }
}

const ll = LinkedList();
for (let i = 0; i < 10; i++) {
  ll.append(Math.floor(Math.random() * 11));
}
