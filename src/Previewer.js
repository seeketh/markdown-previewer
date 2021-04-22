import { useEffect, useState } from 'react';
import marked from 'marked';
import dompurify from 'dompurify';
import { defaultMarkDownInput } from './data';
import './css/previewer.scss'


function Previewer() {

    // configure marked
    marked.setOptions({
        renderer: new marked.Renderer(),
        sanitizer: dompurify.sanitize,
        breaks: true
    })

    const [input, setInput] = useState({
        text: defaultMarkDownInput
    });

    const [markedInput, setMarkedInput] = useState({
        __html: marked(input.text)
    });

    const handleChange = (e) => {
        setInput({
            text: e.target.value
        });
    }

    useEffect(() => {
        setMarkedInput({
            __html: marked(input.text)
        });
    }, [input.text]);

    return (
        <div className="container">
            <div className="preview-title">
                Markdown preview
            </div>
            <div
                id="preview"
                className="preview"
                dangerouslySetInnerHTML={markedInput}
            ></div>
            <div className="editor-box">
                <div className="editor-title">
                    Markdown editor
                </div>
                <textarea
                    id="editor"
                    className="editor"
                    value={input.text}
                    onChange={handleChange}
                    rows={5}
                    autoFocus={true}
                />
            </div>
        </div>
    );
}

export default Previewer;