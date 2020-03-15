function Node (val){
  this.val = val;
  this.next = this.prev = null;
}

function Queue (){
  this.head = null;
  this.tail = null;
  this.count = 0
}

Queue.prototype = {
  pop: function(){
    if(!this.tail){
      return null;
    }
    var toReturn = this.tail.val;
    if(this.head == this.tail){
      this.head = this.tail = null;
      this.count = 0;
    } else {
      var prev = this.tail.prev;
      this.tail = prev;
      this.tail.next = null;
      this.count++;
    }
    return toReturn;
  },

  peek: function(){
    if(this.tail){
      return this.tail.val;
    } else {
      return null;
    }
  },

  empty: function(){
    return !this.peek();
  },

  push: function(val){
    var n = new Node(val);
    if(!this.head && !this.tail){
      this.head = n
      this.tail = n
      return;
    }
      var old = this.head
      n.next = old;
      this.head = n;
      old.prev = n
  },

  print: function(){
    var pointer = this.head
    while(pointer){
      console.log(pointer);
      pointer = pointer.next;
    }
  }
}


function GraphNode(val, adjacents){
  this.distance = Number.MAX_SAFE_INTEGER;
  this.parent = null;
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


function bfs(root){
  var queue = new Queue();
  root.distance = 0;
  queue.push(root);
  while(!queue.empty()){
    var current = queue.pop();
    var list = current.adjacents;
    console.log(current.val);
    for(var i = 0; i < list.length; i++){
      var node = nodes[list[i]];
      if(node.distance == Number.MAX_SAFE_INTEGER){
        node.distance = current.distance + 1;
        node.parent = current;
        queue.push(node);
      }
    }
  }
}

bfs(nodes[0]);

// Breadth-First-Search(Graph, root):
//  2 
//  3     for each node n in Graph:            
//  4         n.distance = INFINITY        
//  5         n.parent = NIL
//  6 
//  7     create empty queue Q      
//  8 
//  9     root.distance = 0
// 10     Q.enqueue(root)                      
// 11 
// 12     while Q is not empty:        
// 13     
// 14         current = Q.dequeue()
// 15     
// 16         for each node n that is adjacent to current:
// 17             if n.distance == INFINITY:
// 18                 n.distance = current.distance + 1
// 19                 n.parent = current
// 20                 Q.enqueue(n)







