import React, { useState, useRef } from 'react';
import Card from '../UI/Card.js';
import Button from '../UI/Button.js';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal.js';
import Wrapper from '../Helper/Wrapper.js';


const AddUser = (props) => {
    const userNameRef = useRef();
    const userAgeRef = useRef();
    const [username, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState('');

    const getUserName = (event) => {
        setUserName(event.target.value);
    }
    const getUserAge = (event) => {
        setUserAge(event.target.value);
    }
    const addUserHandler = (event) => {
        event.preventDefault()
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
        setUserAge('');
        setUserName('');
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
                        value={username}
                        onChange={getUserName} />
                    <label htmlFor='userage'>Age</label>
                    <input
                        id='userage'
                        type="text"
                        value={userAge}
                        onChange={getUserAge} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card >
        </Wrapper>
    );
}

export default AddUser;