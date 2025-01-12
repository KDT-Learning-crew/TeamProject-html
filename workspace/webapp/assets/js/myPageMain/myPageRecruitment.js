const pageList = document.querySelector(".myPage-main");
const pageBtn = document.querySelector(".myPage-changePageBtn");
const pageToggle = document.querySelector(".myPage-changePageToggle");
const pageSize = 10;

for (let i = 0; i < 7; i++) {
   addList();
}
pageNation();

//모집 - 신청 전환
pageBtn.addEventListener("click", () => {
   const approve = document.querySelectorAll(".approve");
   pageToggle.classList.toggle("fa-flip-horizontal");
   if (document.querySelector(".myPage-forum-text").innerText == "신청 현황") {
      document.querySelector(".myPage-forum-text").innerText = '모집 현황';
      console.log(document.querySelector(".myPage-forum-text").textContent);
      for (let i = 1; i < approve.length; i++) {
         approve[i].innerHTML = "<button class='approve-true'>수락</button>"
            + "<button class='approve-false'>거절</button>";
      }
   } else {
      document.querySelector(".myPage-forum-text").innerText = '신청 현황';
      console.log(document.querySelector(".myPage-forum-text").textContent);
      for (let i = 1; i < approve.length; i++) {
         approve[i].textContent = '대기중';
      }
   }
   pageNation();
});
//이거 따로 함수로 빼야지




// 페이지네이션(임시)
function pageNation() {
   const pageItems = document.querySelectorAll(".myPage-content-list").length;
   const pageCount = Math.ceil(pageItems / pageSize);
   const pagenation = document.querySelector(".myPage-pageNation");

   //페이지 번호 붙이기
   pagenation.innerHTML = '';
   let newSpan = document.createElement("span");
   newSpan.classList.add(".myPage-pageNation-li");
   newSpan.innerHTML = '<i class="fa-solid fa-angles-left"></i>';
   pagenation.appendChild(newSpan);
   newSpan = document.createElement("span");
   newSpan.classList.add(".myPage-pageNation-li");
   newSpan.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
   pagenation.appendChild(newSpan);
   for (let i = 1; i <= pageCount; i++) {
      newSpan = document.createElement("span");
      newSpan.classList.add("myPage-pageNation-li");
      newSpan.textContent = "" + i;
      newSpan.addEventListener('click', showPage);
      pagenation.appendChild(newSpan);
   }
   newSpan = document.createElement("span");
   newSpan.classList.add(".myPage-pageNation-li");
   newSpan.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
   pagenation.appendChild(newSpan);
   newSpan = document.createElement("span");
   newSpan.classList.add(".myPage-pageNation-li");
   newSpan.innerHTML = '<i class="fa-solid fa-angles-right"></i>';
   pagenation.appendChild(newSpan);
}


function showPage(e) {
   const pageItems = document.querySelectorAll(".myPage-content-list");
   const pageItemsCnt = pageItems.length;
   console.log(pageItemsCnt);
   pageList.innerHTML = "";
   let num = e.target.textContent
   const range = pageSize * (num - 1);

   for (let i = range; i < range + pageSize; i++) {
      if (i > pageItemsCnt) {
         break
      }
      addList();
   }
}







//모집 현황 데이터 추가(임시)
function addList() {
   // 데이터 추가
   let newContent = document.createElement("div");
   newContent.classList.add("myPage-content");
   newContent.classList.add("myPage-content-list");
   let newData;

   // 닉네임 추가
   newData = document.createElement("span");
   newData.classList.add("nick");
   newData.innerText = "팀끼리싸우면망함";
   newContent.appendChild(newData);

   // 티어 추가
   newData = document.createElement("span");
   newData.classList.add("tear");
   newData.innerText = "브론즈";
   newContent.appendChild(newData);

   // 제목 추가
   newData = document.createElement("span");
   newData.classList.add("title");
   newData.innerText = "갱승주고 남탓하는 정글";
   newContent.appendChild(newData);

   // 작성시간 추가
   newData = document.createElement("span");
   newData.classList.add("date");
   newData.innerText = "2025-01-11 02:01";
   newContent.appendChild(newData);

   // 승인 여부 추가
   newData = document.createElement("span");
   newData.classList.add("approve");
   let newDataBtn = document.createElement("button");
   newDataBtn.classList.add("approve-true");
   newDataBtn.innerText = "수락";
   newData.appendChild(newDataBtn);
   newDataBtn = document.createElement("button");
   newDataBtn.classList.add("approve-false");
   newDataBtn.innerText = "거절";
   newData.appendChild(newDataBtn);
   newContent.appendChild(newData);

   // 리스트에 넣기
   pageList.appendChild(newContent);
   pageList.appendChild(document.createElement("hr"));
}