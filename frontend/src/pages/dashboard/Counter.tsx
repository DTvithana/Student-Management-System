import CountUp from 'react-countup';

interface Props {
    start: number,
    end: number
} 

function Counter({start, end}: Props) {
  return (
    
   
    <h3>
    <CountUp start={start} end={end} duration={8} delay={0}></CountUp>
    +
    </h3>
  )
}

export default Counter;