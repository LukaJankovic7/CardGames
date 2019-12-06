const DEFAULT_NUMBERS = {
    value1: '',
    value2: '',
    score: [0,0]
}

const higherCardReducer = (state = DEFAULT_NUMBERS, action) => {
    const v1 = Math.floor(Math.random()*12) + 1 ;
    const v2 = Math.floor(Math.random()*12) + 1 ;
    let score = [];
    localStorage.setItem('LAST_SCORE', 'N,N');

    if(v1>v2) score = [state.score[0]+1, state.score[1]];
    else if( v2>v1) score = [state.score[0], state.score[1]+1]; 
    else score = state.score;

    switch(action.type) {
        case 'GENERATE_CARDS': 
            return {...state, value1: v1, value2: v2, score: score} 
        case 'RESET_GAME': 
            localStorage.setItem('LAST_SCORE', state.score);
            return {...state, value1: '', value2: '', score: [0,0]}
        default: 
            return state;
    }
}

export default higherCardReducer;