document.addEventListener("DOMContentLoaded", () =>{
  const passInput = document.getElementById("password");//비밀번호 입력란
  const passError = document.getElementById("pass-error")//에러 메시지
  const nextButton = document.querySelector(".checkPass-next-button")//다음 버튼


  //테스트용 기존 비밀번호(실제로는 서버와 통신해야겠죠?)
  const storedPass = "learning123*";

  //비밀번호 입력 이벤트
  passInput.addEventListener("input", ()=>{
    const enteredPass = passInput.value;

    if(enteredPass.length < 8 || enteredPass.length >16){
      passError.textContent = "비밀번호는 8~16자리여야 합니다";
      passError.style.display = "block";//에러메시지 표시
      disableNextButton();//다음 버튼 비활성화
    }else{
      passError.textContent = "";
      passError.style.display= "none";//에러 메시지 숨김
      validatePssword(enteredPass); //비밀번호 유효성 검사 호출로로
    }
  });

  function validatePssword(password){
    if(password != storedPass){
      passError.textContent = "비밀번호가 일치하지 않습니다";
      passError.style.display = "block";
      disableNextButton();
    }else{
      passError.textContent = "";
      passError.style.display = "none"
      enableNextButton();
    }
  }

  function enableNextButton(){
    nextButton.disabled = false;
    nextButton.classList.add("active");
  }

  function disableNextButton(){
    nextButton.disabled = true;
    nextButton.classList.remove("active");
  }

  nextButton.addEventListener("click", (event) =>{
    if(nextButton.disabled){
      event.preventDefault();
      return;
    }

    alert("비밀번호 확인 완료! 마이페이지로 이동합니다.");
    //실제 이동 코드 추가시
    //windoe.location.href = "myPage.html";
  });
});