const $quizbody = document
  .querySelectorAll('.container>table')[1]
  .querySelector('tbody');

const $quizSpinner = document.querySelectorAll('.container>.spinner-border')[1];

export function hideQuizSpinner() {
  $quizSpinner.classList.add('visually-hidden');
}

export function renderQuizzes(data) {
  $quizbody.innerHTML = data
    .map(
      (c) =>
        ` <tr>
        <td>${c.title}</td>
        <td>
          <a
            class="badge bg-secondary"
            href="${c.docUrl}"
            >문서</a
          >
        </td>
        <td><a href="${c.previewUrl}">보기</a></td>
        <td><a href="${c.gitUrl}">git</a></td>
      </tr>`,
    )
    .join('');
}
