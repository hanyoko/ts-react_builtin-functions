import React, { useState } from 'react';

const Addfunction = () => {
    const [dataForm, setDataForm] = useState({
        subjects: "",
        name: "",
        type: "",
        syntax: "",
        desc: ""
    })
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDataForm({
            ...dataForm,
            [name]: name === "subject" ? Number(value) : value
        })
    }
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(dataForm);
        fetch(`http://localhost:3003/functions/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataForm)
        }).then(res => {
            if(res.ok){
                alert("등록되었습니다.")
            }
        })
        .catch(e=>console.log)
    }
    return (
        <div>
            <form>
                <p><input name="subjects" value={dataForm.subjects} onChange={onChange} placeholder="과목을 입력하세요(숫자)" /></p>
                <p><input name="name" value={dataForm.name} onChange={onChange} placeholder="함수이름을 입력하세요(숫자)" /></p>
                <p><input name="type" value={dataForm.type} onChange={onChange} placeholder="타입을 입력하세요(숫자)" /></p>
                <p><input name="syntax" value={dataForm.syntax} onChange={onChange} placeholder="구문을 입력하세요(숫자)" /></p>
                <p><input name="desc" value={dataForm.desc} onChange={onChange} placeholder="설명을 입력하세요(숫자)" /></p>
                <p><button type="submit">등록</button></p>
            </form>
        </div>
    );
};

export default Addfunction;