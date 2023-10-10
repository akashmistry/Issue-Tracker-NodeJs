// GET THE SEARCH FORM ID
let searchIssueForm = document.getElementById("search-issue-form");
// GET DETAILS OF THE ISSUE
let searchJson = document.getElementById("issue-data").getAttribute("data");
// PARSING THE DATA
let searchIssues = JSON.parse(searchJson);
// GET THE ELEMENT ID WHERE SEARCHED RESULT TO BE SHOWN
let searchList = document.getElementById("issues-list");

searchIssueForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // IN THIS ARRAY RESULTS WILL BE STORED
  let searchedIssues = [];

  // GET ALL THE FORM DATA

  let titleValue = searchIssueForm.querySelector('input[name="tie"]').value;
  let descriptionValue =
    searchIssueForm.querySelector('input[name="des"]').value;

  // ADD ISSUE TO THE SEARCHED ISSUE ARRAY
  searchIssues.map((el) => {
    if (el.title == titleValue || el.description == descriptionValue) {
      if (!searchedIssues.includes(el)) {
        searchedIssues.push(el);
      }
    }
  });
  // CREATING A DOM AND PUTTIG THE SEARCHED DATA
  searchList.innerHTML = "";
  for (let issue of searchedIssues) {
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
    searchList.appendChild(Div);
  }
});
