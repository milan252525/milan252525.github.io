import React from "react";
import { Layout } from "antd"

import PageHeader from "../components/header"
import kenobiGIF from "../images/hellothere.gif"

const { Content, Footer } = Layout;


const IndexPage = () => {
    return (
        <main>
            <title>milan_25</title>
           
            <Layout>
                <PageHeader />
                <Content style={{marginTop:"1vh"}}>
                    <img 
                        src={kenobiGIF} 
                        alt="General Kenobi saying 'Hello there'"
                        width="50%"
                    />
                
                    {new Array(20).fill(null).map( (_, index) => {
                        return <p>Hello there!</p>
                    })}
                </Content>
                    
                <Footer style={{ textAlign: 'center' }}>
                    This site is under development! @2021 milan_25
                </Footer>
            </Layout>
            
        </main>
    );
}
  
export default IndexPage
