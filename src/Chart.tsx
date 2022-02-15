import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarOptions,
  TooltipItem,
  TooltipCallbacks,
  TooltipModel,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { ChartOptions } from './chartOptions';
import { Stage } from './types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


// type CountChartProps = {
//   stages: ChartStages;
//   candidates: ChartCandidates
// }

const CountChart: React.FC = () => {
  const candidates = {
    60: '60: Test Candidate 1',
    96: '96: Test Candidate 2',
    14: '14: Test Candidate 3',
    81: '81: Test Candidate 4',
  };

  const places = 1;
  const stageNames = ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4'];
  const stages: Stage[] = [
    {
      Number: 1,
      TotalActiveVote: 6,
      NonTransferableDifference: 0,
      Elected: [96],
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


  const options = new ChartOptions(stages);


  function formatData(allStages: Stage[]) {

    return allStages.map((stage: Stage) => {
      const stageData = stage.VoteTotals.map((vtotal) => {

        if (stage.Excluded.includes(vtotal.CandidateId)) return 0;
        return 1;
      });

      const bar = {
        label: `Stage ${stage.Number}`,
        axis: 'y',
        data: stageData,
        borderColor: '#e75829',
        barPercentage: 2,
        barThickness: 50,
        //maxBarThickness: 50,
        //minBarLength: 30,
        backgroundColor: [
          '#e758294a',
          '#e758294a',
          '#e758294a',
          '#e758294a'],
      }
      let winningIndex = 1;
      bar.backgroundColor[winningIndex] = '#e75829';
      return bar;
    });
  }

  const data = {
    labels: ['60: Test Candidate 1',
      '96: Test Candidate 2',
      '14: Test Candidate 3',
      '81: Test Candidate 4',],
    datasets: formatData(stages),
  };

  return <Bar options={options} data={data}
  />;
};

export default CountChart;
