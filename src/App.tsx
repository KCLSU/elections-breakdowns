import './App.css';
import { useEffect, useState } from 'react';
import useCountData from './hooks/useCountData';
import CountChart from './Chart';
import { Candidate, Stage } from './types';
import Progress from './Progress';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import Header from './Header';
import Tables from './Tables';
import Bars from './Bars';


function App() {
  const { data, setPostId } = useCountData();

  const [view, setView] = useState<'table' | 'bars'>('bars')

  console.log(data);

  if (!data) return <p>Loading</p>


  return (
    <div className="App">
      <Modal okText="Back to Results" title="Elections Post Breakdown" width="90%" visible={true} onOk={() => console.log('okay')} onCancel={() => console.log('cancel')}>
        <Header setView={setView} />
        {view === 'table' && <Tables stages={data.Stages} />}
        {view === 'bars' && <Bars candidates={data.Candidates} stages={data.Stages} />}
      </Modal>
    </div>
  );
}

export default App;
