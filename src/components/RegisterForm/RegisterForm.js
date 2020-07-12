import React from 'react';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import { FormikTextField } from 'formik-material-fields';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TextField from '@material-ui/core/TextField';
import { default as MaterialLink} from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegisterForm({register}){
    const classes = useStyles();

    const initialValues = {
        username: '',
        password: '',
        firstName: '',
        lastName: ''
      }
    
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required(),
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required')
    });

    const handleSubmit = (values, { resetForm, setErrors, setSubmitting}) => {
        register(values, setErrors);
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema = {validationSchema}
            onSubmit={handleSubmit}
        >
        {({
            isSubmitting,
            errors,
            touched
        }) => 
            <Form>
                <div className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <PersonAddIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign Up
                  </Typography>
                  <div className={classes.form}>
                    <FormikTextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="first_name"
                      label="First Name"
                      name="firstName"
                    />
                    <FormikTextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="last_name"
                      label="Last Name"
                      name="lastName"
                    />
                    <FormikTextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                    />
                    <FormikTextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Sign Up
                    </Button>
                    <Grid container>
                      <Grid item>
                        <Link to="/login">
                          <MaterialLink variant="body2">{"Log in instead"}</MaterialLink>
                        </Link>
                      </Grid>
                    </Grid>
                  </div>
                </div>
            </Form>}
        </Formik>
      );
}
