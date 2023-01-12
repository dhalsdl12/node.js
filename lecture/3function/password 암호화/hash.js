const crypto = require('crypto')

// 암호화
console.log(crypto.createHash('sha512').update('비밀번호').digest('base64'))

// 암호화하면 복호화 할 수 없다.
// 비밀번호는 굳이 복호화 할 필요가 없다.
// 비밀번호 입력하면 이미 암호화된 코드와 비교를 한다.
// 같다면 로그인 성공

/*
1234 -> aefasggagjeoijalefhiasf
9536 -> aefasggagjeoijalefhiasf

비밀번호가 짧을수록 보안에 취약하다.  
*/