const baseUrl = "http://192.168.1.5:3000"

export function registerGeneralUser(username:string, email:string, password:string){
    return fetch(`${baseUrl}/api/register/general-public`,{
        method:'POST',
        body:  JSON.stringify({
            username, email, password
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })   
}

export function registerEmergencyUser(username:string, email:string, password:string){
    return fetch(`${baseUrl}/api/register/ambulance`,{
        method:'POST',
        body:  JSON.stringify({
            username, email, password
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })   
}

export function LoginUser(username:string, password:string){
    return fetch(`${baseUrl}/api/login`,{
        method:'POST',
        body:  JSON.stringify({
            username, password
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })   
}