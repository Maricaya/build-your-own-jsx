function h(nodeName, attributes, ...args) {
  let children = args.length ? [].concat(...args) : null;

  return { nodeName, attributes, children };
}

function render(vnode) {
  // string
  if (vnode.split) {
    return document.createTextNode(vnode);
  }

  let n = document.createElement(vnode.nodeName);

  let a = vnode.attributes || {}

  Object.keys

}