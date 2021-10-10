import {useState} from 'react';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';



const TextEditor = () => {

    const [text, setText] = useState("");

    console.log(text)

    const handleChange = (value) => {
        console.log(value);
        
        // this.setText(e.target.value)
    }

    return(
    <ReactQuill value={text}
    onChange={handleChange} />
    )
    
}

export default TextEditor
