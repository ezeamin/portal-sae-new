export const writingsAdapter = (APIInfo) => {
  const writingsFormat = APIInfo?.writings.map((element) => {
    return {
      description: element.description,
      id: element.id,
      judicialUnit: element.unit,
      judicialUnitId: element.unitId,
      jurisdiction: element.jurisdiction,
      jurisdictionId: element.jurisdictionId,
      number: element.number,
      procedingId: element.procId,
      state: element.stateName,
      title: element.cover,
      type: element.typeName,
    };
  });

  const formattedInfo = {
    currentPage: APIInfo.currentPage,
    totalPages: APIInfo.totalPages,
    totalWritings: APIInfo.totalItems,
    writings: writingsFormat || [],
  };

  return formattedInfo;
};
