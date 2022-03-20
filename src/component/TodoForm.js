import React, {useState,useEffect,useRef} from 'react';

function TodoForm(props)  {

    const [input,setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })


    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random() * 10000),
            text:input
        });

        setInput('');
    }

    const handleChange = e => {
        setInput(e.target.value);
    }

    return (
            <form autoComplete='off' className='todo-form' onSubmit={handleSubmit}>
                {props.edit ? (
                    <>
                    <input type='text'
                                      placeholder='Update your item'
                                      value={input}
                                      name='text'
                                      className='todo-input edit'
                                      onChange={handleChange}
                                      ref={inputRef}/>
                    </>
                ): (
                        <>
                        <input type='text'
                             placeholder='Write your task'
                             value={input}
                             name='text'
                             className='todo-input'
                             onChange={handleChange}
                             ref={inputRef}/>
                    </>
                    )}

            </form>
        );

}

export default TodoForm;