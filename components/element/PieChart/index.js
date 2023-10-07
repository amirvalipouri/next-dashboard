import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer , Label } from 'recharts'

const Piechart = ({
    data = [],
    COLORS = [],
    label = "",
}) => {
    return (
        <div className="flex-center" style={{ width: '100%', height: 200 }}>
            <ResponsiveContainer>
                <PieChart  >
                    <Pie
                        data={data}
                        cx="50%"
                        cy={100}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        <Label width={70} value={label} position="center" />
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Piechart