import React from 'react';
import TaskForm from '../../../components/TaskForm';

export default function ExampleTask({ currentTask, completeTask }) {
    return (
        <TaskForm taskFormFields={currentTask.formFields} submitAction={completeTask}/>
    )
}