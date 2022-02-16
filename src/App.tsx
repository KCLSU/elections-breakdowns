import './App.css';
import { useEffect } from 'react';
import useCountData from './hooks/useCountData';
import CountChart from './Chart';
import { Candidate, Stage } from './types';
import Progress from './Progress';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import Header from './Header';


function App() {
  const { data, setPostId } = useCountData();

  console.log(data);

  if (!data) return <p>Loading</p>


  return (
    <div className="App">
      <Modal okText="Back to Results" title="Elections Post Breakdown" width="90%" visible={true} onOk={() => console.log('okay')} onCancel={() => console.log('cancel')}>
        <Header />
        {data.Candidates.map(obj => <Progress stages={data.Stages} candidateId={obj.Id} candidateName={obj.Name} />)}
      </Modal>
    </div>
  );
}

export default App;
