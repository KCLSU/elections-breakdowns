
import {
    TooltipItem,
} from 'chart.js';

import { Stage } from './types';

export class ChartOptions {

    stages: Stage[] = [];

    constructor(stages: Stage[]) {
        this.stages = stages;
    }

    indexAxis = 'y' as "x" | "y" | undefined;
    elements = {
        bar: {
            borderWidth: 2,
        },
    }

    maintainAspectRatio = false;
    responsive = true;
    plugins = {
        title: {
            display: true,
            text: 'Breakdown of votes for President',
        },
        tooltip: {
            backgroundColor: '#502767',
            bodyColor: 'white',
            padding: 20,
            titleFont: {
                size: 16
            },
            callbacks: {
                onclick: (cts: any) => console.log(cts),
                title: (context: TooltipItem<"bar">[]) => {
                    const id = +(context[0].label.split(':')[0]);
                    const stage = this.stages[context[0].datasetIndex] as Stage;
                    const candidate = stage.VoteTotals.find(vt => vt.CandidateId === id)
                    return `Votes: ${candidate?.Vote}, Total: ${candidate?.Total}`;
                },
                label: (context: TooltipItem<"bar">) => {

                    return `Stage: ${this.stages[context.datasetIndex].Number}`
                },
                // beforeTitle: (context) => {
                //   return  'before the title',
                // },
                afterTitle: (context: TooltipItem<"bar">[]) => {
                    const id = +(context[0].label.split(':')[0]);
                    console.log(context)
                    console.log(id)
                    const stage = this.stages[context[0].datasetIndex] as Stage;
                    console.log(stage)
                    if (stage.Elected.includes(id)) return 'Student Elected';
                    else if (stage.Excluded.includes(id)) return 'Student Excluded from Stage';
                    else return 'Student Counted Votes Receive Quota'
                },
            }
        }
    };

    scales = {
        x: {
            stacked: true,
            ticks: {
                // Include a dollar sign in the ticks
                callback: function (value: any) {
                    if (Math.floor(value) === value) {
                        return 'Stage ' + value;
                    }

                }
            },
            weight: 1
        },
        y: {
            stacked: true,
        },
    }
};