import {BASE_URL} from "../../constants/api";

export async function postData(url = '', data = {}) {
    const response = await fetch(BASE_URL + url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            //Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

export async function getData(url = '', data = {}) {
    let params = [];
    for (let key in data) {
        params.push(key + '=' + data[key]);
    }
    const queryString = params.length ? '?' + params.join('&') : '';

    const response = await fetch(BASE_URL + url + queryString, {
        method: 'GET',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}
