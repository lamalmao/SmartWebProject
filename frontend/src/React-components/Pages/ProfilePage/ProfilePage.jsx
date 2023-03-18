import React from 'react';
import st from './ProfilePage.module.css'
import ModalWindow from '../../UI-Components/ModalWindow/ModalWindow'
import QuizForm from '../../Components/QuizForm/QuizForm';


const ProfilePage = () => {
    return (
        <div>
            <ModalWindow><QuizForm /></ModalWindow>
        </div>
    );
};