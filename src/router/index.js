import React from "react";
import {Route, Link} from 'react-router-dom'

const menus = [
    {
        name: 'Trang chu',
        to: '/',
        exact: true
    },
    {
        name: 'Users',
        to: '/users',
        exact: false
    },
    {
        name: 'Tasks',
        to: '/tasks',
        exact: false
    }
]