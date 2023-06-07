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

    enqueue(val){ //뒤에 노드 추가
        const newNode = new Node(val)
        if(!this.head){
            this.head = this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeue(){ //앞의 노드 삭제
        const value = this.head.val;
        this.head = this.head.next;
        return value; 
    }

    peek(){// 가장 앞의 노드 리턴
        return this.head.val;
    }
}

function solution(priorities,location){
    const queue = new Queue();
    for(let i=0; i<priorities.length; i++){
        queue.enqueue([priorities[i],i])
    }
    
    priorities = priorities.sort((a,b)=>b-a);

    let count =0; //우선순위 순서대로 문서가 인쇄되는 갯수

    while(true){
        const curr = queue.peek();
        if(curr[0] < priorities[count]){ //우선순위보다 작을 경우
            queue.enqueue(queue.dequeue()); //앞에서 지워주고 뒤에서 노드 추가
        }else{//우선순위 보다 같거나 클경우
            const value = queue.dequeue(); //앞에서 지워준다
            count++ //문서가 하나 빠졌기 때문에 카운트 추가 
            if(location === value[1]){
                return count;
            }
        }
    }
}