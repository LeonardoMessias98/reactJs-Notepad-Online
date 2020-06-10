import React from 'react';
import { useHistory } from 'react-router-dom'
import { Layout,  } from 'antd'
import Button from '../../components/atoms/Button/Button'

import './style.css'

import imageNotePad from '../../assets/notepad.png'

const { Content, Header, Footer } = Layout

export default function InitialPage(){
  const history = useHistory();

  function handleGoToMain(){
    history.push('/main');
  }

  return(
    <Layout style={{paddingTop:'10%'}} className='layout-initial center'> 
      <img src={imageNotePad} style={{width:'100px'}} />
      <Content className='content-initial center'>
        <h1>Bem vindo ao Anotações Online</h1>
        <h4>Website construido para o aprendizado do Ant Design e Redux</h4>
      
        <Button 
          size='large'
          style={{width:'150px'}}
          type={'primary'}
          onClick={handleGoToMain}>
            Ir para main page
          </Button>
      </Content>
    </Layout>
  )
}