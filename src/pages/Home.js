import React from 'react';
import Top from '../comps/Top';
import Bottom from '../comps/Bottom';

function Home(){
    return(
        <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
            <Top />
            <Bottom />
        </div>
    )
}

export default Home;