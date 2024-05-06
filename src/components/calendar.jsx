import React, { useEffect } from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, ViewDirective, ViewsDirective} from '@syncfusion/ej2-react-schedule';
import "./calendar.css"
import { registerLicense } from '@syncfusion/ej2-base';
import {useFormContext} from "../context/context";
import UserProfile from './userProfile';

//License
registerLicense("Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCeExyWmFZfVpgd19EaVZQTWYuP1ZhSXxXdkBjXH9dcn1XRmRVWUI=");
const Calendar = () => {
  const {calendarData,firstName,lastName}= useFormContext();

const fieldsData = {
  id: 'id',
  subject: { name: 'title' },
  location: { name: 'type' },
  description: { name: 'description' },
  startTime: { name: 'StartTime' },
  endTime: { name: 'EndTime' },
  isAllDay: { name: 'IsAllDay' }
}
const eventSettings = { dataSource: calendarData, fields: fieldsData };

// useEffect(()=>{console.log(calendarData)},[calendarData])


  return (
    <div className='flex flex-col w-full h-screen items-center '>
      {/* <UserProfile/> */}
        <ScheduleComponent currentView='Month' readonly={true} eventSettings={eventSettings}>
          <ViewsDirective>
            <ViewDirective option='Month' showWeekend={false}></ViewDirective>
            {/* <ViewDirective option='Week' showWeekend={false}></ViewDirective>
            <ViewDirective option='Day' showWeekend={false}></ViewDirective> */}
          </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
        </ScheduleComponent>
    </div>
  )
}

export default Calendar