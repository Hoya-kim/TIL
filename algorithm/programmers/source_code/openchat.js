function solution(record) {
    let answer = []
    let members = {}
    for (const r of record) {
        let arr = r.split(' ')
        if(arr[0][0] === 'E') {
            answer.push([arr[1], '님이 들어왔습니다.'])
            members[arr[1]] = arr[2]
        }
        else if(arr[0][0] === 'L') answer.push([arr[1], '님이 나갔습니다.'])
        else {
            members[arr[1]] = arr[2]
        }
    }
    console.log(answer)
    return answer.map((el) => `${members[el[0]]}${el[1]}`);
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]))
console.log(solution(["Enter uid1234 Muzi"]))