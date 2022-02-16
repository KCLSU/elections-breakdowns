import { useState } from "react";
import { ProgressBar, Step } from "react-step-progress-bar"
import "react-step-progress-bar/styles.css";
import { Stage, ChartCandidates } from './types';
import { Popover } from 'antd';
import StagePoint from "./StagePoint";
import styled from "styled-components";

type ProgressProps = {
    stages: Stage[];
    candidateId: number;
    candidateName: string;
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
`

const Bar = styled.div`
    width: 100%;
    padding: 3rem 1rem;
`


const Progress: React.FC<ProgressProps> = ({ stages, candidateId, candidateName }) => {


    const excludedStageIndex = stages.findIndex(stages => stages.Excluded.includes(candidateId));
    const winningCandidate = false;

    const finalStage = excludedStageIndex > 0 ? excludedStageIndex + 1 : stages.length;

    console.log({ finalStage, excludedStageIndex });
    console.log(finalStage / stages.length * 100);

    return (
        <Container>
            {candidateName}
            <Bar>
                <ProgressBar
                    percent={finalStage / (stages.length) * 100}
                    filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                >
                    <Step transition="scale">
                        {({ accomplished }) => (
                            <div style={{ color: 'white' }}>
                                0
                            </div>
                        )}
                    </Step>

                    {stages.map(stage => {

                        const candidate = stage.VoteTotals.find(voteT => voteT.CandidateId === candidateId)!

                        return (
                            <Step transition="scale">
                                {({ accomplished }) => {
                                    const elected = stage.Elected.find(id => id === candidate.CandidateId);
                                    const excluded = stage.Excluded.find(id => id === candidate.CandidateId);
                                    return (
                                        <>
                                            <StagePoint
                                                stageNumber={stage.Number}
                                                voteCount={candidate?.Vote}
                                                voteTotal={candidate.Total}
                                                nonTransferrable={stage.NonTransferableDifference}
                                                activeVote={stage.TotalActiveVote}
                                                elected={!!elected}
                                                excluded={!!excluded}
                                            />
                                            {elected && <p style={{ fontSize: '2rem' }}>🏆</p>}
                                        </>
                                    )
                                }}
                            </Step>
                        )
                    })}
                </ProgressBar>
            </Bar>
        </Container >
    )
};

export default Progress; 