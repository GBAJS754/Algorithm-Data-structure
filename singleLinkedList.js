/* class Node{
    constructor(val){
        this.val = val //데이터를 저장
        this.next = null; //다음 노드의 주소를 저장,포인터
    }
}

class SingleLinckedList{
    constructor(){
        this.head = null; //시작 노드
        this.tail = null; //끝 노드
        this.length =0;
    }

    push(val){ //뒤에서 노드 추가
        const newNode = new Node(val); 
        if(!this.head){ 
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode; //this.tail 자체가 노드라서 next 프로퍼티를 가질수있음?
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){ //뒤에서 노드 삭제
        if(!this.head) return undefined;
        let current = this.head;
        let previous = current;
        while(current.next){ //다음 노드가 있는지 => 있을 경우 아직 끝 노드가 아니란 뜻
            previous = current; //다음 노드가 있을 경우 previous을 current로 옮기고
            current = current.next; //current는 다음 노드로 옮겨간다.
        }
        this.tail = previous;
        this.tail.next = null;
        this.length--
        if(this.length === 0 ){
            this.head = null;
            this.tail = null;
        }
        return current
    }

    shift(){ //가장 앞의 노드 삭제
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val){//가장 맨 앞의 노드 추가
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else { // else 처리를 안하면 항상 실행되도록 설정되어져서 무한 루프됨
        newNode.next = this.head;
        this.head = newNode;
        }
        this.length++
        return this
    }
    
    get(index){ //인수로 받은 인덱스 위치의 노드를 반반환 
        if(index <0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter != index ){
            current =  current.next;
            counter++
        }
        return current;
    }
    set(index, val){ //인수로 받은 인덱스의 값을 갱신
        const foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return fasle;
    }
    insert(index,val){ //해당 인덱스에 노드값 추가하고 연결
        if( index < 0 || index > this.length ) return false;
        if( index ===0 ){
            this.unshift(val);
            return true
        } //true를 따로 반환하고 싶으면 이렇게 반환해도되고
        if( index === this.length ) return !!this.push(val) //부정 논리 연산자 두번 사용 가능 !!"hi" => true
        let newNode = new Node(val);
        let previous = this.get(index-1);
        let temp =  previous.next;
        previous.next =  newNode;
        newNode.next = temp;
        this.length++
        return true
    }

    remove(index){ //주어진 인자의 인덱스를 삭제
        if(index < 0 || index > this.length) return undefined;
        if(index ===0 ) return this.shift();
        if(index === this.length-1) return this.pop();
        let preNode = this.get(index-1);
        let removed = preNode.next;
        preNode.next = removed.next;
        this.length--;
        return removed; 
    }

    reverse(){
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let prev = null;
        let next;
        for(let i=0; i<this.length; i++){
            next = current.next // next = 201 값 저장
            current.next = prev; //current.next = null로 값 변경
            prev = current; //null = 100 으로 값 저장
            current = next; //100 = 201로 값 변경
        }
        //최종 그림
        //[100, 201, 250, 350, 999]
        // prev curr
        //100 -> null
    }
    print(){
        let arr =[];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next
        }
        console.log(arr)
    }
} */

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SingleLinckedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(newVal){ //끝에 노드 추가
        const newNode = new Node(newVal);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    find(newVal){ //노드 찾기
        let curr = this.head
        while(curr.val != newVal){
            curr = this.head.next
        }
        return curr
    }

    insert(node, newVal){//원하는 노드 위치에 노드 추가
        const newNode = new Node(newVal);
        newNode.next = node.next;
        node.next = newNode;
    }

    remove(val){ 
        let preNode = this.head;
        while(preNode.next.val !== val){
            preNode = preNode.next
        }
        if(preNode.next !== null){
            preNode.next = preNode.next.next
        }
    }

    display(){
        let curr = this.head;
        let displayString = "[" ;
        while(curr !== null){
            displayString += `${curr.val}`
            curr = curr.next;
        }
        displayString+= "]";
        console.log(displayString)
    }
}

const list =  new SingleLinckedList()
list.append("1")
list.append("2")
list.append("3")
list.display()
