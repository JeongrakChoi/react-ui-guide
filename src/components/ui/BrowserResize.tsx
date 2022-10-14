import React from 'react';
import { useEffect, useState } from 'react';

const BrowserResize = () => {
    const [isMobile, setisMobile] = useState(false);

    // 리사이즈 이벤트를 감지하여 가로 길이에 따라 true 여부 결정
    const resizingHandler = () => {
        if (window.innerWidth <= 1280) {
            setisMobile(true);
            console.log(true);
        } else {
            setisMobile(false);
            console.log(false);
        }
    };

    // 첫 렌더링시 800이하면 true 처리
    useEffect(() => {
        if (window.innerWidth <= 1280) {
            setisMobile(true);
        }
        
        window.addEventListener("resize", resizingHandler);
        return () => {
            // 메모리 누수를 줄이기 위한 removeEvent
            window.removeEventListener("resize", resizingHandler);
        };
    }, []);

    return (
        <div className="uiBox">
            
            <div className={`toggleButton ${isMobile ? 'on': ''}`}>
                Browser Resize <br/>
                1280 &gt; on <br/>
                1280 &lt; off
            </div>

        </div>
    )
}

export default BrowserResize;