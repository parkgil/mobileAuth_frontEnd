import { eventHandler } from './test/test1';
import { initEventHandlerOfVendorSelect} from "./event-handler/vendorSelect";
import { initEventHandlerOfPhoneNumberInput } from "./event-handler/phoneNumberInput";
import { initEventHandlerOfRegistrationNumberInput } from "./event-handler/registrationNumberInput";

const init = () => {
    eventHandler();
    initEventHandlerOfVendorSelect();
    initEventHandlerOfPhoneNumberInput();
    initEventHandlerOfRegistrationNumberInput();
}

init();

// 통신사 selectbox
const vendors = [
    {"code": "SKT", "description": "SKT"}
    ,{"code": "KT", "description": "KT"}
    ,{"code": "LGT", "description": "LG U+"}
    ,{"code": "SKTMVNO", "description": "SKT 알뜰폰"}
    ,{"code": "KTMVNO", "description": "KT 알뜰폰"}
    ,{"code": "LGTMVNO", "description": "LG U+ 알뜰폰"}
];

const venderOptions = vendors.map(vender => (`<option value=${vender.code}>${vender.description}</option>`)).join('');
const venderSelectbox = document.querySelector('#vendors');
venderSelectbox.innerHTML = venderOptions;


// 동의 checkbox
// 약관 데이터
const termsData = [
    {"termsId": "1", "title": "본인확인 이용동의", "required": true}
    ,{"termsId": "2", "title": "개인 정보 수집/이용/취습 위탁동의", "required": true}
    ,{"termsId": "3", "title": "고유식별번호 처리 동의", "required": true}
    ,{"termsId": "4", "title": "(선택) 카카오 플러스 친구 추가 동의", "required": false}
]

// 약관 데이터 checkbox 생성
const termsLis = termsData.map(term => (`<li><input type="checkbox" value=${term.termsId}>${term.title}</li>`)).join('');
const termsUl = document.querySelector('#terms');
termsUl.innerHTML = termsLis;

const allAgree = document.querySelector('#allAgree');
// 전체 동의 click event 생성
allAgree.addEventListener('click', (e) => {
    const checked = e.target.checked;
    [...termsUl.children].map(li => li.children[0].checked = checked);
});

// 개별 약관 click event 생성
[...termsUl.children].map(li => {
    const checkbox = li.children[0];
    checkbox.addEventListener('click', () => {
        // 개별 약관 check 해제 시, 전체동의 check 해제
        if(!checkbox.checked) allAgree.checked = false;
    });
});







// 휴대폰 번호 input
// const phoneNumberInput = document.querySelector('#phoneNumber');
// phoneNumberInput.addEventListener('keyup', (e) => {
//     console.log(e);
//     const inputValue = e.target.value;
//     if(inputValue.length > 0) {
//         const keyValue = e.key;
//         if(!Number(keyValue)) {
//             // e.preventDefault();
//             // e.defaultPrevented = true;
//             phoneNumberInput.value = inputValue.replace(/[^0-9]/gi, '');
//         } else if(inputValue.length === 3) {
//             console.log('length 3');
//             phoneNumberInput.value = inputValue + " ";
//         }
//     }
// });
// phoneNumberInput.addEventListener('keyup', checkNumber);
// function checkNumber(e) {
//   console.log(e);
//   const keyValue = e.key;
//   if(!Number(keyValue)) {
//     e.preventDefault();
//     return false;
//   }
// }


// 주민등록번호 input
// const userSrnoInput = document.querySelector('#userSrno');
// userSrnoInput.addEventListener('keyup', (e) => {
//     const value = e.target.value;
//     console.log(e.keyCode);
//     console.log(value.length);
//     if(value.length === 6) {
//         console.log(value);
//         userSrnoInput.value += " - ";
//     }
//
//     // userSrnoInput.value = value;
//     console.log(userSrnoInput.value);
// });


// 이름 input
// const userNmInput = document.querySelector('#userNm');

