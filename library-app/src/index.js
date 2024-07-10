import React from 'react';
import ReactDOM from 'react-dom/client';
// import InitState from '/Users/Orange/Desktop/Orange/React/7-9/Library-App-React/library-app/public/Bookshelf'



function Home(){
    return <div>
    <Header/> 
    <Main/>
    <Footer/>
    
    </div>
}

function Header() {
    return <h1>Bookery</h1>
}

function Main() {
    return <Books />

}

function Footer() {
    return <footer>{new Date().toLocaleTimeString()} We're currently open</footer>
    // return React.createElement('footer', null, "We're currently open")
}




function Books() {
    return <h2>book</h2>

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><Home /></React.StrictMode>);
