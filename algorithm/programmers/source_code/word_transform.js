/* 과거의 나...
function solution(begin, target, words) {
    let answerList = [];

    const change = (count, curWord, remain) => {
        if (curWord === target) {
            answerList.push(count)
        } else {
            if (count === words.length) return;
            if (remain.length === 0) return;
            else {
                for (let i = 0; i < remain.length; i++) {
                    let diffNum = diffCount(curWord, remain[i])
                    if (diffNum === 1) {
                        let sliced = remain.slice()
                        sliced.splice(i, 1)
                        change(count + 1, remain[i], sliced)    
                    }
                }
            }
        }
    }
    change(0, begin, words)
    if (answerList.length) {
        return Math.min(...answerList)
    } else {
        return 0
    }
}


const diffCount = (a, b) => {
    let count = 0
    Array.from(a).forEach((el, i) => {
        if (el !== b[i]) {
            count++
        }
    });
    return count
}
*/

function solution(begin, target, words) {
    let q = [begin]
    let depth = 0
    while(q.length) {   // BFS
        let len = q.length
        for (let i = 0; i < len; i++) {
            let cur = q.shift()
            if(cur === target) return depth     // 만약 target과 같다면
            for (let j = 0; j < words.length; j++) {    // 단어들을 돌면서 한 글자만 다른 단어 찾을 loop
                let d = diff(cur, words[j])
                if(d) { // 한 글자만 다르면
                    q.push(words[j])
                    words.splice(j--, 1)    // q에 들어간 단어는 제거
                }
            }
        }
        depth++ // 탐색 단계 수
    }
    return 0
}

function diff(a, b) {   // 한 글자 다른 단어 찾는 함수
    let cnt = 0
    for (let i = 0; i < a.length; i++) {
        if(a[i] !== b[i]) cnt++
        if(cnt > 1) return false
    }
    return true
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]))   //4
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]))   //0
