// Todo ======= For  Create Node

class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = null;
        this.rightNode = null;
    }
}


//! =========== Main BST Function ==========
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    //* ======== For EveryThing i Have to SearchNode That's Why Make A Function.
    searchNode(currentNode, data) {
        let parentNode;
        while (currentNode.data != data) {
            parentNode = currentNode;
            if (currentNode.leftNode != null && currentNode.data > data) {
                currentNode = currentNode.leftNode;
            } else if (currentNode.rightNode != null && currentNode.data < data) {
                currentNode = currentNode.rightNode;
            } else {
                currentNode = -1;
                parentNode = -1;
                break;
            }
        }
        return [parentNode, currentNode];
    }


    //Todo ============================ Insert A Node In BST
    insert(node) {
        if (this.root == null) {
            this.root = node;
            return this.root;
        }
        let currentNode = this.root;

        while (currentNode != null) {
            if (currentNode.data > node.data) {
                if (currentNode.leftNode == null) {
                    currentNode.leftNode = node;
                    break;
                }
                currentNode = currentNode.leftNode;
            } else {
                if (currentNode.rightNode == null) {
                    currentNode.rightNode = node;
                    break;
                } else {
                    currentNode = currentNode.rightNode;
                }
            }
        }
        return this.root;
    }





    //========================== Delete Node In BST
    deleteNode(node) { //
        let data = node.data;

        // Current Node --- Which Node I Want to Remove
        // Parent Node ---- Remover Node Parent

        let currentNode = this.root;
        let parentNode;
        [parentNode, currentNode] = this.searchNode(currentNode, data);
        console.log(parentNode, currentNode);
        //* seach a leaf Node
        if (currentNode.leftNode == null && currentNode.rightNode == null) {
            console.log("Leaf Node detected");
            this.leafNodeDelete(data);
        }
        //* Have both Data
        else if (currentNode.leftNode != null && currentNode.rightNode != null) {
            console.log("Both Node detected");
            this.haveBothData(currentNode);
        }

        //* one Node deleted
        else if (currentNode.leftNode != null || currentNode.rightNode != null) {
            console.log("One Node detected");
            this.oneNodeDeleted(currentNode, parentNode);
        }
        else {
            console.log("Something Wrong");
        }
    }



    // ─── CASE ONE ───────────────────────────────────────────────────────────────────
    // Have Both Data
    haveBothData(currentNode) {
        console.log("CurrentNode Data " + currentNode.data);
        let smallestNode = this.searchSmallestNode(currentNode);
        console.log("Smallest Data " + smallestNode.data);

        currentNode.data = smallestNode.data;
        console.log(currentNode);
    }

    searchSmallestNode(node) {
        let smallestNode = node.rightNode;
        let smallestNodeParent = node;
        while (smallestNode.leftNode != null) {
            smallestNodeParent = smallestNode;
            smallestNode = smallestNode.leftNode;
        }
        if (smallestNodeParent.leftNode.data == smallestNode.data) {
            smallestNodeParent.leftNode = null;
        }
        return smallestNode;
    }


    //
    // ─── CASE TWO ───────────────────────────────────────────────────────────────────
    // Leaf Node Deleted
    leafNodeDelete(data) {
        let currentNode = this.root;
        let parentNode;

        [parentNode, currentNode] = this.searchNode(currentNode, data);
        console.log(parentNode);
        if (parentNode.leftNode != null && parentNode.leftNode.data == data) {
            parentNode.leftNode = null;
        } else {
            parentNode.rightNode = null;
        }


        console.log(this.root.rightNode);
    }

    //
    // ─── CASE THREE ──────────────────────────────────────────────────
    // He Has only One node (left or right Node)
    oneNodeDeleted(currentNode, parentNode) {
        if (parentNode.data < currentNode.data) {
            if (currentNode.rightNode != null) {
                parentNode.rightNode = currentNode.rightNode;
                currentNode.rightNode = null;
            } else if (currentNode.leftNode != null) {
                parentNode.rightNode = currentNode.leftNode;
                currentNode.leftNode = null;
            }
        } else if (parentNode.data > currentNode.data) {
            if (currentNode.rightNode != null) {
                parentNode.leftNode = currentNode.rightNode;
                currentNode.rightNode = null;
            } else if (currentNode.leftNode != null) {
                parentNode.leftNode = currentNode.leftNode;
                currentNode.rightNode = null;
            }
        }
        console.log(this.root.rightNode);
       // console.log(this.root.leftNode);
    }


}






let fifty = new Node(50);
let sixty = new Node(60);
let sixtyFive = new Node(65);
let forty = new Node(40);
let fortyFive = new Node(45);
let thirty = new Node(30);
let thirtyFive = new Node(35);
let thirtySix = new Node(36);
let twentyFive = new Node(25);
let twenty = new Node(20);
let fiftyFive = new Node(55);
let seventyFive = new Node(75);
let seventy = new Node(70);
let seventyFour = new Node(74);
let eightyFive = new Node(85);
let eighty = new Node(80);
let binaryTree = new BinarySearchTree();
binaryTree.insert(fifty);
binaryTree.insert(forty);
binaryTree.insert(sixty);
binaryTree.insert(thirty);
binaryTree.insert(twenty)
binaryTree.insert(thirtyFive);
binaryTree.insert(seventyFive);
binaryTree.insert(eightyFive);
binaryTree.insert(seventy);
binaryTree.insert(eighty);
binaryTree.insert(fortyFive);
binaryTree.insert(fiftyFive);
binaryTree.insert(seventyFour);
binaryTree.insert(sixtyFive);
// binaryTree.deleteNode(eightyFive);
// binaryTree.deleteNode(eighty);
binaryTree.deleteNode(sixty);
// console.log(binaryTree.searchNode(binaryTree.root, 100));





 //! ============================= Search A Node In BST
    // searchANode(node) {
    //     let data = node.data;
    //     let currentNode = this.root;
    //     while (currentNode != null) {
    //         if (currentNode.data == data) return true;
    //         if (currentNode.data > data) {
    //             currentNode = currentNode.leftNode;
    //         } else {
    //             currentNode = currentNode.rightNode;
    //         }
    //     }
    //     return false;
    //     //Time Complexity 0(log 2 n) [n= BST length]
    // }