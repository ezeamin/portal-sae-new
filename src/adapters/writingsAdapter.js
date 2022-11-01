export const writingsAdapter = (APIInfo) => {
    console.log("🚀 ~ file: writingsAdapter.js ~ line 2 ~ writingsAdapter ~ APIInfo", APIInfo)
}


// export const proceedingsInfoAdapter = (APIInfo) => {
//     const proceedingsFormat = APIInfo?.data?.historyList.map((el)=>{
//         return {
//             description: el.description,
//             id: el.id
//         }
//     })
    
//     const formattedInfo = {
//         proceedings: proceedingsFormat || [],
//         fileInfo: {
//             actor: APIInfo.data?.actor,
//             demandado: APIInfo.data?.accused,
//             tipoProceso: APIInfo.data?.processType || "",
//         },
//         name: APIInfo.data?.name,
//         token: {
//             canNavigate: APIInfo.data?.token.can_navigate,
//             historyId: APIInfo.data?.token.history_id,
//         },
//         totalPages: APIInfo.data?.historyList.length + 2 || 2,
//     }

//     return formattedInfo;
// }