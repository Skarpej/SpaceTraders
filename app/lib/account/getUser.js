export const getUser = async (token) => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    };

    const reuslt = await fetch('https://api.spacetraders.io/v2/my/agent', options)
        .then(response => response.json())
        .catch(err => console.error(err));
    return reuslt;
}


export const getUserCord = async (token, systemSymbol, symbol) => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    };

    const reuslt = await fetch(`https://api.spacetraders.io/v2/systems/${systemSymbol}/waypoints/${symbol}`, options)
        .then(response => response.json())
        .catch(err => console.error(err));
    return reuslt;
}

export const getContracts = async (token) => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    };

    const reuslt = await fetch('https://api.spacetraders.io/v2/my/contracts', options)
        .then(response => response.json())
        .catch(err => console.error(err));
    return reuslt;
}