import React from 'react'
import { SidebarMenu } from './SidebarMenu'
import Avatar from "@material-ui/core/Avatar";
import './Sidebar.css'

const Sidebar = () => {
    return (
        <>
        
        <div className="sidebar">
        <div style={{ display: "flex" }}>
        <Avatar className="avatar">H
        </Avatar>
        
        </div>
        <div className="both">
        <span className="name">Tarun chaudhary</span>
        <span className="email">tarunchaudhary@ddtech.in</span>
        </div>
            <ul className="sidebarList">
            {SidebarMenu.map((val,key)=> {
                return(
                    <li 
                    key={key} 
                    id={window.location.pathname === val.link ? "active" : ""}
                    className="row" 
                    onClick={()=> {window.location.pathname = val.link}}>
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                        </li>
                )
            })}
            </ul>
            
        </div>
        </>
    )
}

export default Sidebar
