const checkBoxes = Array.from(document.querySelectorAll('.interest__check'));
const listElements = Array.from(document.querySelectorAll('.interest'));
for (elements of checkBoxes) {
  elements.addEventListener('change', e => {
    // debugger;
    let boxIndex = checkBoxes.indexOf(e.target);
    if (
      listElements[boxIndex].querySelectorAll('li.interest').length === 0 &&
      listElements[boxIndex].parentElement.querySelectorAll('li.interest') != 0
    ) {
      if (
        Array.from(
          listElements[boxIndex].parentElement.querySelectorAll('li.interest')
        ).every(e => checkBoxes[listElements.indexOf(e)].checked)
      ) {
        checkBoxes[
          listElements.indexOf(
            listElements[boxIndex].closest('ul').closest('li')
          )
        ].checked = true;
        checkBoxes[
          listElements.indexOf(
            listElements[boxIndex].closest('ul').closest('li')
          )
        ].indeterminate = false;
      } else if (
        Array.from(
          listElements[boxIndex].parentElement.querySelectorAll('li.interest')
        ).some(e => checkBoxes[listElements.indexOf(e)].checked)
      ) {
        checkBoxes[
          listElements.indexOf(
            listElements[boxIndex].closest('ul').closest('li')
          )
        ].checked = false;
        checkBoxes[
          listElements.indexOf(
            listElements[boxIndex].closest('ul').closest('li')
          )
        ].indeterminate = true;
      } else if (
        !Array.from(
          listElements[boxIndex].parentElement.querySelectorAll('li.interest')
        ).every(e => checkBoxes[listElements.indexOf(e)].checked)
      ) {
        checkBoxes[
          listElements.indexOf(
            listElements[boxIndex].closest('ul').closest('li')
          )
        ].checked = false;
        checkBoxes[
          listElements.indexOf(
            listElements[boxIndex].closest('ul').closest('li')
          )
        ].indeterminate = false;
      }
    }
    if (listElements[boxIndex].querySelectorAll('li.interest').length != 0) {
      if (checkBoxes[boxIndex].checked) {
        for (elem of Array.from(
          listElements[boxIndex].querySelectorAll('li.interest')
        )) {
          checkBoxes[listElements.indexOf(elem)].checked = true;
        }
      } else {
        for (elem of Array.from(
          listElements[boxIndex].querySelectorAll('li.interest')
        )) {
          checkBoxes[listElements.indexOf(elem)].checked = false;
        }
      }
    }
  });
}
