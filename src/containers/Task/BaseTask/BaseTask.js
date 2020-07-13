import React, { useEffect, createElement } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ExampleTask from '../ExampleTask';

const useStyles = makeStyles({
    root: {
      minWidth: 500,
    },
  });

const taskComponents = {
    'ExampleTask' : ExampleTask
}

export default function BaseTask({ getNextTask, completeTask, currentTask }) {
    const classes = useStyles();

    useEffect(() => {
        getNextTask();
    }, []);

    if(!currentTask) {
        return null;
    }

    const Task = createElement(taskComponents[currentTask.name], {
        currentTask,
        completeTask
    });

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    { currentTask.name }
                </Typography>
                {taskComponents[currentTask.name] ? Task : (
                     <Typography gutterBottom variant="p">
                        {"Task component missing"}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );    
}
