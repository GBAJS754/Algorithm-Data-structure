//장르의 우선순위를 구한다. 
//장르 안의 노래 재생이 많은 순으로 정렬한다.
//최대 2개까지 가능하므로 커트한다.
//우선순위와 정렬

function solution(genres, plays) {
    let genresMap = new Map();
    //장르,재생횟수 classic : 800
    genres.map((genre,i)=>[genre, plays[i]])
        .forEach(([genre, play],i)=>{
        const data = genresMap.get(genre) || {total : 0, songs : []};

        genresMap.set(genre, {
            total : data.total +play,
            songs : [...data.songs, {play, i}]
                    .sort((a,b)=>b.play-a.play)
                    .slice(0,2)
        })
    })
    return [...genresMap.entries()]
            .sort((a,b)=>b[1].total - a[1].total)
            .flatMap(item=>item[1].songs).map(song =>song.i)
}

