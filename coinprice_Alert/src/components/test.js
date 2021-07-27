function Button () {
    return React.createElement(
        "button", 
        { onclick : () => {} },
        "Hello world"
    );
}

const rootContainer = document.getElementById("root");
ReactDOM.render(React.createElement( Button), rootContainer );