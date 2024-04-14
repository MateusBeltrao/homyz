import React from 'react'
import { Avatar, Menu, Button } from '@mantine/core'
import '@mantine/core/styles.css';

const ProfielMenu = ({ user, logout }) => {
    return (

        <Menu>
            <Menu.Target>
                <Avatar src={user?.picture} alt='user image' radius={"xl"}/>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item>
                    Favourites
                </Menu.Item>

                <Menu.Item>
                    Bookings
                </Menu.Item>

                <Menu.Item onClick={() => {
                    localStorage.clear()
                    logout()
                }}>
                    Logout
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>

    )
}

export default ProfielMenu