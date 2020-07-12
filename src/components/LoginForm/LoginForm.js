import React from 'react'
import {Formik, Form, ErrorMessage } from 'formik';
import { FormikTextField } from 'formik-material-fields';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { default as MaterialLink } from '@material-ui/core/Link';
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

export default function LoginForm({login}){
    const classes = useStyles();

    const initialValues = {
        username : '',
        password: ''
      }
    
    const validationSchema = Yup.object().shape({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required')
    });
  
    const handleSubmit = (values, { setErrors, setSubmitting}) => {
      login(values, setErrors);
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
          touched //use if needed
        }) =>
            (<Form>
                <div className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                  <div className={classes.form}>
                      <FormikTextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          id="email"
                          label="Username"
                          name="username"
                      />    
                      <FormikTextField
                          type="password"
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          id="password"
                          label="Password"
                          name="password"
                      />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Sign In
                    </Button>
                    <Grid container>
                      <Grid item>
                        <Link to="/register" >
                          <MaterialLink variant="body2">{"Don't have an account? Sign Up"}</MaterialLink>
                        </Link>
                      </Grid>
                    </Grid>
                  </div>
                </div>
            </Form>)}
        </Formik>
      );
}
