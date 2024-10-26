import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface TaskItemProps {
    task: {
        text: string;
        completed: boolean;
    };
    onDelete: (task: string) => void;
    onToggleCompletion: (task: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onToggleCompletion }) => {
    return (
        <ListItem>
            <Checkbox
                checked={task.completed}
                onChange={() => onToggleCompletion(task.text)}
            />
            <ListItemText
                primary={
                    <Typography
                        variant="h6"
                        style={{
                            fontWeight: 'bold',
                            textDecoration: task.completed ? 'line-through' : 'none'
                        }}
                    >
                        {task.text}
                    </Typography>
                }
            />
                <IconButton edge="end" aria-label="delete" onClick={() => onDelete(task.text)}>
                    <DeleteIcon />
                </IconButton>
        </ListItem>
    );
};

export default TaskItem;
