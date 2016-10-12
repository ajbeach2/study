// https://jsfiddle.net/30Lc271e/
// https://jsfiddle.net/30Lc271e/1/

function Node(val){
    this.val = val
    this.left = this.right = null
}

var lowestCommonAncestor = function(root, p, q) {
    if(root == null){
        return null;
    }
    
    if(root == p || root == q){
        return root;
    }
    var left = lowestCommonAncestor(root.left,  p, q);
    var right = lowestCommonAncestor(root.right, p ,q);
    
    if(left && right){
        return root;
    }
    
    return left ? left : right;
    
};



function maxDepth(root, depth){
  if(root == null){
    return depth
  }
    
  var left = maxDepth(root.right, value, depth + 1)
  var right =  maxDepth(root.left, value, depth + 1)
  return math.Max(left,right)
}

function isBalanced(root,depth){
  if(root == null){
    return true
  }
}

function isBalanced(root){
  if(!root){
    return 0;
  }

  var left = isBalanced(root.left)

  if(left == -1){
    return -1
  }

  var right = isBalanced(root.right)

  if(right == -1){
    return -1
  }

  if(Math.abs(left - right) > 1){
    return -1
  }

  return Math.max(left, right) + 1
}


function insertNode(root, value){
  if(!root){
    return new Node(value)
  }

  if(value < root.value){
    root.left = insertNode(root.left, value)
  }else {
    root.right = insertNode(root.right, value)
  }
  return root
}

function depth(root, value, h){
  if(root == null){
    return -1;
  }

  if(root.val = value){
    return d
  }
  return Math.max(depth(root.left, value, d + 1), depth(root.right, value, d + 1))
}

var n = new Node(40)


