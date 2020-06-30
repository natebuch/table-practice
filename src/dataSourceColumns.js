import React, { useMemo } from 'react'

export const columns = [
    {
      Header: 'Name',
      Footer: info => {
        const count = useMemo(
          () => info.rows.length,
          [info.rows]
        )
  
        return `Count: ${count}`
      },
      columns: [
        {
          Header: 'First Name',
          Footer: <hr />,
          accessor: 'firstName',
        },
        {
          Header: 'Last Name',
          accessor: 'lastName',
        },
      ],
    },
    {
      Header: 'Information',
      columns: [
        {
          Header: 'Age',
          accessor: 'age',
        },
        {
          Header: 'Gender',
          accessor: 'gender',
        },
        {
          Header: info => {
            const message = useMemo(
              () => {
                if (info.rows.length === 0) {
                  return 'Unknown';
                }
                const range = info.rows.reduce((sum, row, i) => {
                  if (i === 0) {
                    return sum;
                  }
                  return {min: Math.min(sum.min, row.values.grade), max: Math.max(sum.max, row.values.grade)}
                }, {min: info.rows[0].values.grade, max: info.rows[0].values.grade});
                return `${range.min} - ${range.max}`;
              },
              [info.rows]
            )
      
            return `Grade: (${message})`
          },
          accessor: 'grade',
        },
      ],
    },
    {
      Header: 'Multiplier',
      accessor: 'multiplier',
    }
  ];