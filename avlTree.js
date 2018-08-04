/*
  AVL Tree
  
  Name you class/function (anything we can call new on) Tree
  
  I would suggest making a Node class as well (it will help _a lot_ with AVL trees) Whereas with BSTs we 
  could get away with most of the logic living in the Tree class, that will be a lot tougher with AVL
  trees dues how the function calls must be recursive in order to get the balancing correct.
  
  Tree must a method called add that takes a value and adds it to the tree and then correctly balances the
  tree. There is only one correct structure for any given order of adding numbers and the unit tests enforce
  that structure.
  
  If you have any questions conceptually about balancing the tree, refer to the class website.
  
  There is a tree visualization engine that should run automatically. Make sure you are calling the properties
  of the Nodes as follows:
  value - integer - the value being store in the tree
  left  - Node    - the subtree containing Node's with values less than the current Node's value
  right - Node    - the subtree containing Node's with values greater than the current Node's value
  
  As always, you can rename describe to xdescribe to prevent the unit tests from running and the visualization
  from displaying

*/
class Node {
  constructor(value, left=null, right=null) {
    this.value  = value;
    this.left = left;
    this.right = right;
  }
}

class Tree() {
  constructor() {
    this.root = null;
  }
  toObject() {
    return this.root;
  }
  add(value) {

  }
}





// unit tests
// do not modify the below code
describe('AVL Tree', function() {
  it('creates a correct tree', () => {
    const nums = [3,7,4,6,5,1,10,2,9,8];
    const tree = new Tree();
    nums.map( num => tree.add(num));
    const objs = tree.toObject();
    render(objs, nums);

    expect(objs.value).toEqual(4);
    
    expect(objs.left.value).toEqual(2);
    
    expect(objs.left.left.value).toEqual(1);
    expect(objs.left.left.left).toBeNull();
    expect(objs.left.left.right).toBeNull();
    
    expect(objs.left.right.value).toEqual(3);
    expect(objs.left.right.left).toBeNull();
    expect(objs.left.right.right).toBeNull();
    
    expect(objs.right.value).toEqual(7);
    
    expect(objs.right.left.value).toEqual(6);
    expect(objs.right.left.right).toBeNull();
    
    expect(objs.right.left.left.value).toEqual(5);
    expect(objs.right.left.left.left).toBeNull();
    expect(objs.right.left.left.right).toBeNull();
    
    expect(objs.right.right.value).toEqual(9);
    
    expect(objs.right.right.left.value).toEqual(8);
    expect(objs.right.right.left.left).toBeNull();
    expect(objs.right.right.left.right).toBeNull();
    
    expect(objs.right.right.right.value).toEqual(10);
    expect(objs.right.right.right.left).toBeNull();
    expect(objs.right.right.right.right).toBeNull();
  });
});