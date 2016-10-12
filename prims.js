var GraphNode = {}

GraphNode.getIndex = function(n,x,y){
  return y * n + x;
}

GraphNode.getX = function(l,n){
  return l % n;
}

GraphNode.getY = function(l,n){
  return (l - (l % n)) / n
}


function edge(node, weight){
  return [node, weight];
}

function randomWeight(){
  var n = Math.floor(Math.random() * 10) + 1;
}

// adjanceny matrix
var list = {};
var size = 4;

var n = size * size;
for(var i = 0; i < n; i++){
  list[i] = {}
}

for(var y = 0; y < size; y++){
  for(var x = 0; x < size; x++){
    var current = GraphNode.getIndex(size, x, y);
    
    list[current] = {};

    if(y > 0){
      var top = GraphNode.getIndex(size, x, y-1);
      list[current][top] = 1;
      list[top][current] = 1;
    }

    if(x > 0){
      var left = GraphNode.getIndex(size, x-1, y);
      list[current][left] = 1;
      list[left][current] = 1;
    }

    if(x < size -1){
      var right = GraphNode.getIndex(size, x+1, y);
      list[current][right] = 1;
      list[right][current] = 1;
    }

    if(y < size - 1){
      var bottom = GraphNode.getIndex(size, x, y+1);
      list[current][bottom] = 1;
      list[bottom][current] = 1;
    }
  }
}


console.log(list);

