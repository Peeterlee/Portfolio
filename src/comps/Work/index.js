import React from 'react';
import {changeDisplay} from '../../redux/actions';
import {connect} from 'react-redux';

function Work(props){
    return(
        <div className="small_work">
            <div style={{backgroundImage:`url(${props.img_path})`}} className="small_work_img" onMouseOverCapture={()=>{
                    props.changeDisplay(props.name, props.img_path,'show_big_work_img');
                }} onMouseOutCapture={()=>{
                    props.changeDisplay(props.name, props.img_path,'hide_big_work_img');
                }}>
                <div className="viewmore">
            <a target="_blank" rel="github" href={props.github ? props.github : props.link}>{props.github ? 'Github' : 'Website'}</a>
                </div>
            </div>
        </div>
    )
}

export default connect(null,{changeDisplay})(Work);