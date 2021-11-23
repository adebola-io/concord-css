import React from 'react';
import './sidebarbtn.css';

let open = false;
const SidebarBtn = (props) => {
    function nothing () {}
    const button = React.useRef(null);
    const bar1 = React.useRef(null);
    const bar2 = React.useRef(null);
    const bar3 = React.useRef(null);
    const bars = [bar1, bar2, bar3];

    // Handle props
    if (props.onClick) {
        button.current.addEventListener('click', props.onClick)
    }

    if (props.barColor){
        bars.forEach(bar=> {
            bar.current.style.color = props.barColor;
        })
    }
    const openSideBar = () => {
        open = !(open);
        switch (props.animation) {
            case 'spin':
                default:
                button.current.style.transform = open && props.animation!=='none'?'rotate(180deg)':'none';
                bar1.current.style.transform = open?
                    props.type==='hamburger'?'rotate(45deg) translate(7%, 93%)':
                    props.type==='staircase'?'rotate(45deg) translate(19%, -24%)':
                    '':'none';
                props.type==='staircase'?bar1.current.style.width=open?'75%':'':nothing();
                bar2.current.style.display = open?'none':'block';
                bar3.current.style.transform = open?
                    props.type==='hamburger'?'rotate(-45deg) translate(15%, -102%)':
                    props.type==='staircase'?'rotate(-45deg) translate(24%, 0%)':
                    '':'none';
                break;
            case 'none':
                break;
        }
    }
    return <button onClick={openSideBar} className={`concord-page-sidebar-button ${props.className?props.className:''}`}>
            <div ref={button} className='concord-sidebar-inner-container'>
                {props.type==='hamburger' && 
                    <>
                        <div ref={bar1} className="concord-sidebar-button-bar"></div>
                        <div ref={bar2} className="concord-sidebar-button-bar"></div>
                        <div ref={bar3} className="concord-sidebar-button-bar"></div>
                    </>
                }
                {props.type==='staircase' && 
                    <>
                        <div ref={bar1} className="concord-sidebar-button-bar xsnfuw-staircase1"></div>
                        <div ref={bar2} className="concord-sidebar-button-bar xsnfuw-staircase2"></div>
                        <div ref={bar3} className="concord-sidebar-button-bar xsnfuw-staircase3"></div>
                    </>}
            </div>
        </button>
};

SidebarBtn.defaultProps = {
    type: 'hamburger',
    animation: 'spin'
}

export default SidebarBtn