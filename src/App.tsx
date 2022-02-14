import './App.css';
import { useEffect } from 'react';
import useCountData from './hooks/useCountData';
import CountChart from './Chart';
import { Candidate, Stage } from './types';

function App() {
  const { data, setPostId } = useCountData();

  // useEffect(() => {
  //   window.addEventListener('emitClick', (e: any) => {
  //     console.log('Click Received');
  //     console.log(e)
  //     console.log(e.detail)
  //     setPostId(e.detail)
  //   })
  // })

  console.log(data);

  let candidates: Candidate[] = [];
  let stages: Stage[] = [];

  if (data) {
    stages = data.Stages;
    candidates = data.Candidates;
  }

  return (
    <div className="App">
      <div className="chart-container">
        {/* <CountChart stages={stages} candidates={candidates} /> */}
        <CountChart />
      </div>
    </div>
  );
}

export default App;
