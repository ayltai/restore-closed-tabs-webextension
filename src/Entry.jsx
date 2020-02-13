import { Avatar, ListItem, ListItemAvatar, ListItemIcon, ListItemText, makeStyles, Tooltip, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

export const Entry = props => {
    const useStyles = makeStyles(() => ({
        icon    : {
            width  : 16,
            height : 16,
        },
        wrapper : {
            minWidth : 32,
        },
    }));

    const classes = useStyles();

    return (
        <ListItem
            button={props.clickable}
            dense
            disabled={!props.clickable}
            onClick={props.clickable ? props.onClick : undefined}>
            {props.icon && React.isValidElement(props.icon) ? (
                <ListItemIcon className={classes.wrapper}>
                    {props.icon}
                </ListItemIcon>
            ) : (
                <ListItemAvatar className={classes.wrapper}>
                    <Avatar
                        className={classes.icon}
                        variant='square'
                        src={props.icon} />
                </ListItemAvatar>
            )}
            <ListItemText
                disableTypography
                primary={
                    <Tooltip title={props.title}>
                        <Typography noWrap>
                            {props.title}
                        </Typography>
                    </Tooltip>
                } />
        </ListItem>
    );
};

Entry.propTypes = {
    icon      : PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
    ]),
    title     : PropTypes.string.isRequired,
    clickable : PropTypes.bool,
    onClick   : PropTypes.func,
};
