// function solution(n) {
//     let cnt = 0;
//     let q = [[1, ''], [2, ''], [4, '']];
//     while (q.length) {
//         let len = q.length
//         for (let i = 0; i < len; i++) {
//             let num = q.shift()
//             cnt++
//             let p = num[1] + String(num[0])
//             if (cnt === n) {
//                 return p
//             }
//             q = [...q, [1, p], [2, p], [4, p]]
//         }
//     }
//     return 
// }

function solution(n) {
    let answer = ''
    let nums = [1,2,4]
    while(n > 0) {
        let share = parseInt(n / 3)
        let rest = n % 3
        if(rest === 0) {
            answer = '4' + answer
            n = share - 1
        } else {
            answer = rest + answer
            n = share
        }
    }
    return answer
}


for (let i = 1; i < 50; i++) {
    console.log(i, solution(i))    
}