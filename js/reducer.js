// add code snippets from README
let state;

function reducer(state = {count: 0}, action){
    switch (action.type) {
        case 'INCREASE_COUNT':
            return {count: state.count + 1};
        case 'DECREASE_COUNT':
            return {count: state.count - 1}
        default:
            return state;
    }
};

function render() {
    let container = document.querySelector('#container');
    container.textContent = state.count;
}

function dispatch(action) {
    state = reducer(state, action)
    return render()
}

let button = document.querySelector('#button')
button.addEventListener('click', () => {
    dispatch({type: 'INCREASE_COUNT'})
})

let button2 = document.querySelector('#decrease')
button2.addEventListener('click', () => {
    dispatch({type: 'DECREASE_COUNT'})
})


dispatch({type: '@@INIT'})
// render()

