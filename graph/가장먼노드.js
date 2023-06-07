//[ [1], [2], [3], [4], [5], [6] ]
//[3,6] => 루프를 돌면서 집어넣기...

// function solution(n, edge) {
//     let vertex = edge;
//     let graph = Array.from(Array(7).fill(false))

//     for(let j=0; j<vertex.length; j++){
//         if(1 === vertex[j][0]){
//             graph[1]++
//             graph[vertex[j][1]]++
//         }
//     }
//     return n-graph[1]-1
// }

function solution(n, edge) {
    const graph = Array.from(Array(n+1), ()=>[])

    for(const [scr, dest] of edge){
        graph[scr].push(dest);
        graph[dest].push(scr);
    }
    console.log(graph)

    const distance = Array(n+1).fill(0);
    distance[1] = 1;

    //BFS 탐색!

    const queue = [1];
    while(queue.length > 0){
        const scr = queue.shift(); //원점 , shift는 요소가 적을 경우에는 자바스크립트 엔진에서 최적화를 해준다.
        for(const dest of graph[scr]){
            if(distance[dest] === 0){ //한번도 가지않은 길
                queue.push(dest);
                distance[dest] = distance[scr] +1; //도착지
            }
        }
    }
    console.log(distance)
    const max = Math.max(...distance);
    return distance.filter(item => item === max).length;
}

let a = solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])
console.log(a)
