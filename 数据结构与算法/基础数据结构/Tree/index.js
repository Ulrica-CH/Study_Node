class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }
  // 前序
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root);
  }
  preOrderTraverseNode(node) {
    if (!node) {
      return;
    }
    console.log(node.val);
    this.preOrderTraverseNode(node.left);
    this.preOrderTraverseNode(node.right);
  }
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root);
  }
  inOrderTraverseNode(node) {
    if (!node) {
      return;
    }
    this.inOrderTraverseNode(node.left);
    console.log(node.val);
    this.inOrderTraverseNode(node.right);
  }
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root);
  }
  postOrderTraverseNode(node) {
    if (!node) {
      return;
    }
    this.postOrderTraverseNode(node.left);
    this.postOrderTraverseNode(node.right);
    console.log(node.val);
  }
  insert(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      this.insertNode(this.root, value);
    }
  }
  insertNode(node, value) {
    /**
     * 比较 value
     * 大于 root 往右
     * 小于 root 往左
     * */
    if (value > node.val) {
      if (node.right) {
        this.insertNode(node.right, value);
      } else {
        node.right = new TreeNode(value);
      }
    } else {
      if (node.left) {
        this.insertNode(node.left, value);
      } else {
        node.left = new TreeNode(value);
      }
    }
  }
  getMin() {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current ? current.val : null;
  }
  search(value) {
    /**
     * 还是比较大小
     */
    let current = this.root;

    while (current) {
      if (current.val === value) return current;
      else if (current.val > value) current = current.left;
      else current = current.right;
    }
    return false;
  }

  /**
   * 先找到父节点
   * 判断是左子树还是右子树
   * 如果是右子节点，父节点.right = null
   * 如果是左子节点，父节点.left = null
   * 删除子节点 后代要挂载到父节点
   *
   *  */
  remove(value) {
    // const current = this.searchNode(value);
    // if (!current) return false;

    // let replaceNode = null;
    // // 叶子结点
    // if (current.left === null && current.right === null) replaceNode = null;
    // // 只有一个子节点 为左节点
    // else if (current.right === null) replaceNode = current.left;
    // // 只有一个子节点 为右节点
    // else if (current.left === null) replaceNode = current.right;
    // // 两个子节点
    // else replaceNode = this.successorNode(current);

    // if (current === this.root) this.root = replaceNode;
    // else if (current.isLeft) current.parent.left = replaceNode;
    // else current.parent.right = replaceNode;
    // return true;
  }
}
const tree = new BSTree();
tree.insert(5);
tree.insert(10);
tree.insert(3);
tree.insert(1);
tree.insert(2);
tree.insert(11);
tree.insert(7);

console.log(tree);
// console.log(tree.search(10));
// console.log(tree.getMin());
// 531210711 前序
// tree.preOrderTraverse()

// 123571011 🀄️序
// tree.inOrderTraverse();

// 213711105 后序
tree.postOrderTraverse();
