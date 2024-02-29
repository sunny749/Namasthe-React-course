// if we want to create a nested divs lets see how we can create that structure

// const Parent=React.createElement('div',{id:'parent'},
//             React.createElement('div',{id:'child'},
//             React.createElement('h1',{},'iam h1 subChaild')
//             )
// )
// if we want to create more than one chaild in the same lavel the  we have to pass
// array of child elements lets see example

const Parent=React.createElement('div',{id:'parent'},
            React.createElement('div',{id:'child'},
            [React.createElement('h1',{},'iam h1 subChaild'),React.createElement('h2',{},'iam h2 subChaild in same level')]
            )
)



// const headding=React.createElement('h1',{id:'headding'},'Hellow World From React')
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent)