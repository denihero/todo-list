import React from 'react';


function RightClick(props) {

    const contextMenu = document.getElementById('context-menu');
    const scope = document.querySelector('body');

    scope.addEventListener('contextmenu',(event) =>{
       event.preventDefault();

       const {clientX:mouseX,clientY:mouseY} = event;

       contextMenu.style.top = `${mouseY}px`;
       contextMenu.style.left = `${mouseX}px`;

       contextMenu.classList.add('visible');
    });

    scope.addEventListener('click', (e) => {
       if(e.target.offsetParent !== contextMenu) {
           contextMenu.classList.remove('visible');
       }
    });
    return (
        <div>
            <div id='context-menu'>
                <div className='item'>Option 1</div>
                <div className='item'>Option 2</div>
            </div>
        </div>
    );
}

export default RightClick;