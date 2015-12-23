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
      return 'duplicate!';
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
   return false;
};

BinTree.prototype.containsRecursively = function(value,current) {
  if (typeof value !== "number" || isNaN(value))return undefined;
  if(value === this.root)return true;

  var curNode = current || this.root;
  var found;
  if(!found){
    if(curNode.value>value  && curNode.left){
      return this.containsRecursively(value, curNode.left);
      }else if(curNode.value<value && curNode.right){
        return this.containsRecursively(value, curNode.right);
      }else if(curNode.value===value){
        return true;
      }
       
  }

  if(curNode.right || curNode.left === null){
    return false;
  }
};

BinTree.prototype.findLowest = function(){ 
  var curNode = this.root;
  var found = false;

  while(!found){
    curNode = curNode.left;

    if(curNode.left === null){
      found=true;
      return curNode.value;
    }
  }
};

BinTree.prototype.findHighest = function(){
  var curNode = this.root;
  var found = false;

  while(!found){
    curNode = curNode.right;
    if(curNode.right === null){
      found=true;
      return curNode.value;
    }
  }
};

BinTree.prototype.breadthFirstSearch = function(){
    var root = this.root;
    var queue = [root];
    var values = [];

    while(queue.length>0){
      var val = queue.shift();
      if(!!val.left){
        queue.push(val.left);
      }
      if(!!val.right){
        queue.push(val.right);
      }
      values.push(val.value);
    }
    return values;
};

BinTree.prototype.DFSPreOrder = function(){
  var arr = [];
  var curNode = this.root;
  search(curNode);
  
  function search(node){
    arr.push(node.value);
    if(node.left){
      search(node.left);
    }
    if(node.right){
      search(node.right);
    }
  }
  return arr;
};

BinTree.prototype.DFSInOrder = function(){

  var arr = [];
  var curNode = this.root;
  search(curNode);
  
  function search(node){
    if(node.left){
      search(node.left);
    }
    arr.push(node.value);
    if(node.right){
      search(node.right);
    }
  }
  return arr;
};

BinTree.prototype.DFSPostOrder = function(){

  var arr = [];
  var curNode = this.root;
  search(curNode);
  
  function search(node){
    
    if(node.left){
      search(node.left);
      
    }

    if(node.right){
      search(node.right); 

    }
    arr.push(node.value);
  }
  return arr;
};

BinTree.prototype.size = function(){
  
  return this.DFSPostOrder().length;

};
// remove a node...
// STEPS...
// 1.Find node to remove
// 2.Find its parent and tell the parent that the node you are trying to remvoe = null



module.exports = {
  BinTree: BinTree,
  Node: Node
};