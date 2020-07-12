import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ExampleTask from '../ExampleTask';

const useStyles = makeStyles({
    root: {
      minWidth: 500,
    },
  });

export default function BaseTask({ getNextTask, currentTask }) {
    const classes = useStyles();

    useEffect(() => {
        getNextTask();
    }, []);

    if(!currentTask) {
        return null;
    }

    const taskComponents = {
        'ExampleTask' : <ExampleTask task={currentTask}/>
    }
    
    const Task = taskComponents[currentTask.name];

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    { currentTask.name }
                </Typography>
                {Task}
            </CardContent>
        </Card>
    );    
}
