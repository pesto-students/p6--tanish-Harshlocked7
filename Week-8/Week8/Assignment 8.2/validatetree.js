class node
{
    constructor(item)
    {
        this.data=item;
        this.left=this.right=null;
    }
}

let root;

function isBST()
{
    return isBSTUtil(root, Number.MIN_VALUE,
                           Number.MAX_VALUE)
}

function isBSTUtil(node, min, max)
{
    if (node == null)
    return true;
    if (node.data < min || node.data > max)
    return false;
    return (isBSTUtil(node.left, min, node.data-1)  
            && isBSTUtil(node.right, node.data+1, max));
}

root = new node(4);
root.left = new node(2);
root.right = new node(5);
root.left.left = new node(1);
root.left.right = new node(3);

if (isBST())
    console.log("Is BST<br>");
else 
    console.log("Is not BST<br>")
