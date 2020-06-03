const { run } = require("@jxa/run");

//: Fetch data from numbers using JXA
const fetchLocalData = async () => {
  return await run(() => {
    //* Start JXA code
    const Numbers = Application("Numbers");
    Numbers.includeStandardAdditions = true;

    var doc = null;
    for (const document of Numbers.documents()) {
      if (document.name() === "data.source") {
        doc = document;
      }
    }

    if (!doc) {
      throw new Error("The document data.source is not open...");
    }
    var tableMeta = null;
    var tableExList = null;

    for (const sheet of doc.sheets()) {
      if (sheet.name() === "metadata") {
        for (table of sheet.tables()) {
          if (table.name() === "metadata") {
            tableMeta = table.cellRange();
          }
        }
      }
      if (sheet.name() === "exList") {
        for (table of sheet.tables()) {
          if (table.name() === "exList") {
            tableExList = table.cellRange();
          }
        }
      }
    }

    if (!tableMeta) {
      throw new Error("The table metadata was not found in Numbers");
    }
    if (!tableExList) {
      throw new Error("The table exList was not found in Numbers");
    }

    // var tableExList = Numbers.documents[0].sheets[0].tables[0].cellRange();

    var exList = {};

    if (tableExList) {
      for (const row of tableExList.rows()) {
        if (row.name() === "1:1") {
          continue;
        }
        let i = 0;
        let o = {};
        let id = "";
        for (const col of tableExList.columns()) {
          let cell = row.cells[i];
          let name = col.name();

          if (name === "id") {
            id = cell.value();
          } else {
            o = Object.assign(
              {},
              {
                [name]: row.cells[i].value(),
                ...o
              }
            );
          }
          i += 1;
        }
        exList = Object.assign(
          {},
          {
            [id]: {
              ...o
            },
            ...exList
          }
        );
      }
      return exList;
    } else {
      return null;
    }
    //* End JXA code
  });
};

module.exports = fetchLocalData;
