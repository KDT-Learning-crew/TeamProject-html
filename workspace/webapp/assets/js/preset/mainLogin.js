const loginDropdownBox = document.querySelector('.main-login-dropdown-box');
const dropList = document.querySelector('#main-login-display');
const loginCommu = document.querySelector('.main-login-commu');
const loginCommuSub = document.querySelector('.main-login-commu-sub');
const dropDown = document.querySelector('.main-header-user-box');
const loginUserElement = document.querySelector('.main-header-dropdown-container');
const mainPageNavBar = document.querySelector('.main-header-container');
let userStatus = 1; //유저 세션 값 할당

if(dropDown) {
  dropDown.addEventListener('click', (event) => {
    const target = event.target;
    if(target.tagName.toLowerCase() === 'i') {
      const dropDownMenu = document.querySelector('.main-header-dropdown');
      if(target.classList.contains('icon-down-dir')) {
        target.classList.remove('icon-down-dir');
        target.classList.add('icon-up-dir');
        dropDownMenu.style.display = 'flex';
      } else if(target.classList.contains('icon-up-dir')) {
        target.classList.remove('icon-up-dir');
        target.classList.add('icon-down-dir');
        dropDownMenu.style.display = 'none';
      }
    }
  });
}

function checkUserStatus() {
  if(userStatus === 1) {
    loginUser();
  } else {
    notLoginUser();
  }
}

function loginUser() {
  loginUserElement.style.display = "flex";
}
function notLoginUser() {
  const nonLoginUserElementDiv = document.createElement('div');
  nonLoginUserElementDiv.classList.add('main-nonLogin-join-box');

  const nonUserLoginLi = document.createElement('li');
  nonUserLoginLi.classList.add('main-nonLogin-join');
  const nonUserLoginButton = document.createElement('a');
  nonUserLoginButton.href = ''; //절대경로 추가
  nonUserLoginButton.textContent = '로그인';
  nonUserLoginLi.appendChild(nonUserLoginButton);


  const nonUserSignUpLi = document.createElement('li');
  nonUserSignUpLi.classList.add('main-nonLogin-join');
  const nonUserSignUpButton = document.createElement('a');
  nonUserSignUpButton.href = '../signUp/signup1.html'; //절대경로 추가
  nonUserSignUpButton.textContent = '회원가입';
  nonUserSignUpLi.appendChild(nonUserSignUpButton);

  nonLoginUserElementDiv.appendChild(nonUserLoginLi);
  nonLoginUserElementDiv.appendChild(nonUserSignUpLi);

  mainPageNavBar.appendChild(nonLoginUserElementDiv);
  loginUserElement.style.display = "none";
}



checkUserStatus();