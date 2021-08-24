function solution(maps) {
    let n = maps.length
    let m = maps[0].length
    let dx = [-1, 0, 1, 0]
    let dy = [0, 1, 0, -1]
    let dist = Array.from({length: n}, () => Array(m).fill(-1))
    dist[0][0] = 1
    maps[0][0] = 0

    let q = [[0,0]]
    while(q.length) {
        let len = q.length
        for (let i = 0; i < len; i++) {
            let [x, y] = q.shift()
            for (let j = 0; j < 4; j++) {
                let nx = x + dx[j]
                let ny = y + dy[j]
                if(nx > -1 && nx < n && ny > -1 && ny < m && maps[nx][ny] === 1) {
                    q.push([nx, ny])
                    maps[nx][ny] = 0
                    dist[nx][ny] = dist[x][y] + 1
                }
            }
        }
        if(dist[n-1][m-1] !== -1) return dist[n-1][m-1]
    }
    return -1;
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]))
console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]))