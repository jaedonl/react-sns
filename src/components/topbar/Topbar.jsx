import React from 'react'
import "./Topbar.scss"
import {Search, Person } from '@material-ui/icons';


const Topbar = () => {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Jaedon SNS</span>
            </div>

            <div className="topbarCenter">
                <div className="searchBar">
                    <Search />
                    <input placeholder="Search for friend, post, or video" className="searchInput" />
                </div>
            </div>

            <div className="topbarRight">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <Person />
            </div>
        </div>
    )
}

export default Topbar
