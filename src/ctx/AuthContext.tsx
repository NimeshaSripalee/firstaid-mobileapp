import { createContext, useState } from 'react';

export const AuthContext = createContext({contextValue:{
    loggedin:false,
    username:"",
    userid:""
}, 
updateContextValue:(loggedin:boolean, username:string, userid:string)=>{}}
)


export const AuthProvider = ({children}) =>{
    const [contextValue, setContextValue] = useState({
    loggedin:false,
    username:"",
    userid:""
    })

    const updateContextValue = (loggedin:boolean, username:string, userid:string)=>{

        console.log("updating context ", {
            loggedin,
            username,
            userid
        })
        
        setContextValue({
            loggedin,
            username,
            userid
        })
    }

    return <AuthContext.Provider value={{contextValue, updateContextValue}}>
        {children}
    </AuthContext.Provider>
}