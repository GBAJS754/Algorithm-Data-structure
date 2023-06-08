//dfs 깊이 우선 탐색
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
    // //전위 탐색(루트 방문 후 왼쪽 => 오른쪽 순)
    // preOrder(){
    //     let saveData = [];
    //     let curr = this.root;

    //     function helper(curr){
    //         saveData.push(curr.value);
    //         if(curr.left) helper(curr.left);
    //         if(curr.right) helper(curr.right);
    //     }
    //     helper(curr);
    //     return saveData;
    // }
    // //후위 탐색
    // postOrder(){
    //     let saveData = [];
    //     let curr = this.root;

    //     function helper(curr){
    //         if(curr.left) helper(curr.left);
    //         if(curr.right) helper(curr.right);
    //         saveData.push(curr.value);
    //     }

    //     helper(curr);
    //     return saveData;
    // }
    // //중위 탐색
    // inOrder(){
    //     let saveData = [];
    //     let curr = this.root;

    //     function helper(curr){
    //         if(curr.left) helper(curr.left); //curr.left && helper(curr.left) 이런것도 가능하구나.. 
    //         saveData.push(curr.value);
    //         if(curr.right) helper(curr.right);
    //     }

    //     helper(curr);
    //     return saveData;
    // }


    preOrder(){//전위 탐색(부모 => 왼쪽=> 오른쪽)
        const saveData =[];
        const stack =[];
        let curr = this.root;
        
        stack.push(curr);

        while(stack.length){ //0일떄 멈춤
            curr = stack.pop(); //삭제후 변수 저장
            saveData.push(curr);
            if(curr.right) stack.push(curr.right)
            if(curr.left) stack.push(curr.left)
        }
        return saveData;
    }

    postOrder(){ //후위 탐색 (왼쪽 => 오른쪽 => 부모)
        const saveData =[];
        const stack =[];
        let curr = this.root;
        
        stack.push(curr);

        while(stack.length){ 
            curr = stack.pop();
            saveData.push(curr);
            if(curr.left) stack.push(curr.left)
            if(curr.right) stack.push(curr.right)
        }
        return saveData.reverse();
    }   

    inOrder(){ //중위 탐색 (왼쪽 => 부모 => 오른쪽)
        const saveData =[];
        const stack =[];
        let curr = this.root;

        while(stack.length){  
            if(curr){
                stack.push(curr);
                curr = curr.left; //A=>B //B=>D //D=>NULL
            }else{
                curr = stack.pop();
                saveData.push(curr); //E=>NULL
                curr = curr.right; //D=>NULL
            }
        }
        return saveData.reverse();
    }   
}

const tree = new BinarySearchTree();
tree.insert(20)
tree.insert(22)
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(4)
tree.insert(8)

console.log(tree.inOrder())