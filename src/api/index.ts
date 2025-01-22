export const baseUrl = "http://10.95.146.174:3000";
export const chatBotBaseUrl = "http://192.168.8.101:8080"


export function startChat(){
    return fetch(`${chatBotBaseUrl}/start`,{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })   
}

export function sendChatMessage(convo_id:string, message:string){
    console.log("sending chat message", convo_id, message)
    return fetch(`${chatBotBaseUrl}`,{
        method:'POST',
        body:JSON.stringify({
            convo_id, message
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })   
}

// export const baseUrl = "http://35.238.168.196/test"
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

export function submitFeedback(data:any){
    return fetch(`${baseUrl}/api/feedback`, {
        method:'POST',
        body: JSON.stringify(data),
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