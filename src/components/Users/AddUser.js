import React, { useState, useRef } from 'react';
import Card from '../UI/Card.js';
import Button from '../UI/Button.js';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal.js';
import Wrapper from '../Helper/Wrapper.js';

const AddUser = (props) => {
    const userNameRef = useRef();
    const userAgeRef = useRef();
    const [error, setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault()
        const username = userNameRef.current.value;
        const userAge = userAgeRef.current.value;
        if (username.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'plz enter the valid input'
            });
            return;
        }
        if (Number(userAge) < 0) {
            setError({
                title: 'Invalid Input',
                message: 'Age should be posstive number'
            });
            return;
        }
        props.onAddUser(username, userAge);
        userNameRef.current.value = '';
        userAgeRef.current.value = '';
    }
    const errorHandler = () => {
        setError('');
    }
    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Add User</label>
                    <input
                        id='username'
                        type="text"
                        ref={userNameRef}
                    />
                    <label htmlFor='userage'>Age</label>
                    <input
                        id='userage'
                        type="text"
                        ref={userAgeRef}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card >
        </Wrapper>
    );
}
export default AddUser;