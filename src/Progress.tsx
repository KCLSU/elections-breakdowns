import { ProgressBar, Step } from "react-step-progress-bar"
import "react-step-progress-bar/styles.css";
import { Stage, ChartCandidates } from './types';

type ProgressProps = {
    stages: Stage[];
    candidates?: ChartCandidates;
}

const Progress: React.FC<ProgressProps> = ({ stages }) => {

    const candidateId = 96;

    const excludedStageIndex = stages.findIndex(stages => stages.Excluded.includes(candidateId));
    const winningCandidate = false;

    const finalStage = excludedStageIndex > 0 ? excludedStageIndex + 1 : stages.length;

    console.log({ finalStage, excludedStageIndex });
    console.log(finalStage / stages.length * 100);

    const handleStageClick = (vote: number) => {
        console.log('CLICKED');
        console.log(vote)
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '15px' }}>
            Hello
            <div style={{ padding: '4rem', width: '100%' }}>
                <ProgressBar

                    percent={finalStage / (stages.length) * 100}
                    filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                >
                    <Step transition="scale">
                        {({ accomplished }) => (
                            <div style={{ background: '#502767', color: 'white' }}>
                                0
                            </div>
                        )}
                    </Step>

                    {stages.map(stage => {

                        const candidate = stage.VoteTotals.find(voteT => voteT.CandidateId === candidateId)

                        return (
                            <Step transition="scale">
                                {({ accomplished }) => (
                                    <div onClick={() => handleStageClick(candidate?.Vote || 0)} style={{ background: '#502767', color: 'white' }}>
                                        {stage.Number}
                                    </div>
                                )}
                            </Step>
                        )
                    })}
                </ProgressBar>
            </div>
        </div>
    )
};

export default Progress; 