// querySelector로 HTML 엘리먼트 정보 가져오기
const useremail = document.querySelector(".input-email"); //이메일 입력값
const password = document.querySelector(".input-password"); //비밀번호 입력값
const loginbutton = document.querySelector("button"); //submit 버튼

const eye = document.querySelector(".password-img");

const noneemailtext = document.querySelector(".none-email"); //이메일을 입력해주세요.
const failemailtext = document.querySelector(".fail-email"); //잘못된 이메일 형식입니다.

const nonepswdtext = document.querySelector(".none-password"); //비밀번호를 입력해주세요.
const failpswdtext = document.querySelector(".fail-password"); //비밀번호를 8자 이상 입력해주세요.

useremail.addEventListener("focusout", checkemail);
password.addEventListener("focusout", checkpassword);

eye.addEventListener("click", changeeye);

useremail.addEventListener("focusout", ablelogin);
password.addEventListener("focusout", ablelogin);



function checkemail() {
  console.log("이메일이벤트실행");
  if (noneEmailCheck(useremail.value) === false) {
    //이메일이 입력되지 않았음!
    console.log("이메일입력안됌")
    noneemailtext.classList.remove("hide");
    failemailtext.classList.add("hide");
    useremail.classList.add("error");
    useremail.classList.remove("success");
    //스타일 적용
  } else if (failEmailCheck(useremail.value) === false) {
    //잘못된 이메일 형식임!
    console.log("이메일형식틀림")
    noneemailtext.classList.add("hide");
    failemailtext.classList.remove("hide");
    useremail.classList.add("error");
    useremail.classList.remove("success");
  } else{
    console.log("이메일성공")
    noneemailtext.classList.add("hide");
    failemailtext.classList.add("hide");
    useremail.classList.add("success");
  }
}

function checkpassword() {
  console.log("비밀번호실행")
  if (nonepasswordCheck(password.value) === false) {
    console.log("비밀번호입력안됌");
    nonepswdtext.classList.remove("hide");
    failpswdtext.classList.add("hide");
    password.classList.add("error");
  } else if (failpasswordCheck(password.value) === false) {
    console.log("비밀번호형식틀림")
    nonepswdtext.classList.add("hide");
    failpswdtext.classList.remove("hide");
    password.classList.add("error");
  } else{
    console.log("비밀번호 성공");
    nonepswdtext.classList.add("hide");
    failpswdtext.classList.add("hide");
    password.classList.add("success")
  }
}

function changeeye(){
  console.log("눈모양 변경 함수 실행");
  if (password.type === "password"){
    console.log("패스워드가 보고싶어");
    password.type = "text";
    eye.src = "/img/Property 1=Variant2.png"
  }
  else {
    console.log("다시 안 볼래");
    password.type = "password";
    eye.src = "/img/Property 1=Default.png"
  }

}


function ablelogin(){
  console.log("버튼 활성화 실행")
  if ((useremail.value && password.value)){
    console.log("다 일치하네여");
    loginbutton.disabled = false;
    loginbutton.classList.add("buttonable");
  }
  else{
    console.log("버튼 아직 때가 아니다");
    loginbutton.disabled = true;
    loginbutton.classList.remove("buttonable");
  }
}

function noneEmailCheck(value) {
  return value.length >= 1;
}

function failEmailCheck(value) {
  return /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/.test(value);
}

function nonepasswordCheck(value) {
  return value.length >= 1;
}

function failpasswordCheck(value) {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(value);
}
