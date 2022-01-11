function sendit(){
    const userid =document.getElementById('userid');
    const userpw =document.getElementById('userpw');
    const userpw_re=document.getElementById('userpw_re');
    const name =document.getElementById('name');
    const hp =document.getElementById('hp');
    const email =document.getElementById('email');
    const hobby =document.getElementsByName('hobby');
    const ssn1 =document.getElementById('ssn1');
    const ssn2 =document.getElementById('ssn2');
    
    const expNameText =/[가-힣]+$/;
    const expHpText =/^\d{3}-\d{3,4}-\d{4}$/;
    const expEmailText =/^[A-Za-z0-9\-\.]+@[A-Za-z0-9\-\.]+\.[A-Za-z0-9]+$/;
    const expSsn1Text =/^\d{6}/;
    const expSsn2Text =/^\d{7}/;

    if(userid.value == ''){
        alert('아이디를 입력하세요');
        userid.focus();
        return false;
    }
    if(userid.value.length < 4 || userid.value.length > 20){
        alert('아이디는 4자이상 20자 이하로 입력하세요');
        userid.focus();
        return false;
    }

    if(userpw.value == ''){
        alert('비밀번호를 입력하세요');
        userpw.focus();
        return false;
    }
    if(userpw.value.length < 4 || userid.value.length > 20){
        alert('비밀번호는 4자이상 20자 이하로 입력하세요');
        userpw.focus();
        return false;
    }

    if(userpw.value != userpw_re.value){
        alert('비밀번호와 비밀번호 확인의 값이 다릅니다');
        userpw.focus();
        return false;
    }
    if(!expNameText.test(name.value)){
        alert('이름 형식을 확인하세요\n 한글만 입력가능합니다');
        name.focus();
        return false;
    }
    if(!expHpText.test(hp.value)){
        alert('휴대폰번호 형식을 확인하세요\n 하이픈(-)을 포함해야 합니다');
        hp.focus();
        return false;
    }
    if(!expEmailText.test(email.value)){
        alert('이메일 형식을 확인하세요');
        email.focus();
        return false;
    }
    let count=0;
    for(let i in hobby){
        if(hobby[i].checked){
            count++;
        }
    }
    if(count==0){
        alert('취미는 적어도 한개이상 선택하세요');
        return false;
    }
    if(!expSsn1Text.test(ssn1.value) || expSsn2Text.test(ssn2.value) ){
        alert('주민등록을 확인해주세요');
        return false;
    }



    return true;
}


function moveFocus(){
    const ssn1 =document.getElementById('ssn1');
    if(ssn1.value.length >=6 ){
    document.getElementById('ssn2').focus();
    }
}

function program(){
    const ssn1 =document.getElementById('ssn1');
    const ssn2 =document.getElementById('ssn2');
    let ssn3 = ssn1.value+ssn2.value;
    const isssn =document.getElementById('isssn');

    let result=[];
    const num=[2,3,4,5,6,7,8,9,2,3,4,5,0];
    let sum=0;

        for(let i=0; i<ssn3.length; i++){
        result[i] =Number(ssn3.charAt(i));
        sum += result[i] *num[i];
        }

        let result1 = 11-sum%11;
        if(result1 >=10){
            result1%10;
        }
        if(result1 ==result[12]){
            alert('유효한 주민번호입니다.');
            isssn.value='y';
            if(ssn2.value.substr(0,1) < 3){
                document.getElementsByName('year')[0].value = 19 + ssn1.value.substr(0, 2);
            }else{
                document.getElementsByName('year')[0].value = 20 + ssn1.value.substr(0, 2);
            }
            document.getElementsByName('month')[0].value = ssn1.value.substr(2, 2);
            document.getElementsByName('day')[0].value = ssn1.value.substr(4, 2);
        }else{
            alert('유효하지 않은 주민번호 입니다 .');
            ssn1.value='';
            ssn2.value='';
        }

}
function ssn_change(){
    const isssn =document.getElementById('isssn');
    isssn.value='n';
    document.getElementsByName('year')[0].value='';
    document.getElementsByName('month')[0].value='';
    document.getElementsByName('day')[0].value='';
}





// function sendit() {
    

//     const expNameText =RegExp(/[가-힣]+$/);
//     const expHpText =RegExp(/^\d{3}-\d{3,4}-\d{4}$/);
//     const expEmailText =RegExp(/^[A-Za-z0-9\-\.]+@[A-Za-z0-9\-\.]+\.[A-Za-z0-9]+$/);

//     if(!$("#userid").val()){
//         alert('아이디를 입력하세요');
//         $("#userid").focus();
//         return false;
//     }
//     if($("#userid").val().length < 4|| $("#userid").val().length >20){
//         alert('아이디는 4자이상 20자 이하로 입력하세요');
//         $("#userid").focus();
//         return false;
//     }
//     if(!$("#userpw").val()){
//         alert('비밀번호를 입력하세요');
//         $("#userpw").focus();
//         return false;
//     }
//     if($("#userpw").val().length <4|| $("#userpw").val().length >20){
//         alert('비밀번호는 4자이상 20자 이하로 입력하세요');
//         $("#userpw").focus();
//         return false;
//     }
//     if(!$("#userpw").val() != !$("#userpw_re").val()){
//         alert('비밀번호와 비밀번호 확인의 값이 다릅니다');
//         $("#userpw").focus();
//         return false;
//     }

//     if(!expNameText.test($('#name').val())){
//         alert('이름 형식을 확인하세요\n 한글만 입력가능합니다');
//         $("#name").val("");
//         $("#name").focus();
//         return false;
//     }

//     if(!expHpText.test($('#hp').val())){
//         alert('휴대폰번호 형식을 확인하세요\n 하이픈(-)을 포함해야 합니다');
//         $("#hp").val("");
//         $("#hp").focus();
//         return false;
//     }
//     if(!expEmailText.test($('#email').val())){
//         alert('이메일 형식을 확인하세요');
//         $("#email").val("");
//         $("#email").focus();
//         return false;
//     }
//     let isHobby =false;

//     for(let i=0; i<$("[name='hobby']").length;i++){
//         if($("input:checkbox[name='hobby']").eq(i).is(":checked")==true){
//             isHobby=true;
//             break;
//         }
//     }
//     if(!isHobby){
//         alert('취미는 적어도 한개이상 선택하세요');
//         return false;
//     }
//     if($("#isssn").val() =='n'){
//         alert('주민번호 검증버튼을 눌러주세요');
//         return false;
//     }

//     return true;
// }

// $(function(){
//     $("#ssn1").on("keyup", function(){
//         if($(this).val().length >= 6){
//             $("#ssn2").focus();
//         }
//     });

//     $("#ssnBtn").on("click", function(){
//         // 주민등록번호 체크
        
//     });
// });// 시작하자마자 실행