class Node
{
    constructor(item)
    {
        this.data =item;
        this.left=this.right=null;
    }
}

let root;
function maxDepth(node) {
    if (node == null)
    return 0;
    else 
    {
        let ldepth = maxDepth(node.left)
        let rdepth = maxDepth(node.right)

        if (ldepth > rdepth)
            return (ldepth + 1);
        else 
            return (rdepth + 1);
    }
}
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Height of tree:" + maxDepth(root));