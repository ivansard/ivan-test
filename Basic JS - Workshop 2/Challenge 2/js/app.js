function byTagName(node, tagName){
    tagName = tagName.toLowerCase();
    let result = [];
    for(let child of node.children){
        if(tagName === child.nodeName.toLowerCase()){
            result.push(child);
        } 
        if(child.children.length > 0){
            result = result.concat(byTagName(child, tagName));
        }
    }
    return result;
}

const firstDiv = document.getElementById('firstDiv');


const finalResult = byTagName(firstDiv, 'span');
console.log(finalResult);
