export const registerUser = async (newUserName) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            symbol: newUserName,
            faction: "COSMIC",
        }),
    };

    const result = await fetch('https://api.spacetraders.io/v2/register', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    return result;
}