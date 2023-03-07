import React from 'react'
import { Parallax,ParallaxLayer } from '@react-spring/parallax'

function Home() {
    return (
        <div>
            <Parallax pages={4}>
                <ParallaxLayer
                    className="home"
                    offset={0}
                    speed={1}
                    factor={2}>
                    <h1>Welcome to home</h1>
                </ParallaxLayer>
                <ParallaxLayer
                    className='stud'
                    speed={1}
                    factor={2}>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    speed={1.2}
                    factor={1}
                >
                    
                    <h1>hello I am Rakshith</h1>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default Home