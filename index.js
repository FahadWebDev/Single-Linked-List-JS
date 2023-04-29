console.log('----- Start of Project -----');

function Node(nodeValue = null, nodeNext = null) {
  let value = nodeValue;
  let next = nodeNext;
  return { value, next };
}

function LinkedList() {
  let head = null;
  let length = 0;

  const getLength = () => length;

  const isEmpty = () => length === 0;

  const startNode = () => (length !== 0 ? head.value : null);

  const addNodeOnStart = value => {
    const node = new Node();
    node.value = value;
    if (length !== 0) {
      node.next = head;
    }
    head = node;
    length++;
    return node.value;
  };

  const addNodeOnEnd = value => {
    const node = new Node(value);
    if (length > 0) {
      let prev = head
      while (prev.next) {
        prev = prev.next
      }
      prev.next = node
    }
    else {
      head = node
    }
    length++;
    return node.value;
  };

  const addNodeOnIndex = (value, index) => {
    if (index < 0 && index > length) {
      return "Invalid Index";
    }
    else if (index === 0) {
      addNodeOnStart(value)
    }
    else if (index === length) {
      addNodeOnEnd(value)
    }
    else {
      let prev = head
      let current = 0
      while (current < index - 1) {
        current++
        prev = prev.next
      }
      const node = new Node(value)
      node.next = prev.next
      prev.next = node
      length++
      return node.value
    }
  }

  const deleteFromIndex = index => {
    if (length === 0) {
      return "List is empty"
    }
    else if (length === 1) {
      head = null
      length--
    }
    else if (index > length - 1) {
      return "Invalid Index"
    }
    else {
      let prev = head
      let current = 0
      while (current < index - 1) {
        prev = prev.next
        current++
      }
      const removed = prev.next
      prev.next = removed.next || null
      length--
      return removed.value
    }
  }

  const searchByValue = value => {
    let current = head
    while (current) {
      if (current.value === value) {
        return current
      }
      current = current.next
    }
    return "Not Found"
  }

  const printList = () => {
    let current = head
    let list = []
    while (current) {
      list.push(current.value)
      current = current.next
    }
    return list
  }

  const reverseList = () => {
    let current = head
    let prev = null
    let next = null

    while (current.next) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    };
    current.next = prev
    head = current
    return "Reversed Successfully";
  }

  return { getLength, isEmpty, startNode, addNodeOnStart, addNodeOnEnd, printList, addNodeOnIndex, deleteFromIndex, searchByValue, reverseList };

}

const linkedList = new LinkedList();

console.log('Link List Length', linkedList.getLength());
console.log('Is Link List Empty?', linkedList.isEmpty());
console.log('Link List Start Node', linkedList.startNode());
console.log('Add Node On Start', linkedList.addNodeOnStart(1));
console.log('Add Node On Start', linkedList.addNodeOnStart(2));
console.log('Add Node On End', linkedList.addNodeOnEnd(3));
console.log('Print List', linkedList.printList());
console.log('Add Node On Index', linkedList.addNodeOnIndex(4, 2));
console.log('Is Link List Empty?', linkedList.isEmpty());
console.log('Link List Length', linkedList.getLength());
console.log('Link List Start Node', linkedList.startNode());
console.log('Print List', linkedList.printList());
console.log('Delete From List With Index', linkedList.deleteFromIndex(3));
console.log('Print List', linkedList.printList());
console.log('Search By Value', linkedList.searchByValue(5));
console.log('Reversed List', linkedList.reverseList())
console.log('Print List', linkedList.printList());

