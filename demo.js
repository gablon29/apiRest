import cie10Data from "./cie10.json" assert { type: "json" };

function groupByCodePrefix(data) {
  const groupedCodes = {};

  data.forEach((item) => {
    const prefix = item.code.split(".")[0];

    if (!groupedCodes[prefix]) {
      groupedCodes[prefix] = [];
    }

    groupedCodes[prefix].push(item); // Guardamos el objeto completo (código y descripción)
  });

  return Object.values(groupedCodes);
}

const groupedCie10Data = groupByCodePrefix(cie10Data);
console.log(groupedCie10Data);
