$(document).ready(function () {
  function compareStrings(a, b) { return (a < b) ? -1 : (a > b) ? 1 : 0; }

  orgs.sort(function (a, b) {
    return compareStrings(a["Organization"], b["Organization"]);
  })
  orgs.forEach(orgGroup => {
    const item =
      `<div class="d-flex justify-content-center align-items-center m-5 fs-4">
        <div class="btn-group">
          <a target="_blank" href="${orgGroup["Homepage Link"]}" class="btn btn-lg btn-outline-danger border-3 fst-italic">
            <i class="fas fa-hand-holding-heart"></i> ${orgGroup.Organization}</a>
          <a target="_blank" href="${orgGroup["Donation Link"]}" class="text-reset btn btn-lg btn-danger d-flex align-items-center justify-content-center">
            <i class="fas fa-hand-holding-usd"></i>
          </a>
        </div>
      </div>`;
    $("#charities").append(item)
  });;
});
