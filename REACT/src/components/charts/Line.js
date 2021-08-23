import './line.scss'

import React, { PureComponent } from 'react';
import { LineChart, Line, YAxis, ResponsiveContainer } from 'recharts';

export default function Charts() {

    const data = [
        {
            a: 450,
            b: 250,
        },
        {
            a: 100,
            b: 400,
        },
        {
            a: 500,
            b: 250,
        },
        {
            a: 300,
            b: 450,
        },
        {
            a: 600,
            b: 200,
        },
        {
            a: 400,
            b: 550,
        },
    ];

    return (
        <div className="chart">
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart
                    data={data}
                    stroke="#5550bd"
                >
                    <YAxis />
                    <Line type="monotone" dataKey="b" stroke="#02ca23" />
                    <Line type="monotone" dataKey="a" stroke="#ff501b" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
