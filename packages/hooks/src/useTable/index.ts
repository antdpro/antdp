import { useAntdTable } from 'ahooks';


type UseTableType = Parameters<typeof useAntdTable>


function useTable(service: UseTableType[0], options: UseTableType[1]) {

  const { tableProps, search } = useAntdTable(service, {
    defaultPageSize: 20,
    ...options,

  });

  return {
    tableProps: {
      ...tableProps,
      pagination: {
        ...tableProps.pagination,
        showTotal: (total: number) => `总共: ${total} 条`,
      }
    },
    search
  }
 
}


export default useTable