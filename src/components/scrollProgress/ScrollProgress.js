import './ScrollProgress.css'
import { useEffect } from 'react';
import { useState } from 'react';

const ScrollProgress = () => {
    const [scroll , setscroll] = useState(0);

    const scrollprogress= ()=>{
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollWidth = `${scrollPx/winHeightPx*100}%`;
        setscroll(scrollWidth);
    }

    useEffect(()=>{
        window.addEventListener("scroll", scrollprogress);
        
        return ()=>{
            window.removeEventListener("scroll", scrollprogress);
        }

    })

    return <section>
        <div className='scroll-static'>
            <div className='scroll-dynamic' style={{width:scroll}}></div>
        </div>
    </section>
}
 
export default ScrollProgress;