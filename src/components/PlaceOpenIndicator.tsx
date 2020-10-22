import React from 'react';
import { DailyOpeningHours } from '../shared';
import moment from 'moment';
import { Badge } from 'react-bootstrap';

interface Props {
  openingHours: DailyOpeningHours[];
}

const PlaceOpenIndicator: React.FC<Props> = (props: Props) => {
  const currentDateTime = moment();
  const todaysOpeningHours = props.openingHours[currentDateTime.day() - 1];

  const dateFromOpeningTime = (time: string) => {
    const times = time.split(':').map((x) => Number(x));
    return moment().millisecond(0).seconds(0).minute(times[1]).hour(times[0]);
  };

  const openTimeSlots = todaysOpeningHours.openDuring.map((t: string) => {
    const times = t.split(' - ');
    return {
      startTime: dateFromOpeningTime(times[0]),
      endTime: dateFromOpeningTime(times[1]),
    };
  });

  const currentlyOpen = openTimeSlots.some((x: any) => currentDateTime.isBetween(x.startTime, x.endTime));

  return (
    <>
      {currentlyOpen ? (
        <Badge className="mr-3" variant="success">
          Open
        </Badge>
      ) : (
        <Badge className="mr-3" variant="danger">
          Closed
        </Badge>
      )}
    </>
  );
};

export default PlaceOpenIndicator;
