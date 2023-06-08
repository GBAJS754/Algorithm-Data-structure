//bfs 너비 우선 탐색 (형제노드 먼저)

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

    BFS(){
        let saveData = [];
        let queue = [];
        let curr =this.root;

        queue.push(curr) //가장 최상위 노드 먼저 시작

        while(queue.length){ 
            //queue를 그냥 사용하지 않는 이유 : 빈 배열은 true값을 가지기 때문에 false값을 가질수 없어서 무한루프에 빠짐
            curr = queue.shift(); //지우는 동시에 변수에 저장
            saveData.push(curr);
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
        return saveData;
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS())