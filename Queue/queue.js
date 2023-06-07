// 배열로 구현
class Queue{
    constructor(){
        this.queue = [];
        this.front = 0; //인덱스
        this.rear = 0;  //인덱스
    }

    enqueue(val){ //뒤에서 추가
        this.queue[this.rear++] =  val
    }

    dequeue(){ //앞에서 삭제
        const value = this.queue[this.front]; //바로 반환하면 함수가 종료되기때문에 변수 값 저장
        delete this.queue[this.front]; 
        this.front++
        console.log(this.queue)
        return this.queue[this.front]
    }

    peek(){
        return this.queue[this.front]
    }

    size(){
        return this.rear -  this.front;
    }
}

//연결 리스트로 구현

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    enqueue(newVal){ //뒤에 노드 추가
        let newNode = new Node(newVal);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    dequeue(){ //앞에 노드 삭제
        const vaule = this.head.val;
        this.head = this.head.next;
        return vaule;
    }

    peek(){
        return this.head.val
    }
}

const queue = new Queue();
queue.enqueue("1")
queue.enqueue("2")
queue.enqueue("3")
queue.dequeue()
console.log(queue)