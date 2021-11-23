import React from 'react'
import './sidebarbtn.css'
let open = false;
const SidebarBtn = (props) => {
    const bar1 = React.useRef(null);
    const bar2 = React.useRef(null);
    const bar3 = React.useRef(null);
    const xyxz = () => {
        open = !(open)
        bar1.current.style.transform = open?'':''
    }
    return <button onClick={xyxz} className={`concord-page-sidebar-button ${props.className?props.className:''}`}>
            <div ref={bar1} className="concord-sidebar-button-bar"></div>
            <div ref={bar2} className="concord-sidebar-button-bar"></div>
            <div ref={bar3} className="concord-sidebar-button-bar"></div>
        </button>
}

export default SidebarBtn