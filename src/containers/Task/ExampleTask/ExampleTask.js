import React from 'react';
import TaskForm from '../../../components/TaskForm';

export default function ExampleTask({ task }) {
    return (
        <TaskForm taskFormFields={task.formFields} submitAction={values => console.log(values)}/>
    )
}