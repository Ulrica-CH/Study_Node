interface iStack<T> {
    push: (element: T) => void;
    pop: () => T | undefined;
    peek: () => T | undefined;
    isEmpty: () => Boolean;
    size: () => number;
  }

  //类型 "ArrayStack<T>" 中缺少属性 "size"，但类型 "iStack<T>" 中需要该属性
  // https://www.cnblogs.com/brucefq/p/16643340.html
export default class ArrayStack<T> implements iStack<T> {
    private data: T[] = [];
    // 入栈
    push(element: T) {
      this.data.push(element);
    }
    // 出栈
    pop(): T | undefined {
      return this.data.pop();
    }
    // 栈顶元素
    peek(): T | undefined {
      return this.data[this.data.length - 1];
    }
    // 是否为空
    isEmpty(): Boolean {
      return this.data.length === 0;
    }
    // 栈元素个数
    // size(): number {
    //   return this.data.length;
    // }
  }
  