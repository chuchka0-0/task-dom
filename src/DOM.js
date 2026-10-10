export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const element = document.createElement(tag);
        element.textContent = content;
        document.body.appendChild(element);
    }
}

export function generateTree(childrenCount, level) {
    function createNode(depth) {
        const node = document.createElement('div');
        node.classList.add(`item_${depth}`);

        if (depth < level) {
            for (let i = 0; i < childrenCount; i++) {
                node.appendChild(createNode(depth + 1));
            }
        }

        return node;
    }

    return createNode(1);
}

export function replaceNodes() {
    const tree = generateTree(2, 3);

    tree.querySelectorAll('.item_2').forEach((oldNode) => {
        const section = document.createElement('section');
        section.className = oldNode.className;

        while (oldNode.firstChild) {
            section.appendChild(oldNode.firstChild);
        }

        oldNode.replaceWith(section);
    });

    return tree;
}