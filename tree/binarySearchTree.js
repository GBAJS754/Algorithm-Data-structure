class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this
        }else{
            let curr = this.root;
            while(true){
                if(value === curr.value) return undefined;
                if(value < curr.value){ 
                    if(curr.left === null){ //비어있을때! 추가
                        curr.left = newNode;
                        return this;
                    }else{ 
                        curr = curr.left; //값이 비어있을때까지 계속 옆으로 옮겨가는 중
                    }
                }else if(value > curr.value){
                    if(curr.right === null){
                        curr.right = newNode;
                        return this;
                    }else{
                        curr = curr.right; 
                    }
                }
            }
        }
    }

    contain(value){
        if(this.root === null) return false;
        let curr = this.root;
        let found = false;
        while(curr && !found){ 
            //curr && !found => true && true 값을 찾지 못하고 curr가 존재한다면 무한루프
            //curr가 없는 상황(null) 예를 들어 leaf라면 curr는 없으므로, 못찾고 루프를 빠져나옴
            if(value < curr.value){
                curr = curr.left
            }else if(value > curr.value){
                curr = curr.right
            }else{
                return true;
            }
        }
        return false;
    }
}

const tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
let a = tree.contain(1);