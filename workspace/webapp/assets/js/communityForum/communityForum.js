const writeBtn = document.querySelector('.communityForum-write-btn');
const postSearch = document.querySelector('#communityForum-search');
const postSize = 10; //한 페이지당 표시될 게시물 수
const totalPost = 20; //서버에서 모든 게시물 수 가져오기
let currentPageNumber = 1;
const moveFirst = document.querySelector('.icon-angle-double-left');
const moveLast = document.querySelector('.icon-angle-double-right');
const movePrev = document.querySelector('.icon-left-open');
const moveNext = document.querySelector('.icon-right-open');


//날짜 및 시간 포멧 지정(지금은 현재시간 가져오는데 추후 데베에서 가져오기)
const upLoadTime = new Date();
const year = upLoadTime.getFullYear();
let month = upLoadTime.getMonth() + 1;
month = String(month).padStart(2, '0');
let day = upLoadTime.getDate();
day = String(day).padStart(2, '0');
let hours = upLoadTime.getHours();
hours = String(hours).padStart(2, '0');
let minutes = upLoadTime.getMinutes();
minutes = String(minutes).padStart(2, '0');

const posts = [];
for (let i = 1; i <= 205; i++) { //게시글 총합 가져오기(페이지수에 따라 하단 숫자 바뀜)
  posts.push({
    writer: `작성자 ${i}`,
    category: `공략`,
    title: `게시물 제목 ${i}`,
    writeTime: `${year}-${month}-${day} ${hours}:${minutes}`,
    postId: `게시글${i}`
  });
}
const totalPages = Math.ceil(posts.length / postSize);

const bottomNumber = document.querySelector('.communityForum-page-number-button');
const postContainer = document.querySelector('.communityForum-list');
const postBottomNumberContainer = document.querySelector('.communityForum-page-numbers');

function getPost(page) {
  postContainer.innerHTML = '';
  const start = (page - 1) * postSize;
  const end = page * postSize;
  const postDisplay = posts.slice(start, end);
  postDisplay.forEach(post => {
    const postItem = document.createElement('li');
    postItem.classList.add('communityForum-list-item');
    postItem.innerHTML = `
      <div class="communityForum-list-writer">${post.writer}</div>
      <div class="communityForum-list-category">${post.category}</div>
      <div class="communityForum-list-title">${post.title}</div>
      <div class="communityForum-list-write-time">${post.writeTime}</div>
    `;
    const postLine = document.createElement('hr');
    postLine.classList.add('communityForum-list-item-line');
    postContainer.appendChild(postItem);
    postContainer.appendChild(postLine);
    postItem.addEventListener('click', () => {
      alert(`해당 게시글 : ${post.postId}`);
    });
  });
}

function postBottomNumber() {
  postBottomNumberContainer.innerHTML = '';
  const numberStart = Math.floor((currentPageNumber - 1) / 10) * 10 + 1;
  const numberEnd = Math.min(numberStart + 9, totalPages);

  for (let i = numberStart; i <= numberEnd; i++) {
    const numbers = document.createElement('p');
    numbers.textContent = i;

    if (i === currentPageNumber) {
      numbers.classList.add('communityForum-page-numbers-selector');
    } else {
      numbers.classList.add('communityForum-page-numbers-unSelector');
    }

    numbers.disabled = i === currentPageNumber;
    numbers.addEventListener('click', () => movePost(i));
    postBottomNumberContainer.appendChild(numbers);
  }
}

function movePost(post) {
  if (post < 1 || post > totalPages) return;
  currentPageNumber = post;
  getPost(currentPageNumber);
  postBottomNumber();
}





// 이전 페이지로 이동
movePrev.addEventListener('click', () => movePost(currentPageNumber - 1));

// 다음 페이지로 이동
moveNext.addEventListener('click', () => movePost(currentPageNumber + 1));

// 첫 페이지로 이동
moveFirst.addEventListener('click', () => movePost(1));

// 마지막 페이지로 이동
moveLast.addEventListener('click', () => movePost(totalPages));




getPost(currentPageNumber);
postBottomNumber();








writeBtn.addEventListener("click", function () {
  var link = '../../html/communityForum/communityForumWriteing.html';
  location.href = link;
  // location.replace(link);
  window.open(link);
});

postSearch.addEventListener("keydown", function (event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // 기본 동작(새 줄 추가) 방지
    alert(`${postSearch.value}의 내용을 검색합니다`);
  }
});