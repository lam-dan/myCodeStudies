class Node {

    constructor(name){
        this.name = name;
        this.children = [];
    }

    addChild(name){
        this.children.push(new Node(name))
    }

    depthFirstSearch(arr){
        arr.push(this.name);
        for(const child in this.children){
            child.depthFirstSearch(arr)
        }
        return arr;
    }
}




