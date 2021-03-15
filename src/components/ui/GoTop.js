import React from 'react'
import styled from 'styled-components'
import {FaChevronUp} from 'react-icons/fa'

const GoToTop = styled.div`
     position: fixed;
    cursor: pointer;
    bottom: -100px;
    right: 40px;
    color: #fff;
    background-color: #bbbb;
    z-index: 4;
    width: 45px;
    text-align: center;
    height: 45px;
    opacity: 0;
    visibility: hidden;
    outline: none;
    border-radius: 50%;
    font-size: 22px;
    transition: .9s;
    overflow: hidden;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);

    svg {
        position: absolute;
        right: 0;
        left: 0;
        top: 50%;
        
        transform: translateY(-50%);
        text-align: center;
        margin: 0 auto;
    }
    &.active {
        opacity: 1;
        visibility: visible;
        bottom: 20px;
        
    }
    &:hover {
        background-color: #6698ff;
        color: #f2f2f2;
        transition: .5s;
        box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
        transform: translateY(-5px);
    }

`;



const GoTop = ({scrollStepInPx, delayInMs}) => {

    const [thePosition, setThePosition] = React.useState(false);
    const timeoutRef = React.useRef(null);

    React.useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                setThePosition(true)
            } else {
                setThePosition(false);
            }
        });
    }, [])
    
    const onScrollStep = () => {
        if (window.pageYOffset === 0){
            clearInterval(timeoutRef.current);
        }
        window.scroll(0, window.pageYOffset - scrollStepInPx);
    }

    const scrollToTop = () => {
        timeoutRef.current = setInterval(onScrollStep, delayInMs);
    }

    const renderGoTopIcon = () => {
        return (
            <GoToTop 
                className={ thePosition ? 'active' : ''} 
                onClick={scrollToTop} 
                role="button" 
                tabIndex="0"
                aria-hidden="true"
            >
                <FaChevronUp/>
                {/* <i className="flaticon-up"></i> */}
            </GoToTop>
        )
    }

    return (
        <React.Fragment>
            {renderGoTopIcon()}
        </React.Fragment>
    )
}

export default GoTop;