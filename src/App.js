import logo from './logo.svg';
import './App.css';
import marked from 'marked';
import dompurify from 'dompurify';

function App() {

  /*const ino = marked('``` markdown```');
  const cleanIno =  dompurify.sanitize(ino);*/

  marked.setOptions({
    renderer: new marked.Renderer(),
    sanitizer: dompurify.sanitize,
    breaks: false
  });

  const cleanHtml = {__html: marked('## Wilma the second')};
  console.log(cleanHtml);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

       <div dangerouslySetInnerHTML={cleanHtml}></div>

      </header>
    </div>
  );
}

export default App;
