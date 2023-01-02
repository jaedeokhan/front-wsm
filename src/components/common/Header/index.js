import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Navigation from './Navigation';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static">
                <Toolbar>
                    <Typography component={RouterLink} to="/" variant="h6" color="inherit" noWrap>
                        Woori Share Market
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Navigation />
                </Toolbar>
            </AppBar>       
        </Box>
    );
}

export default Header;