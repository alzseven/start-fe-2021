const $classbody = document
  .querySelectorAll('.container>table')[0]
  .querySelector('tbody');

const $classSpinner = document.querySelectorAll(
  '.container>.spinner-border',
)[0];

export function hideClassSpinner() {
  $classSpinner.classList.add('visually-hidden');
}

export function renderClasses(data) {
  $classbody.innerHTML = data
    .map(
      (c, index) =>
        `<tr>
    <th scope="row">${index + 1}</th>
    <td>${c.title}</td>
    <td>
    <a href="${c.docUrl}" class="badge bg-secondary"
      >문서</a
    >
    </td>
    <td>${c.links
      .map(
        (link, lindex) =>
          `<a
      href="${link}"
      class="badge bg-secondary"
      >${lindex + 1}</a
      >`,
      )
      .join('')}
    </td>
    <td>${c.date}</td>
    <td>
    <a
      href="${c.gitUrl}"
      >git</a
    >
    </td>
    </tr>`,
    )
    .join('');
}
