import React from "react"
import { Layout } from "antd"

import PageHeader from "../components/header"
import travoltaGIF from "../images/travolta.gif"

const { Content, Footer } = Layout;

const NotFoundPage = () => {
    return (
        <main>
            <title>Not found</title>
            
            <Layout>
                <PageHeader />
                <Content style={{marginTop:"1vh", marginLeft:"1vw"}}>
                    <h1>404 - Page not found</h1>
                
                    <img 
                        src={travoltaGIF} 
                        alt="Confused Travolta"
                    />
                </Content>
                    
                <Footer style={{ textAlign: 'center' }}>
                    This site is under development! @2021 milan_25
                </Footer>
            </Layout>
        </main>
    )
}

export default NotFoundPage
