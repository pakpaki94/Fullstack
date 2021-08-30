function send(){
    if(insert.id.value==""){
        alert("ID를 입력해주세요")
        insert.id.focus()
        return
    }else{
        if(insert.id.value.length >= 10){
            alert("ID는 10자 이내로 입력해주세요")
            insert.id.focus()
            return
        }
    }
    if(insert.name.value==""){
        alert("이름을 입력해주세요")
        insert.name.focus()
        return
    }else{
        if(insert.name.value.length >= 5){
            alert("이름은 5자 이내로 입력해주세요")
            insert.name.focus()
            return
        }
    }
    if(insert.pass.value==""){
        alert("비밀번호를 입력해주세요")
        insert.pass.focus()
        return
    }
    if(insert.pass2.value==""){
        alert("비밀번호확인을 입력해주세요")
        insert.pass2.focus()
        return
    }
    if(insert.area.value==""){
        alert("지역이 선택되지 않았습니다")
        return
    }
    if(insert.address1.value=="" || insert.address2.value==""){
        alert("주소를 입력해주세요")
        insert.address1.focus()
        return
    }
    if(insert.tel1.value=="" || insert.tel2.value=="" || insert.tel3.value=="" ){
        alert("전화번호를 입력해주세요")
        insert.tel1.focus()
        return
    }
    if(insert.sex.value==""){
        alert("성별을 체크해주세요")
        return
    }
    if(insert.age.value==""){
        alert("연령대를 체크해주세요")
        return
    }
}