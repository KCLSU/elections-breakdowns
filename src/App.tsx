import './App.css';
import { useEffect, useState } from 'react';
import useCountData from './hooks/useCountData';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import Header from './Header';
import Tables from './Tables';
import Bars from './Bars';
import styled from 'styled-components';


const Canvas = styled.div`
  padding: 1rem;
  .ant-page-header.has-footer {
    padding: 0;
  }

`


function App() {
  const { data, setPostId } = useCountData();

  const [view, setView] = useState<'table' | 'bars'>('bars')

  console.log(data);

  if (!data) return <p>Loading</p>


  return (
    <div className="App">
      <Modal okText="Back to Results" title="Elections Post Breakdown" width="90%" visible={true} onOk={() => console.log('okay')} onCancel={() => console.log('cancel')}>
        <Canvas>
          <Header setView={setView} />
          {view === 'table' && <Tables candidates={data.Candidates} stages={data.Stages} />}
          {view === 'bars' && <Bars candidates={data.Candidates} stages={data.Stages} />}
        </Canvas>
      </Modal>
    </div>
  );
}

export default App;
