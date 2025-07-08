interface iLinkedList<T> {
  append: (element: T) => void;
  search: (element: T) => ListNode<T> | undefined
  
}
class ListNode<T> {
  data: T;
  next: ListNode<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList<T> implements iLinkedList<T> {
  head: ListNode<T> | null;
  constructor() {
    this.head = null;
  }
  append(data:T) {
    if (!this.head) {
      this.head = new ListNode(data);
      return this.head;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new ListNode(data);
  }
  search(data:T) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    // return null;
  }
  delete(data:T) {
    let current = this.head;
    let prev:ListNode<T> | null =  null;
    while(current && current.next && prev) {
      if(current.data === data){
        prev.next = current.next
        return current
      }
      prev = current
      current = current.next
    }
  }
}
const l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
console.log(l.search(2))
console.log(JSON.stringify(l));
console.log(l.delete(2))