import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import { BrowseGallery, Logout, PhotoAlbum } from '@mui/icons-material';



export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItemButton>
        <Link to='/umngane/blog-articles' style={{ textDecoration: 'none', color: '#333333' }}>
            <ListItemButton >
                <ListItemIcon>
                    <BrowseGallery />
                </ListItemIcon>
                <ListItemText primary="Blog Articles" />
            </ListItemButton>
        </Link>
        <Link to='/umngane/gallery' style={{ textDecoration: 'none', color: '#333333' }}>
            <ListItemButton >
                <ListItemIcon>
                    <PhotoAlbum />
                </ListItemIcon>
                <ListItemText primary="Gallery" />
            </ListItemButton>
        </Link>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItemButton>
    </React.Fragment>
);