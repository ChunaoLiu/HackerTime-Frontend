import React, { useState } from 'react'
import './QuestionBar.css'

const QuestionBar = () => {
    const [initialPos,   setInitialPos] = useState(null);
    const [initialSize, setInitialSize] = useState(null);
    const [collapse, setCollapse] = useState(false);

    const initial = (e) => {
        
        let resizable = document.getElementById('Resizable');
        
        setInitialPos(e.clientX);
        setInitialSize(resizable.offsetWidth);
        
    }
    
    const resize = (e) => {
        
        let resizable = document.getElementById('Resizable');
        resizable.style.width = `${parseInt(initialSize) + parseInt(e.clientX - initialPos)}px`;
        if(parseInt(resizable.style.width) < 100)    
            resizable.style.width = '100px'
        if(parseInt(resizable.style.width) > 400)    
            resizable.style.width = '400px'

    }

    const hide = (e) => {
        
        let resizable = document.getElementById('Resizable');
        if(collapse) {
            resizable.style.display = 'inline'
            resizable.style.width = `250px`;
        }
        else {
            resizable.style.display = 'none'
            resizable.style.width = `0px`;
        }

        setCollapse(!collapse)
    }
    

    return(
        <div className = 'Block ml-2'>
            <div id = 'Resizable' className='text-center'>
                <h5 className='quiz-font'>Question</h5>
                <input className='form-control col-lg-12' maxLength={100} placeholder="Code Problem Name"  />
                <h5 className='quiz-font'>Description</h5>
                <textarea className=' col-lg-12' rows={5}></textarea>
            </div>
            <div id = 'Draggable'
                draggable   = 'true'
                onDragStart = {initial} 
                onDrag      = {resize}
                onClick     = {hide}
            >
            </div>
        </div>
    )
}

export default QuestionBar