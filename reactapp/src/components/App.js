import React, { useState } from "react";
import Form from "./cv";
import ReactDOMServer from 'react-dom/server';
const App = () => {

          return(<div>                     
                <Form/>
                 </div>                       
          )
       }
    const htmlString = ReactDOMServer.renderToString(<Form/>);
    console.log(htmlString);
    export default App
