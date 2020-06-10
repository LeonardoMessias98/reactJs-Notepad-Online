import React, {useState, useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Layout, Input, Menu } from 'antd';

import { SaveOutlined, DeleteOutlined, 
    FileOutlined, SettingOutlined, CoffeeOutlined, 
    BulbOutlined, HomeOutlined} from '@ant-design/icons';

const { Header, Sider } = Layout;
const { SubMenu } = Menu;
const { TextArea} = Input;

function Note(props){
  const [colapse, setColapse] = useState(true);
  const [theme,setTheme] = useState('dark');
  const [dark, setDark] = useState('#001529');
  const [h1Header, setH1Header] = useState('white');

  const history = useHistory();
  
  const [noteData,setNoteData] = useState({});
  const state = history.location.state;

  const dispach = useDispatch();

  console.log(noteData)
  
  useEffect(()=>{
    if(state){
      setNoteData(state);
    }else{
      const id = Math.random().toString(36).substring(7);
      setNoteData({id, title:'', text:''})
    }

  }, [])


  function handleColapse(){

    if(colapse){
      setColapse(false);
      return;
    }else{
      setColapse(true)
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

  function handleSaveNote(){
    const titleValue = document.querySelector('input').value;
    const textValue = document.querySelector('textarea').value;

    const note = {
        id:noteData.id,
        titleValue,
        textValue
      };

    dispach({
      type:'SAVE_NOTE',
      note,
    })

  }

  function handleGoToHome(){
    history.push('/main')
  }

  return(
    <Layout>      
      <Header  
        style={{background:dark}}
        className='header-title'
        >        
        <h1 style={{color:h1Header}}>Anotações Online</h1>
      </Header>

      <Layout>
        <Sider theme={theme} collapsed={colapse} collapsible onCollapse={handleColapse}>
          <Menu 
            mode='inline' 
            theme={theme}
            style={{alignSelf:'center', width:'100%'}}>
            <SubMenu title={'Menu'} icon={<FileOutlined />}>
              <Menu.Item 
                icon={<SaveOutlined />}
                onClick={handleSaveNote}
                >
                  Save File
                </Menu.Item>
              <Menu.Item 
                icon={<DeleteOutlined />}
                onClick={()=>{dispach({ type: 'DELETE_NOTE', id : noteData.id })}}
                >Delete File</Menu.Item>   
            </SubMenu>

            <SubMenu title={'Dark Theme'} icon={<SettingOutlined />} >
              <Menu.Item 
                icon={<CoffeeOutlined />}
                onClick={()=>{handleTheme('dark')}}
                >
                  Dark Mode
                </Menu.Item>
              <Menu.Item 
                icon={<BulbOutlined />}
                onClick={()=>{handleTheme('light')}}
                >
                  Light Mode
                </Menu.Item> 
            </SubMenu>
            
            <Menu.Item 
              onClick={handleGoToHome}
              icon={<HomeOutlined />}>
              Voltar para home
            </Menu.Item>
          </Menu>
        </Sider>
        <Input.Group style={{width:'100%'}}>
          <Input 
            placeholder='Titulo'
            defaultValue={history.location.state ? history.location.state.title : ''}
            style={{
              width:'100%',
              height:'50px',
              fontSize:'20px',
            }}
            >
          </Input>
          <TextArea 
            style={{
              resize:'none', 
              height:'100vh', 
              fontSize:'24px',
            }}
            defaultValue={history.location.state ? history.location.state.text : ''}
            
          >
            Digite um texto ...
          </TextArea>
        </Input.Group>

      </Layout>      
    </Layout>       
    
  )
}

export default connect()(Note);