import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
  {
    title: 'Log Out',
    path: '/login',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Employee Search',
    path: '/employeeSearch',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Employee Data',
        path: '/showEmployee',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Attendance',
        path: '/showAttendance',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Attendance Details',
        path: '/showAttendanceDetail',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Additional Tags',
        path: '/miscData',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Certificates',
        path: '/certificates',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Salaries',
        path: '/salaries',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Voluntary Deductions',
        path: '/showVolDeductions',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Payroll',
        path: '/showPayroll',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'W2s',
        path: '/showW2s',
        icon: <IoIcons.IoIosPaper />,
      }
    ]
  },
  {
    title: 'PO Search',
    path: '/purchaseOrderSearch',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />
  },
  {
    title: 'Vendor Search',
    path: '/vendorSearch',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />
  },
  {
    title: 'Check Search',
    path: '/checkSearch',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />
  },
  {
    title: 'Payroll Codes',
    path: '/absenceLeaveCodes',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Absence/Leave',
        path: '/absenceLeaveCodes',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Deduct/Contrib',
        path: '/deductionsContributionsCodes',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Pay Table',
        path: '/payTableCodes',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Job',
        path: '/jobCodes',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Addenda',
        path: '/addendaCodes',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Termination',
        path: '/terminationCodes',
        icon: <IoIcons.IoIosPaper />,
      }
    ]
  }
];