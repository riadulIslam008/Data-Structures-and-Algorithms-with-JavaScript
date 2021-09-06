//
// ─── A BASIC BINARY TREE IMPLEMENTION (it Looks like Map)────────────────────────────────────────────
//

class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = null;
        this.rightNode = null;
    }
}

class BinaryTree {

    leftNodeAdd(parentNode, childNode) {
        parentNode.leftNode = childNode;

    }
    rightNodeAdd(parentNode, childNode) {
        parentNode.rightNode = childNode;
    }
}

let root = new Node(1);
let node2 = new Node(2);
let tree = new BinaryTree();
tree.leftNodeAdd(root, node2);
let node3 = new Node(3);
tree.rightNodeAdd(root, node3);
let node4 = new Node(4);
tree.leftNodeAdd(node2, node4);
let node5 = new Node(5);

tree.rightNodeAdd(node3, node5);
console.log(root);

