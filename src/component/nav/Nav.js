import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { List } from 'antd';

const Item = List.Item;

const Nav = props => (
    <div className="nav">
        {
            props.list.map((ele, idx) => (
                <Link replace to={ele.url} key={idx}>
                    <List>
                        <Item>{ele.text}</Item>
                    </List>
                </Link>
            ))
        }
        {props.children}
        {props.customEl}
    </div>
);

export default Nav;
