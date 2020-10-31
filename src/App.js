import React,{useEffect, useState} from 'react';
import './App.scss';
import Home from './pages/Home';
import {connect} from 'react-redux';
import {getScreenSize} from './redux/actions';

function App(props) {

  const size = useWindowSize();
  
  useEffect(()=>{
    props.getScreenSize(size);  
  },[size]);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

function useWindowSize(){
  const isClient = typeof window === 'object';
  function getSize(){
    return{
      width:isClient ? window.innerWidth : undefined,
      height:isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(()=>{
    if(!isClient){
      return false;
    }
    function handleResize(){
      setWindowSize(getSize());
    }

    window.addEventListener('resize',handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[]);

  return windowSize;
}

export default connect(null,{getScreenSize})(App);
