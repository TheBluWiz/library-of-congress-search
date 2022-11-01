userSearch = searchEl.value
userSearch.replace(/\s/g, '-')
searchURL = "https://www.loc.gov/"
formatEl = dropDown.value
queryEnd = "&fo=json"

if (dropDown.value === null) {
  searchURL = searchURL + "search/?q=" + searchEl.value
} else {
  searchURL = searchURL + dropDown.value + "/?q=" + userSearch + queryEnd
}

fetch(searchURL, {
})