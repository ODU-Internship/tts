/** @jsxImportSource @emotion/react */
import {
  Box, Text, Grid, Heading, Flex, useMediaQuery,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, BarChart, Bar, AreaChart, Area,
} from 'recharts';

const data1 = [
  {
    name: 'Week 1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: ' Week 2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Week 3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Week 4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },

];

const data2 = [
  {
    name: 'Week 1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: ' Week 2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Week 3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Week 4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const data3 = [
  {
    name: 'Samsung',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Apple',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Nokia',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Sony',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'MI',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Blackberry',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'OnePlus',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data4 = [
  {
    name: 'Week 1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: ' Week 2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Week 3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Week 4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];
const Analytic = styled(Box)(({ theme }) => {
  const { radii } = theme;
  return { borderWidth: 2, padding: '20px 10px', borderRadius: radii.md };
});
const Analytics = () => {
  const [isLargerThan1210] = useMediaQuery('(min-width: 1210px)');
  return (
    <Grid
      width="100%"
      gridTemplateColumns="repeat(auto-fill, minmax(350px, 2fr))"
      maxW="1200px"
      rowGap="20px"
      columnGap="40px"
      gridAutoFlow="dense"
    >
      <Flex alignItems="center">
        <Analytic textAlign="center" as={Flex} flexDirection="column" justifyContent="center" width="100%">
          <Heading size="sm" mb="5">Total Messages</Heading>
          <Heading mb="6">3284923</Heading>
          <Text>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
          </Text>
        </Analytic>
      </Flex>
      <Analytic>
        <Heading size="sm" mb="5">Message count:</Heading>
        <ResponsiveContainer height={300}>
          <LineChart
            data={data1}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </Analytic>

      <Analytic>
        <Heading size="sm" mb="5">Sentiment Accuracy:</Heading>
        <ResponsiveContainer height={300}>
          <LineChart
            data={data2}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Analytic>
      <Analytic css={{ ...(isLargerThan1210 ? { gridColumnStart: 1, gridColumnEnd: 3 } : {}) }}>
        <Heading size="sm" mb="5">Negative v/s Positive Brand Analysis:</Heading>
        <ResponsiveContainer height={300}>
          <BarChart
            data={data3}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Analytic>
      <Analytic>
        <Heading size="sm" mb="5">Executive performance:</Heading>
        <ResponsiveContainer height={300}>
          <AreaChart
            data={data4}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
        </ResponsiveContainer>
      </Analytic>
    </Grid>
  );
};

export default Analytics;
