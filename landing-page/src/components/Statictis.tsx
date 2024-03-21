import { useEffect, useState, useRef } from 'react';
import { ReactNode } from 'react';
import { Statistic , Col, Row } from 'antd';
import CountUp from 'react-countup';
import { StatisticType } from '../interfaces';
import { Formatter, valueType } from 'antd/es/statistic/utils';
import Line from './Line';

type StatisticsProps = {
  values: StatisticType[];
};

const formatter : Formatter | undefined = (value: valueType) => <CountUp end={Number(value)} separator="," />;

const Statistics = (props: StatisticsProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const statisticRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    if (statisticRef.current) {
      observer.observe(statisticRef.current);
    }

    return () => {
      if (statisticRef.current) {
        observer.unobserve(statisticRef.current);
      }
    };
  }, []);

  return (
    <>
    <Row justify={'center'} className='row'>
      {props.values.map((values, index) => (
        <Col span={4} className={`col ${index === (props.values.length ) ? '' : 'border-right'}`} key={index}>
          <div ref={statisticRef}>
            <Statistic
              title={values.content}
              value={values.value}
              formatter={isVisible ? formatter : undefined}
            />
            {isVisible && (
              <span className='element-statistic'
              >
                +
              </span>
            )}
          </div>
        </Col> 
      ))}
      </Row>
    </>
  );
}

export default Statistics;