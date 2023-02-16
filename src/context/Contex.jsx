import { createContext } from "react"
import { Route, Routes } from "react-router-dom";

export const NewContext = createContext();

export default function Context() {
    return (
        <div>
            <NewContext.Provider>
                <Routes>
                    <Route>
                        
                    </Route>
                </Routes>
            </NewContext.Provider>
        </div>
    )
}