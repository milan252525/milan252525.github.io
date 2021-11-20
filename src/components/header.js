import React from 'react'
import { Layout} from "antd"
import { Link } from "gatsby"

import { header, grid, name, link1, link2 } from './header.module.css'

const { Header } = Layout;

const PageHeader = () => {
    return(
        <Header className={header}>
            <div className={grid}>
                <div className={name}>milan_25</div>
                <div className={link1}>
                    <Link to="/aboutme">About Me</Link>
                </div>
                <div className={link2}>
                    <Link to="/contacts">Contacts</Link>
                </div>
            </div>
            <br/>
        </Header>
    )
}

export default PageHeader