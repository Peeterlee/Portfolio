import React from 'react';
import {connect} from 'react-redux';
import Work from './Work';

import easemble from '../../img/easemble.png';
import happihour from '../../img/happihour_logo.png';
import foodmatch from '../../img/foodmatch_cover.png';
import diary from '../../img/digi-diary.png';

function Bottom(props){

    var works = [
        {name:"foodmatch",img_path:foodmatch,github:'https://github.com/Peeterlee/foodmatchV1.3'},
        {name:"happihour",img_path:happihour,github:'https://github.com/Peeterlee/Happihour'},
        {name:"easemble",img_path:easemble,github:'https://github.com/Peeterlee/easemble'},
        {name:"digi_diary",img_path:diary,github:'https://github.com/Peeterlee/Diary'}
    ]

    return(
        <div className="bottom_container">
            <div className="tabs">
                <b>Featured Work</b><span>View More</span>
            </div>
            <div className="small_works_container">
                {
                    works.map((o,j)=>{
                        return <Work {...o} />
                    })
                }                
            </div>
            
        </div>
    )
}

export default connect()(Bottom);