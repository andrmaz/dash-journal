import * as React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import type {DataKey} from 'recharts/types/util/types'

interface TimelineProps<T> {
  data: T[]
  legend: string
  polarKey: DataKey<T>
  radarKey: DataKey<T>
}

export function Timeline<T>(props: TimelineProps<T>): JSX.Element {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <RadarChart cx='50%' cy='50%' outerRadius='80%' data={props.data}>
        <PolarGrid />
        <PolarAngleAxis dataKey={props.polarKey} />
        <PolarRadiusAxis />
        <Radar
          name={props.legend}
          dataKey={props.radarKey}
          stroke='#8884d8'
          fill='#8884d8'
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  )
}
