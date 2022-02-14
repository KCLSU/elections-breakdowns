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
import { Candidate, ChartCandidates, ChartStages, Stage } from './types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const stageNames = ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4'];
const stageDuplicate: Stage[] = [
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


export const options = {
  indexAxis: 'y' as "x" | "y" | undefined,
  elements: {
    bar: {
      borderWidth: 2,
      barThickness: 'flex',
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Breakdown of votes for President',
    },
    tooltip: {
      callbacks: {
        title: (context: TooltipItem<"bar">[]) => {
          const id = +(context[0].label.split(':')[0]);
          const stage = stageDuplicate[context[0].datasetIndex] as Stage;
          const candidate = stage.VoteTotals.find(vt => vt.CandidateId === id)
          return `Votes: ${candidate?.Vote}, Total: ${candidate?.Total}`;
        },
        label: (context: TooltipItem<"bar">) => {

          return `Stage: ${stageDuplicate[context.datasetIndex].Number}`
        },
        // beforeTitle: (context) => {
        //   return  'before the title',
        // },
        afterTitle: (context: TooltipItem<"bar">[]) => {
          const id = +(context[0].label.split(':')[0]);
          console.log(context)
          console.log(id)
          const stage = stageDuplicate[context[0].datasetIndex] as Stage;
          console.log(stage)
          if (stage.Elected.includes(id)) return 'Student Elected';
          else if (stage.Excluded.includes(id)) return 'Student Excluded from Stage';
          else return 'Student Counted Votes Receive Quota'
        },
        // beforeLabel: (context: TooltipItem<"bar">) => {
        //   return 's'
        // }
        // afterBody: (context) => {
        //   return  'after body',
        // },
        // beforeFooter: (context) => {
        //   return  'before the footer',
        // },
        // footer: (context) => {
        //   return  'THE ACTUAL FOOTER',
        // },
        // afterFooter: (context) => {
        //   return  'afterfooter',
        // },
      }
    }
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};


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

  function formatData(allStages: Stage[]) {
    return allStages.map((stage: Stage) => {
      const stageData = stage.VoteTotals.map((vtotal) => {
        if (stage.Excluded.includes(vtotal.CandidateId)) return 0;
        return 1;
      });
      return {
        label: `Stage Number`,
        axis: 'y',
        data: stageData,
        borderColor: 'rgb(255, 99, 132)',
        barPercentage: 1,
        barThickness: 30,
        //maxBarThickness: 50,
        //minBarLength: 30,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'],
      };
    });
  }

  const data = {
    labels: ['60: Test Candidate 1',
      '96: Test Candidate 2',
      '14: Test Candidate 3',
      '81: Test Candidate 4',],
    datasets: formatData(stages),
  };

  return <Bar options={options} data={data} />;
};

export default CountChart;
