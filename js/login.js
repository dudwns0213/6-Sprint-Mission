// querySelector로 HTML 엘리먼트 정보 가져오기

const useremail = document.querySelector(".input-email"); //이메일 입력값
const password = document.querySelector(".input-password"); //비밀번호 입력값
const username = document.querySelector(".input-name"); // 닉네임 입력값
const passowrdcheck = document.querySelector("#password-check");
const button = document.querySelector("button"); //submit 버튼

const noneemailtext = document.querySelector(".none-email"); //이메일을 입력해주세요.
const failemailtext = document.querySelector(".fail-email"); //잘못된 이메일 형식입니다.

const nonenametext = document.querySelector(".none-name"); //닉네임 입력해주세요.

const nonepswdtext = document.querySelector(".none-password"); //비밀번호를 입력해주세요.
const failpswdtext = document.querySelector(".fail-password"); //비밀번호를 8자 이상 입력해주세요.

const notsamepswdtext = document.querySelector(".same-password"); //비밀번호 일치 안 함

useremail.addEventListener("focusout", checkemail);
password.addEventListener("focusout", checkpassword);
username.addEventListener("focusout", checkname);
passowrdcheck.addEventListener("focusout", checksamepassword);

function checkemail() {
  console.log("이메일이벤트실행");
  if (noneEmailCheck(useremail.value) === false) {
    //이메일이 입력되지 않았음!
    console.log("이메일입력안됌")
    noneemailtext.classList.remove("hide");
    failemailtext.classList.add("hide");
  } else if (failEmailCheck(useremail.value) === false) {
    //잘못된 이메일 형식임!
    console.log("이메일형식틀림")
    noneemailtext.classList.add("hide");
    failemailtext.classList.remove("hide");
  } else{
    console.log("이메일성공")
    noneemailtext.classList.add("hide");
    failemailtext.classList.add("hide");
  }
}

function checkname(){
  console.log("닉네임실행")
  if(noneNameCheck(username.value)===false){
    console.log("닉네임입력안됐음 ㅠ.ㅠ");
    nonenametext.classList.remove("hide");
  } else{
    console.log("닉네임 입력 잘 됐음!")
    nonenametext.classList.add("hide");
  }
}

function checkpassword() {
  console.log("비밀번호실행")
  if (nonepasswordCheck(password.value) === false) {
    console.log("비밀번호입력안됌");
    nonepswdtext.classList.remove("hide");
    failpswdtext.classList.add("hide");
  } else if (failpasswordCheck(password.value) === false) {
    console.log("비밀번호형식틀림")
    nonepswdtext.classList.add("hide");
    failpswdtext.classList.remove("hide");
  } else{
    console.log("비밀번호 성공");
    nonepswdtext.classList.add("hide");
    failpswdtext.classList.add("hide");
  }
}

function checksamepassword(){
  console.log("비밀번호 일치 실행")
  if (samepasswordCheck(password.value, passowrdcheck.value) === false){
    console.log("일치하지 않아요");
    notsamepswdtext.classList.remove("hide");
  } else{
    console.log("비밀번호가 일치해요!");
    notsamepswdtext.classList.add("hide");
  }
}

function noneEmailCheck(value) {
  return value.length >= 1;
}

function failEmailCheck(value) {
  return /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/.test(value);
}

function noneNameCheck(value){
  return value.length >= 1;
}

function nonepasswordCheck(value) {
  return value.length >= 1;
}

function failpasswordCheck(value) {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(value);
}

function samepasswordCheck(password1, password2){
  if (password1 === password2){
    return true;
  }
  return false;
}