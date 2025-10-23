function gotAll(infoArray) {
  for (const info of infoArray) {
    if (info.type === "extension") {
      console.log(info.name);
    }
  }
}

let gettingAll = browser.management.getAll();
gettingAll.then(gotAll);
console.log(info.type);
