module.exports = function increaseCount(sequence){
    if (sequence.length <= 1)
        return 0;
    
    let increases = 0;
    for (let i=1; i<sequence.length; i++) {
        const diff = sequence[i] - sequence[i-1];
        if (diff > 0)
            increases++;
    }

    return increases;
}