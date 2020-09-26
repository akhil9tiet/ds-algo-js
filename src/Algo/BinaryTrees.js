class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		const newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
		} else {
			let currentNode = this.root;
			while (true) {
				if (value < currentNode.value) {
					//left
					if (!currentNode.left) {
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				} else {
					//right
					if (!currentNode.right) {
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
	}
	lookup(value) {
		if (!this.root) {
			return false;
		}
		let currentNode = this.root;

		while (currentNode) {
			if (value < currentNode.value) {
				//left
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				//right
				currentNode = currentNode.right;
			} else {
				return currentNode;
			}
		}
		return false;
	}
	remove(value) {}

	breadthFirstSearch() {
		let currentNode = this.root;

		let list = [];
		const queue = []; //keep track of level we at

		queue.push(currentNode);

		while (queue.length > 0) {
			currentNode = queue.shift();
			list.push(currentNode.value);
			if (currentNode.left) {
				queue.push(currentNode.left);
			}
			if (currentNode.right) {
				queue.push(currentNode.right);
			}
		}
		return list;
	}

	DFSInorder() {
		return traverseInOrder(this.root, []);
	}

	DFSPreorder() {
		return traversePreOrder(this.root, []);
	}

	DFSPostOrder() {
		return traversePostOrder(this.root, []);
	}
}

function traverseInOrder(node, list) {
	if (node.left) {
		traverseInOrder(node.left, list);
	}
	list.push(node.value);
	if (node.right) {
		traverseInOrder(node.right, list);
	}
	return list;
}

function traversePreOrder(node, list) {
	list.push(node.value);
	if (node.left) {
		traversePreOrder(node.left, list);
	}
	if (node.right) {
		traversePreOrder(node.right, list);
	}
	return list;
}

function traversePostOrder(node, list) {
	if (node.left) {
		traversePostOrder(node.left, list);
	}
	if (node.right) {
		traversePostOrder(node.right, list);
	}
	list.push(node.value);
	return list;
}

function traverse(node) {
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);

	console.log(tree);
	return tree;
}

// Write Javascript code!

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

JSON.stringify(traverse(tree.root));
// tree.breadthFirstSearch();
tree.DFSInorder();
