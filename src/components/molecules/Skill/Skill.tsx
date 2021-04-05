import React, { FunctionComponent } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';

export interface SkillData {
  name: string;
  level: number;
}

interface Props {
  name?: string;
  data: SkillData[];
}

export const Skill: FunctionComponent<Props> = ({ name, data }) => {
  return (
    <>
      <ChartTitleDiv>{name}</ChartTitleDiv>
      <ResponsiveContainer width="99%" aspect={2} height="95%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis fontSize={'0.8rem'} dataKey="name" />
          <PolarRadiusAxis fontSize={'0.7rem'} angle={90} domain={[0, 4]} />
          <Radar
            isAnimationActive={false}
            dataKey="level"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
};

const ChartTitleDiv = styled.div`
  text-align: center;
  height: 5%;
  margin-bottom: 0.5rem;
`;
