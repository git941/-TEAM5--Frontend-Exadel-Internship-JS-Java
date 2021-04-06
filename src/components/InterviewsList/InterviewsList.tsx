import React from "react";
import { useId } from "@fluentui/react-hooks";
import {
  mergeStyleSets,
  DetailsList,
  SelectionMode,
  IColumn,
  TooltipHost,
  ITooltipHostStyles,
} from "@fluentui/react";
import { InterviewStatus, IApplicant } from "../../models/IApplicant";

// export interface IInterview extends IApplicant {
//     interviewDate: Date,
//     interviewTime: any
//    }
export interface IInterview {
  interviewDate: string,
  interviewTime: any,
  fullName: string,
  events: string,
  interviewStatus: InterviewStatus.Registered
}
const calloutProps = { gapSpace: 0 };

const hostStyles: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };
const applicants: IInterview[] = [
  {
    interviewDate: "2017-05-24",
    interviewTime: "18:00",
    fullName: "Vova Ivanov",
    events: "Internship JS & Java",
    interviewStatus: InterviewStatus.Registered
  },
  {
    interviewDate: "2017-05-24",
    interviewTime: "15:00",
    fullName: "Petr Krasnow",
    events: "C++ interview",
    interviewStatus: InterviewStatus.Registered
  },
  { 
    interviewDate: "2017-05-24",
    interviewTime: "10:00",
    fullName: "Nike Petrov",
    events: "Internship JS & Java",
    interviewStatus: InterviewStatus.Registered
  },
  { 
    interviewDate: "2017-05-24",
    interviewTime: "16:00",
    fullName: "Sonya Volina",
    events: "Business Analysis Meet UP",
    interviewStatus: InterviewStatus.Registered
  }
];


const classNames = mergeStyleSets({
  table: {
    margin: "auto",
    maxWidth: "73%",
    maxHeight: 680
  },
  column:{
    ':hover':{

    }
  }
});

export interface IInterviewList {
  columns: IColumn[];
  items: IInterview[];
}
export const InterviewList: React.FC = () => {
  const tooltipId = useId('tooltip');
  const columns: IColumn[] = [
    {
      key: "column1",
      name: "interviewDate",
      fieldName: "interviewDate",
      minWidth: 70,
      maxWidth: 100,
      isResizable: true
    },
    {
      key: "column2",
      name: "interviewTime",
      fieldName: "interviewTime",
      minWidth: 70,
      maxWidth: 100,
      isResizable: true
    },
    {
      key: "column3",
      name: "fullName",
      fieldName: "fullName",
      minWidth: 100,
      maxWidth: 250,
      isResizable: true
    },
    {
      key: "column4",
      name: "events",
      fieldName: "events",
      minWidth: 100,
      maxWidth: 250,
      isResizable: true
    },
    {
      key: "column5",
      name: "interviewStatus",
      fieldName: "interviewStatus",
      minWidth: 100,
      maxWidth: 250,
      isResizable: false,
    },
    {
      key: "column5",
      name: "More",
      isIconOnly: true,
      fieldName: "",
      minWidth: 50,
      maxWidth: 50,
      isResizable: false,
      onRender: () => (
        <TooltipHost 
        content="Show more information"
        id={tooltipId}
        calloutProps={calloutProps}
        styles={hostStyles}>
          
          <a href="#" aria-describedby={tooltipId}>
            <i className={`ms-Icon ms-Icon--More`} />
          </a>
        </TooltipHost>
      )
    }
  ];
  return (
    <div data-is-scrollable={true}>
      <div className={` ${classNames.table}`}>
        <DetailsList
          items={applicants}
          columns={columns}
          selectionMode={SelectionMode.multiple}
          isHeaderVisible={false}
        />
      </div>
    </div>
  );
};