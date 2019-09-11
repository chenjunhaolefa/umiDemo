//import fetch from 'dva/fetch';


function checkStatus(reponse){
    if(reponse.status >= 200 && reponse.status < 300) {
        return reponse;
    }

    const error = new Error(reponse.statusText);
    error.reponse = reponse;
    throw error;
}


export default async function request(url, options){
    const reponse = await fetch(url, options);
    checkStatus(reponse);
    console.log(reponse);
    return await reponse.json();
}