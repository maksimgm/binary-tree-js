function BinTree(){
  this.root = null;
}

function Node(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

// check to see if there is a root, 
// if no root, set root= to newNode(val)

BinTree.prototype.insertIteratively = function(value){
  if(typeof value !== "number" || isNaN(value))return "Please insert a number";
  if (!this.root) {
    this.root = new Node(value);
    return;
  }
  var parent;
  var curNode = this.root;
  while(curNode){
    parent = curNode;
  
    if(curNode.value === value){
      return "error";
    }
    if(curNode.value>value){
      curNode = curNode.left;
    }else{
      curNode = curNode.right;
    }
  }

  if(parent.value > value){
    parent.left = new Node(value);
    return this;

  }else{
    parent.right = new Node(value);
    return this;
  }
};


BinTree.prototype.insertRecursively = function(value,current){
  if(typeof value !== "number"|| isNaN(value))return "Please insert a number";
  if(!this.root){
    this.root = new Node(value);
    return;
  }
  var curNode = current || this.root;
  var found = false;

  if(!found){
    if(curNode.value===value){
      return "error";
    }if(curNode.value>value){
      if(curNode.left===null){
        curNode.left = new Node(value);
        found = true;
      }else{
        return this.insertRecursively(value,curNode.left);
      }
    }if(curNode.value<value){
      if(curNode.right===null){
        curNode.right = new Node(value);
        found = true;  
      }else{
        return this.insertRecursively(value,curNode.right);
      }
    }
  }
  return this;
};

BinTree.prototype.containsIteratively = function(value){
  if(typeof value !== "number" || isNaN(value))return undefined;
  if(value === this.root.value)return true;
  
  var curNode = this.root;
  while(curNode){
    if(curNode.value>value){
      curNode = curNode.left;
    }else if(curNode.value<value){
      curNode = curNode.right;
    }else if(curNode.value===value) {
      return true;

    }
  }
   return "Value not found. Please try again!";
};

BinTree.prototype.containsRecursively = function(value,current){
  if (typeof value !== "number" || isNaN(value))return undefined;
  if(value === this.root)return true;

  var curNode = this.root;
  if(curNode){
    if(curNode.value>value){
      curNode = curNode.left;
    }

    if(curNode.value<value){
      curNode = curNode.right;
    }
  }

};
// finding a node
// define parent, currentNode, and found=false
// while loop until current is null !found
// two conditions, determining which directions to go to, left or right,
// setting node to be equal to right or left
// else, change found --> true
// if cur.val < parent.cal, parent.left = null


// implement insert recursively 

// remove a node...
// STEPS...
// 1.Find node to remove
// 2.Find its parent and tell the parent that the node you are trying to remvoe = null



module.exports = {
  BinTree: BinTree,
  Node: Node
};