type LinkedNodeType = IlinkedNodeData | null;

interface ILinkedlist {
  append: (data: any) => void;
  prepend: (data: any) => void;
  insertAfter: (after: any, data: any) => undefined | void;
  find: (data: any) => LinkedNodeType | undefined;
  toArray: () => LinkedNodeType[];
  remove: (data: any) => undefined | void;
}

interface IlinkedNodeData {
  data: any;
  next: LinkedNodeType;
}

class LinkedNode {
  constructor(public data: any, public next: LinkedNodeType = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList implements ILinkedlist {
  head: LinkedNodeType;
  tail: LinkedNodeType;

  constructor() {
    this.head = null; // first elem
    this.tail = null; // last elem
  }

  append(data: any) {
    const node = new LinkedNode(data);

    if (this.tail) {
      this.tail.next = node;
    }

    if (!this.head) {
      this.head = node;
    }

    this.tail = node;
  }

  prepend(data: any) {
    const node = new LinkedNode(data, this.head);

    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
  }

  insertAfter(after: any, data: any) {
    const found = this.find(after);

    if (found) {
      found.next = new LinkedNode(data, found.next);
    } else {
      return undefined;
    }
  }

  find(data: any) {
    if (this.head) {
      let current = this.head as LinkedNodeType;

      while (current) {
        if (current.data === data) {
          return current;
        }

        current = current.next;
      }
    }

    return undefined;
  }

  toArray() {
    const output: IlinkedNodeData[] = [];
    let current = this.head;

    while (current) {
      output.push(current);
      current = current.next;
    }

    return output;
  }

  remove(data: any) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.data === data) {
      this.head = this.head.next;
    }

    let current = this.head;

    while (current?.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    if (this.tail?.data === data) {
      this.tail = current;
    }
  }
}

const list = new LinkedList();

list.append(2);
list.append(4);
list.prepend(1);
list.insertAfter(2, 3);
list.remove(4);

const result = list.toArray();

console.log(result);
