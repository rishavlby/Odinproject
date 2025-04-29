
class Node {   
    constructor(data) {

        this.data = data;
        this.left = null;
        this.right = null;       
    }
}

function buildTree(array){

    const newArray = array.slice().sort((a, b) => a - b);
   // const newArray = array.toSorted();
    console.log(newArray);


    function sortedBST(arr, start, end){

        if (start>end) return null;
        const mid = Math.floor((start+end)/2)
        const root = new Node(arr[mid]);
        root.left = sortedBST(arr,start,mid-1);
        root.right = sortedBST(arr, mid+1,end);
        return root;

    }
    return sortedBST(newArray, 0, newArray.length - 1);
}
    
    function prettyPrint  (node, prefix = "", isLeft = true)  {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };


class tree {

       constructor(array) {
        this.root = buildTree(array)     
    }

    insert(data)
    {
      var newNode = new Node(data);
      // if root is empty, then this is the new root
      if(this.root === null)
           this.root = newNode;
      else 
      this._insertNewnode(this.root, newNode);
    }
  
        _insertNewnode(node, newNode){
        // to start with left tree, in case data is less than the node
        if(newNode.data<node.data)
        {
            if(node.left === null) 
                node.left = newNode;
            else 
            this._insertNewnode(node.left, newNode);
        }
        // in case data is less than the node, do the right
        else if(newNode.data>node.data)
        {
            if(node.right === null) 
                node.right = newNode;
            else 
            this._insertNewnode(node.right, newNode);
        }
  
    }   
  
        removeNode(data){

            this.root = this._deleteItem(this.root, data)
        }

_deleteItem(node,key){

    if(node === null)
        return null;
else if(key < node.data)
{
    node.left = this._deleteItem(node.left, key);
    return node;
}
else if(key > node.data)
{
    node.right = this._deleteItem(node.right, key);
    return node;
}

else {
    // when node with no children
if(node.left === null && node.right === null){
    node = null;
    return node;
}
// when deleting node with one children
if(node.left === null){
    node = node.right;
    return node;
}
else if (node.right === null){
    node = node.left;
    return node;
}

//when deleting nodes with two children
var aux = this.findMinNode(node.right);
node.data = aux.data;

node.right = this._deleteItem(node.right, aux.data);
return node;
}
}
findMinNode(node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}

find(node, data){

    /*
    1. if tree is empty return null
    2. if data is less than root, move left
    3. if data is more than root, move right
    4. if data matches with data, return node
    */

    if(node === null)
        return null;

    else if(data<node.data){
        return this.find(node.left, data)
    }

    else if(data>node.data){
        return this.find(node.right, data)
    }

    else 
    return node;
}

levelOrderRec(root, level, res){
    // if node is null, then return
        if(root === null) return;
    // adding new level
        if(res.length <= level) res.push([])
    // added data from current node
    res[level].push(root.data);
    
    this.levelOrderRec(root.left, level+1, res);
    this.levelOrderRec(root.right, level+1, res);
    
    }
    
    levelOrder(root){
    
        const res = [];
        this.levelOrderRec(root,0,res);
        return res;
    }

    // left-root-right
    inorder(root){
    if(root === null) return;
    this.inorder(root.left);
    console.log(root.data);
    this.inorder(root.right);
    }

    //root-left-right
    preOrder(root){
        if(root === null) return;
        console.log(root.data);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }
    
    //left-right-root
    postOrder(root){
        if(root === null)return;
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.data);
    }
    // Height of node to leaf
    heightOfTree(root){
    
        if(root === null) return 0;
        const leftTreeHeight = this.heightOfTree(root.left);
        const rightTreeHeight = this.heightOfTree(root.right);

        return Math.max(leftTreeHeight, rightTreeHeight)+1;
    }
    
    // depth of node to root
    depthOfTree(root){
    
        if(root === null) return 0;
        const leftDepthOfTree = this.depthOfTree(root.left);
        const rightDepthOfTree = this.depthOfTree(root.right);
    
        return Math.max(leftDepthOfTree, rightDepthOfTree)+1;
    }

    isBalanced(root){
        
        if(root === null) return true;

        function heightOfTree(node){
            console.log(node); // Log to inspect the node
            if(node === null) return 0;
            const leftHeight = heightOfTree(node.left);
            const rightHeight = heightOfTree(node.right);
    
            
        if (leftHeight === -1 || rightHeight === -1) return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) return -1;
            return Math.max(leftHeight , rightHeight)+1;
        }
        
        return heightOfTree(root) !== -1;
    
    }

reBalance(root){

function storeInorder(node, nodes) {
    if (node === null)return;

    storeInorder(node.left, nodes);
    nodes.push(node.data);  
    storeInorder(node.right, nodes);
}


function buildBalancedTree(nodes, start, end) {
    
    if (start > end)return null;
    
    let mid = Math.floor((start + end) / 2);
    let root = new Node(nodes[mid]);
    
    root.left = buildBalancedTree(nodes, start, mid - 1);
    root.right = buildBalancedTree(nodes, mid + 1, end);
    return root;
}


    let nodes = [];
    storeInorder(root, nodes);

    return buildBalancedTree(nodes, 0, nodes.length - 1);
   

 }

}



     
// Script here
function getRandomArray(size, max) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * max));
  }
  
  function printTraversal(title, data) {
    console.log(`${title}:`);
    console.log(data);
    //join(', ')
  }

  const bst = new tree([7, 2, 9, 1, 5, 10]);
  bst.insert(15);
  bst.insert(150);
 bst.insert(160);
 bst.insert(170);
 bst.insert(180);
  bst.insert(190);
 bst.removeNode(9)
  prettyPrint(bst.root);

bst.find(150);


// Step 1: Create tree from random numbers
 const initialArray = getRandomArray(15, 100);
console.log("Initial Array:", initialArray);

// const bst = new tree([7, 2, 9, 1, 5, 10]);


// Step 2: Confirm tree is balanced
console.log("Is balanced (initial)?", bst.isBalanced(bst.root));

// // Step 3: Print traversals
printTraversal("Level Order", bst.levelOrder(bst.root));
printTraversal("Preorder", bst.preOrder(bst.root));
 printTraversal("Postorder", bst.postOrder(bst.root));
printTraversal("Inorder", bst.inorder(bst.root));

// Step 4: Unbalance tree by adding numbers > 100
 bst.insert(250);
 bst.insert(60);
 bst.insert(70);
 bst.insert(80);
 bst.insert(90);

// Step 5: Confirm tree is unbalanced
 console.log("Is balanced (after unbalancing)?", bst.isBalanced(bst.root));

// Step 6: Rebalance the tree
bst.reBalance(bst.root);

// Step 7: Confirm tree is balanced again
 console.log("Is balanced (after rebalancing)?", bst.isBalanced(bst.root));

// Step 8: Print traversals again
printTraversal("Level Order (Rebalanced)", bst.levelOrder(bst.root));
 printTraversal("Preorder (Rebalanced)", bst.preOrder(bst.root));
 printTraversal("Postorder (Rebalanced)", bst.postOrder(bst.root));
 printTraversal("Inorder (Rebalanced)", bst.inorder(bst.root));    


