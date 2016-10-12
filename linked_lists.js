
// Single linked lists
function Node (data, next){
  this.data = data;
  this.next = next;
}

var head = [5,4,3,2,1].reduce(function(pre,curr){
  return new Node(curr, pre)
}, null)


function print(head){
  if(head){
    console.log(head.data)
  }
  if(head.next){
    print(head.next)
  }
}

function getMidPoint(head){
  var p1 = head;
  var p2 = head;
  while(p2 != null && p2.next != null){
    p1 = p1.next
    p2 = p2.next.next
  }
  return p1.data
}

function deleteNode(head, d){
  var p1 = head;
  while(p1.next){
    if(p1.next.data == d){
      p1.next = p1.next.next
      return head
    }
    p1 = p1.next
  }
  return p1
}


print(deleteNode(head, 3));
// function midpoint(head){
//   var p1 = head
//   var p2 = head.next

//   while(p2.next){
//     p1 = pt.next
//     p2 = pt.next.next
//   }
//   return p1
// }