import React from 'react';
import Title from '../comps/Title';
import {connect} from 'react-redux';
import Work from '../comps/Work';

import foodmatch_topImg from '../img/foodmatch_content.png';
import digidiary_topImg from '../img/diary.png';
import happihour_topImg from '../img/happihour_content.jpg';
import easemble_topImg from '../img/easemble_content.png';
import careerbuild_topImg from '../img/careerbuild-top.png';
import marksreview_topImg from '../img/marksreview-top.png';
import quehack_topImg from '../img/quehack-top.jpg';

import easemble_bottomImg from '../img/easemble.png';
import happihour_bottomImg from '../img/happihour_logo.png';
import foodmatch_bottomImg from '../img/foodmatch_cover.png';
import diary_bottomImg from '../img/digi-diary.png';
import careerbuild_bottomImg from '../img/careerbuild.png';
import marksreview_bottomImg from '../img/marksreview.png';
import quehack_bottomImg from '../img/quehack.png';

function Home(props){

    var about_class = null,
        project_class = null;

    if(props.work_class === `show_big_work_img`|| props.work_class === `show_big_work_img img_cut`){
        about_class = 'hide_about_container';
        project_class = 'show_project_desc';
    }
    else{
        about_class = 'show_about_container';
        project_class = 'hide_project_desc';
    }
    
    var content_img = null,
        p_name = null,
        date = null,
        position = null,
        p_role = null,
        p_desc = null,
        tools = null;


    if(props.work_name === 'foodmatch'){
        content_img = foodmatch_topImg;
        p_name = 'FoodMatch';
        date = '01/2019 - 05/2019';
        position = 'Designer/Front End Developer';
        tools = 'HTML, CSS, JavaScript, Proxy';
        p_desc = 'Web application that helps indecisive people make quicker decision regarding food';
        p_role = 'Creating custom visual assets, wireframes and prototypes. User testing prototypes and updating user experience based on feedback. Coding layouts and functionalities using HTML5, CSS and JavaScript.';
    }
    else if(props.work_name === 'digi_diary'){
        content_img = digidiary_topImg;
        p_name = 'Digi Diary';
        date = '01/2020 - Present';
        position = 'Full Stack Developer';
        tools = 'React Native, PHP, SQL';
        p_desc = 'Mobile application that stores private diaries with option of tagging their friends to share memories'; 
        p_role = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';
    }
    else if(props.work_name === 'happihour'){
        content_img = happihour_topImg;
        p_name = 'happihour';
        date = '09/2019 - 12/2019';
        position = 'Full Stack Developer';
        tools = 'React Native, PHP, SQL, AWS, GCP';
        p_desc = 'Mobile application that acts as a resource for people looking for affordable drink and food';
        p_role = 'Developing the states, functionalities, layouts, and database using React-Native, MySQL and PHP. Collaborating with designers to develop prototypes. Developing APIs using PHP. Implementing and customizing Google Maps.';
    }
    else if(props.work_name === 'easemble'){
        content_img = easemble_topImg;
        p_name = 'easemble';
        date = '01/2020 - 03/2020';
        position = 'Front End Developer';
        tools = 'React, Redux, Storybook, Sass';
        p_desc = 'Social media marketing platform users can set hashtags that they need to track and sort through images they are tagged in'
        p_role = 'Creating reusable React components with Storybook. Implementing responsive and interactive pages using React components, Redux, and libraries';
    }
    else if(props.work_name === 'CareerBuild'){
        content_img = careerbuild_topImg;
        p_name = 'CareerBuild';
        date = '03/2020 - 09/2020';
        position = 'Back End Developer';
        tools = 'Node.js, AWS, Serverless, PostgreSQL, Python';
        p_desc = 'Web applcation that provides information about BCIT programs and occupation statistics that relate to those programs'
        p_role = 'Scraping BCIT website using Python to collect data for the application. Analyzing and interpreting raw data files and migrating data into databases. Architecturing cloud-based back end services. Assisting front end in implementing functionalities according to prototypes.';
    }
    else if(props.work_name === 'MarksReview'){
        content_img = marksreview_topImg;
        p_name = 'MarksReview';
        date = '03/2020 - 09/2020';
        position = 'Back End Developer';
        tools = 'Node.js, AWS, MSSQL, Python';
        p_desc = 'Application where BCIT instructors upload and review student\'s grades'
        p_role = 'Building algorithms to parse PDF files and insert data into databases. Developing multi-tier architectures. Implementing, optimizing, and debugging RESTful APIs.';
    }
    else if(props.work_name === 'QueHack'){
        content_img = quehack_topImg;
        p_name = 'quehack';
        date = '06/2020 - Present';
        position = 'Back End Developer';
        tools = 'Node.js, AWS, Serverless, PostgreSQL, Python, Jest';
        p_desc = 'Cross-Platform application that connects instructors and students by allowing students to ask questions and instructors to answer questions'
        p_role = 'Designing databases and developing SQL quries. Performing automated testing tasks. Collaborating with designers and front end developers to ensure professional deliveries.';
    }
    

    var works = [
        {name:"foodmatch",img_path:foodmatch_bottomImg,github:'https://github.com/Peeterlee/foodmatchV1.3'},
        {name:"happihour",img_path:happihour_bottomImg,github:'https://github.com/Peeterlee/Happihour'},
        {name:"easemble",img_path:easemble_bottomImg,github:'https://github.com/Peeterlee/easemble'},
        {name:"CareerBuild",img_path:careerbuild_bottomImg,link:'https://careerbuild.bcit.ca/'},
        {name:"MarksReview",img_path:marksreview_bottomImg,link:'https://marksreview.bcit.ca/'},
        {name:'QueHack',img_path:quehack_bottomImg,link:'https://quehack.ca/'}
    ]

    return(
        <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
            <div className="top_container">
                <Title />
                <div className="below_title">
                    <div className="top_left">
                        <div className={about_class}>
                            <div className="hi">Hi! I'm Peter</div> <br/>
                            <div className="me_desc">
                                A hardworking fullstack developer proficient in building application components, translating mockups into responsive and interactive features, designing scalable relational databases, implementing RESTful APIs, and developing test automation infrastructure
                            </div>
                        </div>
                        <div className={project_class}>
                            <div className="p_name">{p_name}</div>
                            <div className="date">{date}</div>
                            <div className="position">{position}</div>
                            <div className="tools"><span>Tools: </span>{tools}</div>
                            <div className="p_desc"><span>Objective: </span>{p_desc}</div>
                            <div className="role"><span>Role: </span>{p_role}</div>
                        </div>
                    </div>
                    <div className="top_right"><img alt="work" src={content_img} className={props.work_class}/> </div>
                </div>      
            </div>

            <div className="bottom_container">
                <div className="tabs">
                    <b>Featured Work</b>
                </div>
                <div className="small_works_container">
                    {
                        works.map((o,i)=>{
                            return <Work key={i} {...o} />
                        })
                    }                
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        display:state.display,
        work_class:state.work_class,
        work_name:state.name,
        screensize:state.screensize
    }
}

export default connect(mapStateToProps)(Home);