import React from 'react';
import Title from '../Title';
import {connect} from 'react-redux';

import foodmatch_content from '../../img/foodmatch_content.png';
import digidiary_content from '../../img/diary.png';
import happihour_content from '../../img/happihour_content.jpg';
import easemble_content from '../../img/easemble_content.PNG';

function Top(props){
    
    var about_class = null,
        project_class = null;
    if(props.work_class === `show_big_work_img`|| props.work_class === `show_big_work_img img_cut`){
        about_class = 'hide_about_container';
        project_class = 'show_project_desc';
    }else{
        about_class = 'show_about_container';
        project_class = 'hide_project_desc';
    }
    
    var content_img = null,
        p_name = null,
        date = null,
        position = null,
        p_desc = null;


    if(props.work_name === 'foodmatch'){
        content_img = foodmatch_content;
        p_name = 'FoodMatch';
        date = '01/2019 - 05/2019';
        position = 'Designer/Front End Developer';
        p_desc = 'Creating custom visual assets, wireframes and prototypes. User testing prototypes and updating user experience based on feedback. Coding layouts and functionalities using HTML5, CSS and JavaScript.';
    }else if(props.work_name === 'digi_diary'){
        content_img = digidiary_content;
        p_name = 'Digi Diary';
        date = '01/2020 - Present';
        position = 'Full Stack Developer';
        p_desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';
    }else if(props.work_name === 'happihour'){
        content_img = happihour_content;
        p_name = 'happihour';
        date = '09/2019 - 12/2019';
        position = 'Full Stack Developer';
        p_desc = 'Developing the states, functionalities, layouts, and database using React-Native, MySQL and PHP. Collaborating with designers to develop prototypes. Debugging and user testing to identify UX/UI improvements.';
    }else if(props.work_name === 'easemble'){
        content_img = easemble_content;
        p_name = 'easemble';
        date = '01/2020 - Present';
        position = 'Front End Developer';
        p_desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';
    }


    return(
        <div className="top_container">
            <Title />
            <div className="below_title">
                <div className="top_left">
                    <div className={about_class}>
                        <div className="hi">Hi! I'm Peter</div> <br/>
                        <div className="desc">
                            A multi-passionate front end developer based in Vancouver, B.C
                        </div>
                    </div>
                    <div className={project_class}>
                        <div className="p_name">{p_name}</div>
                        <div className="date">{date}</div>
                        <div className="position">{position}</div>
                        <p>{p_desc}</p>
                    </div>
                </div>
                <div className="top_right"><img alt="work" src={content_img} className={props.work_class} /> </div>
            </div>      
        </div>
    )
}

const mapStateToProps = state => {
    return {
        display:state.display,
        work_class:state.work_class,
        work_name:state.name
    }
}

export default connect(mapStateToProps)(Top);