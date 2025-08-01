import React from "react"
import { createRoot } from 'react-dom/client'; 
import App from "./components/App";
import './styles/global.css'

const container = document.getElementById('root');
const root = createRoot(container); // Create a root
//intialization


root.render(<App />, container)