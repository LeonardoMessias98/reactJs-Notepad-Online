import React, {useState} from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import {  Layout, Menu, Card  } from 'antd';
import {EditOutlined, SettingOutlined, EllipsisOutlined,
    FileAddOutlined,RightSquareOutlined, DownSquareOutlined, 
    FileOutlined, CoffeeOutlined, BulbOutlined} from '@ant-design/icons';

import 'antd/dist/antd.css';
import './style.css';

const { SubMenu } = Menu
const { Header, Footer, Sider, Content } = Layout;

function Main({ note }){
  const [colapse, setColapse] = useState(true);
  const [theme,setTheme] = useState('dark');
  const [mode,setMode] = useState('vertical');
  const [dark, setDark] = useState('#001529');
  const [h1Header, setH1Header] = useState('white');

  const history = useHistory();

  function handleColapse(){
    if(colapse){
      setColapse(false);
      return;
    }else{
      setColapse(true);
    }
  }

  function handleTheme(theme){
    if(theme === 'dark'){
      setTheme('dark');
      setDark('#001529');
      setH1Header('white');
    }else{
      setTheme('light');
      setDark('white');
      setH1Header('#001529');
    }
   
  }

  function handleEdit(title,text,id){
    const data = {title,text,id}

    history.push('/note', data);
  }

  return(
   
    <Layout className='main-layout'>
      <Sider 
        collapsible={true} 
        collapsed={colapse} 
        onCollapse={handleColapse}
        theme={theme}
        >
        <Menu theme={theme} mode={'vertical'}>
       
            
          <SubMenu 
            key="conta" 
            title="Conta"
            mode={mode}
            icon={<FileOutlined />}
            >
            <Menu.Item 
              key="1" 
              icon={<FileAddOutlined/>}
              onClick={()=>{history.push('/note')}}
              >
                Criar novo arquivo
              </Menu.Item>
          </SubMenu>
                         
          <SubMenu 
            key="tema" 
            title="Tema"
            mode={mode}
            icon={<SettingOutlined />}
            >
            <Menu.Item 
              key="5" 
              onClick={()=>{handleTheme('dark')}
              }><CoffeeOutlined /> Dark Theme</Menu.Item>

            <Menu.Item 
              key="6" 
              onClick={()=>{handleTheme('light')}
              }><BulbOutlined />Light Theme</Menu.Item>
          </SubMenu>

          <SubMenu 
            key="Modo" 
            title="Modo"
            mode={mode}
            >
            <Menu.Item 
              key="7" 
              onClick={()=>{setMode('vertical')}}
              ><RightSquareOutlined />Right content mode</Menu.Item>

            <Menu.Item 
              key="8" 
              onClick={()=>{setMode('horizontal')}}
              ><DownSquareOutlined />Down content mode</Menu.Item>
          </SubMenu>

          
        </Menu>
      </Sider>
      <Layout>
        <Header  
          style={{background:dark}}
          className='header-title'>
            <h1 style={{color:h1Header}}>
              <a href='/' style={{textDecoration:'none', color:h1Header}}>
                Anotações Online
              </a>
            </h1>
          </Header>
        <Content className='note-group'>
          {note.map(each_note => (
            <Card
              key={each_note.id}
              title={each_note.titleValue}
              size={'default'}
              hoverable
              bodyStyle={{height:'100px',overflow:'hidden'}}
              style={{height:'max-content', margin:'10px'}}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" 
                  onClick={()=>{
                    handleEdit(
                      each_note.titleValue,
                      each_note.textValue ,
                      each_note.id)
                    }}/>,
                    
                <EllipsisOutlined key="ellipsis" />,
              ]}
              >
              {each_note.textValue}
            </Card>
          ))}
        </Content>

        <Footer 
          style={
            {borderTop:'1px solid rgba(169, 169, 169, 0.76)', textAlign:'center'}
          }>
            Developed by: <a 
              href='https://www.linkedin.com/in/leonardo-messias-89568818a/'
              target='blank'
            >
              Leonardo Messias
            </a>
          </Footer>
      </Layout>
      
      
    </Layout>
  ) 
}

export default connect(state => ({
  note: state.note,
}))(Main)