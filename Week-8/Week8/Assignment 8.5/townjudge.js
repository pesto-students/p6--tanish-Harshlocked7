const findJudge = (N, trust) => {
    let LikesCountList = {}
    let beingLikedCountList = {}
    for (let i = 0; i <= N; i++){
        LikesCountList[i] = 0
        beingLikedCountList[i] = 0
    }
    for(let ele of trust) {
        LikesCountList[ele[0]]++
        beingLikedCountList[ele[1]]++
    }

    let judge = 0

    for (key in LikesCountList){
        if(LikesCountList[key] === 0) judge = key
    }

    if(beingLikedCountList[judge] === N - 1) return judge
    else returb -1
}


console.log(findJudge);