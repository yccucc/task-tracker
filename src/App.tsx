import React, { useState } from 'react';
import TaskItem from './components/TaskItem';
import { Typography, TextField, Button, Container, List, createTheme, ThemeProvider, CssBaseline, IconButton } from '@mui/material';
import { WbSunny, DarkMode } from '@mui/icons-material'; // Import icons for light and dark mode

interface Task {
    text: string;
    completed: boolean;
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<string>('');
    const [darkMode, setDarkMode] = useState<boolean>(false); // State for dark mode

    const handleAddTask = () => {
        if (newTask) {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (taskToDelete: string) => {
        setTasks(tasks.filter(task => task.text !== taskToDelete));
    };

    const handleToggleCompletion = (taskText: string) => {
        setTasks(tasks.map(task =>
            task.text === taskText ? { ...task, completed: !task.completed } : task
        ));
    };

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light', // Set the mode based on the darkMode state
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline /> {/* This helps with consistent styling */}
            <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '300px', position: 'relative' }}>
                <IconButton
                    style={{ position: 'absolute', top: 10, right: 10 }} // Position the icon button in the top right corner
                    onClick={() => setDarkMode(!darkMode)} // Toggle dark mode
                >
                    {darkMode ? <WbSunny /> : <DarkMode />} {/* Change icon based on the mode */}
                </IconButton>
                <Typography variant="h4" gutterBottom>
                    Task Tracker
                </Typography>
                <TextField
                    variant="outlined"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter new task"
                    fullWidth
                    style={{ marginBottom: '10px' }}
                />
                <Button variant="contained" color="primary" onClick={handleAddTask} fullWidth>
                    Add Task
                </Button>
                <List>
                    {tasks.map((task, index) => (
                        <TaskItem
                            key={index}
                            task={task}
                            onDelete={handleDeleteTask}
                            onToggleCompletion={handleToggleCompletion}
                        />
                    ))}
                </List>
            </Container>
        </ThemeProvider>
    );
};

export default App;
