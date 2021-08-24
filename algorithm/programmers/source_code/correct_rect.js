function solution(w, h) {
    var answer = 0;
    for (let i = 0; i < w; i++) {
        answer += Math.floor(h * i / w)
    }
    return answer * 2;
}