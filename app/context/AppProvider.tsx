import React, { useContext } from 'react'

export const AppContext = React.createContext<any>(null)

export const useAppContext = () => useContext(AppContext)

const AppProvider = (props:any) => {
    
    return (
        <AppContext.Provider value={props}>
            { props.children }
        </AppContext.Provider>
    )
}

export default React.memo(AppProvider)