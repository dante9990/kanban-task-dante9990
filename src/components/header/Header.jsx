import React, { useState } from "react";
import avatar from '../../img/user-avatar.svg';
import './Header.css'

function Header() {
    const [visible, setVisible] = useState(false)



    return (
        <header className="header">
            <h1 className='header__title'>Awesome Kanban Board</h1>
            <div className='profile'>
                <img src={avatar} alt="фото профиля" className='profile__avatar' />
                <div className={`profile__arrow ${ !visible ? '' : 'profile__arrow-active'}`} onClick={() => setVisible(!visible)}></div>
                <div className={`profile__menu ${ !visible ? '' : 'profile__menu-active'}`}>
                    <ul className="profile__list">
                        <li className="profile__item">Profile</li>
                        <li className="profile__item">Log Out</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;