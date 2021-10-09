import {useContext} from 'react'
import { NotesContext } from './contexts/NotesContext'

const App = () => {
    const {notes}=useContext(NotesContext);
    console.log("notes => ", notes)
    return (
        <>
        <LeftMenu/>
        <Content/>
        </>
    )
}

export default App
