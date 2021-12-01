module.exports = function increaseCount(sequence){
    let increases = 0;
    for (let i=1; i<sequence.length; i++) {
        if (sequence[i] > sequence[i-1])
            increases++;
    }

    return increases;
}