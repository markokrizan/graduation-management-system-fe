import React from 'react';

import {Formik, Form, ErrorMessage } from 'formik';
import { FormikTextField } from 'formik-material-fields';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import createSchemaFromTaskFormConfig from '../../util/yupUtils';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
},
}));

export default function TaskForm({ taskFormFields, submitAction }) {
    const classes = useStyles();

    const validationSchema = createSchemaFromTaskFormConfig(taskFormFields);

    const renderFields = () => {
        return taskFormFields.map(taskFormField => (
            <FormikTextField
                variant="outlined"
                margin="normal"
                fullWidth
                id={taskFormField.id}
                label={taskFormField.label}
                name={taskFormField.id}
            />    
        ));
    }

    return (<Formik
                validationSchema = {validationSchema}
                onSubmit={submitAction}
            >
            {({
                isSubmitting, //use if needed
                errors, //use if needed
                touched //use if needed
            }) =>
                (<Form>
                    <div className={classes.paper}>
                        <div className={classes.form}>
                            {renderFields()}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </Form>)}
    </Formik>)
}
