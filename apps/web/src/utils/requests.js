const request = (url, body = {}, method = "GET", headers = {}) => {
    return new Promise(resolve => {
        fetch(url, {
            method,
            headers: {...headers, "Content-Type": "application/json"},
            body: body ? JSON.stringify(body) : null
        }).then(response => response.json())
        .then(resolve);
    });
}

const get = url => request(url, null, "GET");

const post = (url, body) => request(url, body, "POST");

export {
    get,
    post
};