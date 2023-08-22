import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Stack } from '@mui/joy';
import { Grid, Paper, Button, Typography, Alert } from '@mui/material';
import { login } from '../../../routes/auth.routes';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call login function from auth.routes.js
            const user = await login(email, password);

            // If user is null, throw error
            if (!user) {
                throw new Error('Invalid credentials');
            }

            // Reset form fields and error message
            setError('');

            // Save user to local storage
            localStorage.setItem('user', JSON.stringify(user));

            // Go to '/' path
            navigate('/');

        } catch (error) {
            setError("Invalid Credentials!");
        }
    };

    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
            <Grid item xs={10} sm={8} md={6} lg={4}>
                <Paper elevation={3} sx={{ padding: '20px 10px' }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2}>
                            <Input
                                placeholder="Email"
                                variant="outlined"
                                fullWidth
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input
                                placeholder="Password"
                                variant="outlined"
                                fullWidth
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <Button variant="contained" fullWidth type="submit">
                                Login
                            </Button>

                            {error && <Alert severity="error">{error}</Alert>}

                            <Typography variant="body1" align="center">
                                Don&apos;t have an account?&nbsp;
                                <Link to="/register"> Register</Link>
                            </Typography>

                        </Stack>
                    </form>
                </Paper>
            </Grid>
        </Grid >
    );
};

export default Login;
