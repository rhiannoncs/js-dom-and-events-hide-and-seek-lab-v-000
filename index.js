function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  let rankedLists = document.querySelectorAll('.ranked-list li');
  
  rankedLists.forEach(function(element) {
    let integer = parseInt(element.innerHTML);
    element.innerHTML = (integer += n).toString();
  })
  
  return rankedLists;
}

function deepestChild() {
  const grandNode = document.querySelector("#grand-node");
  
  let child = grandNode.querySelector("div")
  
  while (child) {
    if (child.querySelector("div")) {
      child = child.querySelector("div");
    }
    else {
      return child;
    }
  }
  
  
}