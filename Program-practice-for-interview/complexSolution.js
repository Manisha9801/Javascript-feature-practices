//there are 'm' number of children sitting in a circle and 'n' number of toys, i have started distributing toys from position 'j'.
//Find the position of children who get the last toy

function lastKidToGetToy(m_child,n_toys,pos) {
    n_toys = n_toys % m_child;
    for(let i = pos; i<=m_child && n_toys >0 ; i++) {
        if(n_toys - 1 === 0) return i;
        else n_toys--;
        if(i === m_child) i=0;
    }
}

console.log(lastKidToGetToy(5,4,5));