import React from 'react'
import ReactDOM from 'react-dom/client'
// reactCreateElement==jsObject=>HtmlElement by render()method
const headding=React.createElement('h1',{id:'headding'},'Namasthe React From CreateElement')
// now we create the react element by jsx syntax
// jsx => ReactCreateElement using babel and babel is managed by parcel bundler
// the ReactCreateElement object is converted to html element by render method
// const jsxHeadding=<h1 id='headding'>Namasthe React From JsxSyntax</h1>
// jsx is not html its html like syntax
// const jsxHeadding=(<h1 id='headding'>
// Namasthe React From JsxSyntax
// </h1>)
// if we want to write code in multilines then we need to use brackets else babel 
// dont understand the jsx to conver the reactElements

// components
const JsxHeadding=()=><h1 id='headding'>Namasthe React From JsxSyntax</h1>
number=1000
const HeaddingComponent=()=>(
<div className='container'>
{/* component inside component is called ComponentComposition*/}
<JsxHeadding />
{/* {console.log(number)} */}
{/* we can use our own js inside the curly brace in side the jsx*/}
<h1>Namasthe React From Headding Component</h1>
</div>
)
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(HeaddingComponent())