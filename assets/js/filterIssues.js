// GET THE FORM ID
let filterIssueForm = document.getElementById("filter-issue-form");
// GET THE DETAILS OF THE ISSUES OF THE PROJECT
let issuesJson = document.getElementById("issue-data").getAttribute("data");
// PARSE THE DATA
let issues = JSON.parse(issuesJson);
// GET THE ELEMENT ID WHERE FILTERED RESULTS WILL BE SHOWN
let issueList = document.getElementById("issues-list");

filterIssueForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // CREATING A ARRAY WHERE FILTERED DATA WILL BE SHOWN
  let filteredIssues = [];

  // GETTING ALL THE FORM DATA
  let labelsList = filterIssueForm.querySelectorAll("input[type=checkbox]");
  let labelsElements = [...labelsList].filter((Element) => Element.checked);

  let authorVal = filterIssueForm.querySelector(
    "input[type=radio][name=author]:checked"
  ).value;

  let [...labelsArr] = labelsElements.map((Element) => Element.value);

  // ADD ISSUE TO THE FILTERED ISSUE ARRAY
  issues.map((el) => {
    if (el.author == authorVal) {
      if (!filteredIssues.includes(el)) {
        filteredIssues.push(el);
      }
    }
    labelsArr.map((label) => {
      if (el.labels.includes(label)) {
        if (!filteredIssues.includes(el)) {
          filteredIssues.push(el);
        }
      }
    });
  });
  // CREATING A DOM AND PUTTIG THE FILTERED DATA
  issueList.innerHTML = "";
  for (let issue of filteredIssues) {
    let Div = document.createElement("div");
    Div.style = "none";
    Div.innerHTML = `
      <div class="card w-100" >
    <div class="card-body" >
      <h4 class="card-title">Title : ${issue.title} </h4>
      <h5 class="card-title">Author : ${issue.author}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        Description : ${issue.description}
      </h6>
    </div>
  </div>
  `;
    issueList.appendChild(Div);
  }
});
