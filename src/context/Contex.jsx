import { createContext } from "react"

export const NewContext = createContext();

export default function Context() {
    return (
        <div>
            <NewContext.Provider>
                
            </NewContext.Provider>
        </div>
    )
}