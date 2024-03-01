import React from 'react'
import ReactDOM from 'react-dom/client'
// if we want to create a nested divs lets see how we can create that structure

// const Parent=React.createElement('div',{id:'parent'},
//             React.createElement('div',{id:'child'},
//             React.createElement('h1',{},'iam h1 subChaild')
//             )
// )
// if we want to create more than one chaild in the same level the  we have to pass
// array of child elements lets see example

const Parent=React.createElement('div',{id:'parent'},
            React.createElement('div',{id:'child'},
            [React.createElement('h1',{},'iam h1 subChaild'),React.createElement('h2',{},'iam h2 subChaild in same level')]
            )
)
// if we want to create lots of childrens in the same level and nested level
// then the code locks so difficult to understand thats why the react is 
// using jsx syntax that is same as html and some javascript 
// and if we use render method it acually replace the content if any content
// is present in the root html element and react is a library we can use react
// in any frame work and we can use react to build larger scale applications
// cdn(content delivery network) is working with internet it connect the user 
// with the nearest server and inject the react or any techinology we want 
// and cross-origin is using because we inject different code from differet 
// origins the cross origin gives securety the order of screept tags are mandatory


// const headding=React.createElement('h1',{id:'headding'},'Hellow World From React')
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent)