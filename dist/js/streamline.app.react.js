//COMPONENTS
import { Link } from 'react-router-dom';
import '../css/streamline.app.css'

//Navigation Bar
export function StrNavbar (props) {
    return (
        <nav className='streamline-react-navbar' style={{
            height: props.height==='large'?'55px':props.height==='medium'?'45px':props.height==='small'?'30px':'45px',
            backgroundColor: props.backgroundColor,
            boxShadow: props.boxShadow
        }}>
            {props.line && <hr color='gray' style={{
                margin: 0,
                height: '1px',
                border: 'none',
                width: '100%'}}/>}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                height: '95%',
                width: '92%',
                padding: '0 4%',}}>   
                {props.navItems && props.navItems.map(item=>{
                    return (
                        <li style={{
                            listStyle: 'none',
                            display: 'flex',
                            margin: '0 auto',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%'}} key={item.key}>
                            {props.icons && <img style={{
                                height: '50%'
                            }} src={item.imgSrc} alt='navitem' />}
                            {props.text && <div style={{
                                fontSize: '10px'
                            }}>
                                {item.name}
                            </div>}
                        </li>
                    )
                })}
            </div>
        </nav>
    )
}
StrNavbar.defaultProps = {
    backgroundColor: 'transparent',
    line: true,
    icons: true,
    text:  true
}

//Header
let strHeaderSideBarClickCounter = 0;
export function StrHeader (props){
    let sideBarsArray = [];
    for (let i = 0; i < props.sideBars; i++) {
        sideBarsArray.push(i);
    }
    function closeSideBar () {
        document.querySelector('.streamline-react-header-sidebar').style.height = '0';
    }
    function openSidebar () {
        document.querySelector('.streamline-react-header-sidebar').style.height = 'max-content';
    }
    function toggleSideBar () {
        strHeaderSideBarClickCounter++;
        if (strHeaderSideBarClickCounter%2 === 0){
            closeSideBar();
        } else openSidebar();
    }
    return (
        <>
        <div style={{marginTop: props.height==='medium'?'42px':props.height==='small'?'35px':props.height==='large'?'55px':props.height}}></div>
        <header className='streamline-react-header' style={{
            height: props.height==='medium'?'42px':props.height==='small'?'35px':props.height==='large'?'55px':props.height,
            backgroundColor: props.backgroundColor,
            boxShadow: props.boxShadow,
            color: props.color,
        }}>
            {props.sidebar && props.sidebarLocation==='left' &&
                <div onClick={toggleSideBar} className='streamline-react-header-sidebar-icon sidebar-icon-left' style={{
                    height: props.height==='medium'?'42px':props.height==='small'?'35px':props.height==='large'?'55px':props.height,
                    width: props.height==='medium'?'42px':props.height==='small'?'35px':props.height==='large'?'55px':props.height
                }}>
                    {sideBarsArray.map((sidebar)=>{
                        return (
                            <li key={sidebar} className='streamline-react-header-sidebars' style={{backgroundColor: props.color}}></li>
                        )
                    })}
                </div>
            }
            {props.logo && <div href={'#'} style={{
                textDecoration: 'none',
                cursor: 'pointer',
                color: 'black',
                marginRight: '1%',
            }}>
                <img style={{
                    fontFamily: "sans-serif",
                    height: '85%',
                    color: props.logoColor}} src={props.logoSrc} alt='logo' />
            </div>}
            {props.children}
            {props.sidebar && props.sidebarLocation==='right' &&
                <div onClick={toggleSideBar} className='streamline-react-header-sidebar-icon' style={{
                    height: props.height==='medium'?'42px':props.height==='small'?'35px':props.height==='large'?'55px':props.height,
                    width: props.height==='medium'?'42px':props.height==='small'?'35px':props.height==='large'?'55px':props.height
                }}>
                    {sideBarsArray.map((sidebar)=>{
                        return (
                            <li key={sidebar} className='streamline-react-header-sidebars' style={{backgroundColor: props.color}}></li>
                        )
                    })}
                </div>
            }
            {props.navigationLinks &&  <div className='streamline-react-header-navigation'>
                {props.navigationLinks.map(navlink=>{
                return(
                    <Link to={navlink.to} style={{color: props.color}} className='streamline-react-header-navigationlinks' key={navlink.name}>{navlink.name}</Link>
                )
                })}
            </div>}
        </header>
        {props.navigationLinks && <div style={{
                color: props.color, 
                backgroundColor: props.backgroundColor}}
                className='streamline-react-header-sidebar'>
                {props.navigationLinks.map(navlink=>{
                    return <Link onClick={closeSideBar} to={navlink.to} style={{color: props.color}} className='streamline-react-header-sidebar-navigationlinks' key={navlink.name}>{navlink.name}</Link>
                })}
        </div>}
        </>
    )
}
StrHeader.defaultProps = {
    logo: false,
    color: 'darkgreen',
    height: '42px',
    backgroundColor: 'lightgreen',
    sideBarSize: '42px',
    sidebarLocation: 'right',
    sideBars: 3,
    logoName: 'Website Name',
    logoColor: 'darkgreen'
}

//HomePageBanner

export function StrHomeBanner (props){
    return (
        <section className='streamline-react-home-banner'>
            <div className='streamline-react-home-banner-container'>
                <div style={{
                    backgroundImage: props.backgroundImage,
                    backgroundColor: props.backgroundColor
                }} className={'streamline-react-home-banner-overlay '+props.className2}></div>
                <div style={{

                }} className={'streamline-react-home-banner-content '+props.className}>
                    {props.children}
                </div>
            </div>
        </section>
    )
}
StrHomeBanner.defaultProps = {
    className: '',
    className2: '',
    background: 'green'
} 

// FUNCTIONS
class Streamline {
    fixDocumentSize (e = [typeof(42)]) {
        e.forEach((element=>{
            if (document.querySelector(element)){
                document.querySelectorAll(element).forEach(el=>{
                    el.style.height = '100%';
                    el.style.overflow = 'hidden';
                })
            }
        }))
    }
    unfixDocumentSize (e = []) {
        e.forEach((element=>{
            if (document.querySelector(element)){
                document.querySelectorAll(element).forEach(el=>{
                    el.style.height = 'fit-content';
                })
                document.querySelector('html').style.overflowY = 'scroll';
            }
        }))
    }
}
export var StreamlineReact = new Streamline();