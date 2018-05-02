/* 
二叉树的存储结构有两种：顺序存储、链式存储
*/
//顺序存储方式
const tree = [0,1,2,,3,,2,2];//树从上到下，从左到右依次与数组下标对应，对于某个下标i没有值的表示没有该树结点
//链式存储方式
([data,leftChild,rightChild])=>{
    this.data = data||null
    this.leftChild = leftChild||null;
    this.rightChild = rightChild||null;
};

/* 先序遍历二叉树 ,中序只是一次左根右，后序只是右根左，顺序调一下*/
function preOrderTraverse(x, visit) {
    visit(tree[x]);
    if (tree[2 * x + 1]) preOrderTraverse(2 * x + 1, visit);
    if (tree[2 * x + 2]) preOrderTraverse(2 * x + 2, visit);
};
preOrderTraverse(0, function (value) {
    console.log(value);
})

BinaryTree.prototype.preOrderTraverse=function preOrderTraverse(visit){
    visit(this.data);
    if(this.leftChild)preOrderTraverse.call(this.leftChild,visit);
    if(this.rightChild)preOrderTraverse.call(this.leftChild,visit)
}

/* 层序遍历 */

