import React from 'react';
import { Dropdown } from 'react-bootstrap';

export default function CustomDropdown(props) {
    return (
        <Dropdown className="custom-dropdown" as="div">
            <Dropdown.Toggle as="div">
                <i className="fa fa-ellipsis-v"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-right">{props.children}</Dropdown.Menu>
        </Dropdown>
    );
}
