import React, { useState } from 'react';
import { ResponsiveContainer, LineChart,
     CartesianGrid, XAxis, YAxis, Tooltip,
    Legend, Line } from 'recharts';

export default function Previsoes(props) {

    const [data] = useState(props.session.gerarPrevisao());

    return(
        <ResponsiveContainer height="90%" >
            <LineChart data={data} >
                <CartesianGrid />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" stroke="#3F51B5" />
                <YAxis yAxisId="right" stroke="#90A4AE" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="Renda" stroke="#3F51B5" />
                <Line yAxisId="right" type="monotone" dataKey="Acumulado" stroke="#90A4AE" />
            </LineChart>
        </ResponsiveContainer>
    )
}