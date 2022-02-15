import './App.css';
import { useEffect } from 'react';
import useCountData from './hooks/useCountData';
import CountChart from './Chart';
import { Candidate, Stage } from './types';
import Progress from './Progress';


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

  const stages: Stage[] = [
    {
      Number: 1,
      TotalActiveVote: 6,
      NonTransferableDifference: 0,
      Elected: [],
      Excluded: [],
      VoteTotals: [
        {
          CandidateId: 60,
          Vote: 8,
          Total: 8,
        },
        {
          CandidateId: 96,
          Vote: 41,
          Total: 41,
        },
        {
          CandidateId: 14,
          Vote: 4,
          Total: 4,
        },
        {
          CandidateId: 81,
          Vote: 31,
          Total: 31,
        },
      ],
    },
    {
      Number: 2,
      TotalActiveVote: 6,
      NonTransferableDifference: 0,
      Elected: [96],
      Excluded: [14],
      VoteTotals: [
        {
          CandidateId: 60,
          Vote: 0,
          Total: 8,
        },
        {
          CandidateId: 96,
          Vote: 1,
          Total: 42,
        },
        {
          CandidateId: 14,
          Vote: -4,
          Total: 0,
        },
        {
          CandidateId: 81,
          Vote: 0,
          Total: 31,
        },
      ],
    },
    {
      Number: 3,
      TotalActiveVote: 0,
      NonTransferableDifference: 0,
      Elected: [],
      Excluded: [],
      VoteTotals: [
        {
          CandidateId: 60,
          Vote: 0,
          Total: 8,
        },
        {
          CandidateId: 96,
          Vote: 0,
          Total: 42,
        },
        {
          CandidateId: 14,
          Vote: 0,
          Total: 0,
        },
        {
          CandidateId: 81,
          Vote: 0,
          Total: 31,
        },
      ],
    },
  ];

  const labels = ['60: Test Candidate 1',
    '96: Test Candidate 2',
    '14: Test Candidate 3',
    '81: Test Candidate 4']

  console.log(data);

  let candidates: Candidate[] = [];
  // let stages: Stage[] = [];

  if (data) {
    // stages = data.Stages;
    candidates = data.Candidates;
  }

  return (
    <div className="App">
      <Progress stages={stages} />
      {/* <div className="chart-container">
        <CountChart stages={stages} candidates={candidates} labels={labels} />

      </div> */}
    </div>
  );
}

export default App;
