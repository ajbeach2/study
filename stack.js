function Node (val){
  this.val = val;
  this.next = null;
}

function Stack (){
  this.head = null
}

Stack.prototype = {
  push: function(val){
   var n = new Node(val)
   if(this.head){
    var oldHead = this.head;
    this.head = n;
    n.next = oldHead;
   } else {
    this.head = n;
   }
  },

  peek: function(){
    if(this.head){
      return head.val;
    } else {
      return null;
    }
  },

  pop: function(){
    if(this.head){
      var val = this.head.val;
      this.head = this.head.next;
      return val;
    } else {
      return null;
    }
  },

  empty: function(){
    return !this.peek();
  }
}

function GraphNode(val, adjacents){
  this.found = false;
  this.adjacents = adjacents;
  this.val = val;

}


var graphNodes = [ [1, 6, 8],
  [0, 4, 6, 9],
  [4, 6],
  [4, 5, 8],
  [1, 2, 3, 5, 9],
  [3, 4],
  [0, 1, 2],
  [8, 9],
  [0, 3, 7],
  [1, 4, 7] ]


var nodes = []
for(var i = 0; i < graphNodes.length; i++){
 nodes.push(new GraphNode(i, graphNodes[i]));
}



function dfs(root) {
  root.found = true;
  console.log(root.val);
  var list = root.adjacents;
  for(var i = 0; i < list.length; i++){
    var node = nodes[list[i]];
    if(!node.found){
      dfs(node);
    }
  }
}

dfs(nodes[8])

// 1  procedure DFS(G,v):
// 2      label v as discovered
// 3      for all edges from v to w in G.adjacentEdges(v) do
// 4          if vertex w is not labeled as discovered then
// 5              recursively call DFS(G,w)

