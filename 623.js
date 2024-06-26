/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if (!root) return root;

    if (depth == 1) return new TreeNode(val, root, null)

    if (depth === 2) {
    const tempLeft = root.left;
    const tempRight = root.right;
    root.left = new TreeNode(val);
    root.left.left = tempLeft
    root.right = new TreeNode(val);
    root.right.right = tempRight
    return root;
  }
    root.left = addOneRow(root.left, val, depth - 1)
    root.right = addOneRow(root.right, val, depth - 1)
    return root;
};

