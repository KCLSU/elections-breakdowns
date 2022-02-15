import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { ChartOptions } from './chartOptions';
import { Stage, ChartCandidates } from './types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


type CountChartProps = {
  stages: Stage[];
  candidates: ChartCandidates;
  labels: string[];
}

const CountChart: React.FC<CountChartProps> = ({ stages, candidates, labels }) => {


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
    labels,
    datasets: formatData(stages),
  };

  return <Bar options={options} data={data} />;
};

export default CountChart;
