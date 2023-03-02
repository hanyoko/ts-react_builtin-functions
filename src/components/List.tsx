import React from 'react';
import styled from 'styled-components';
import useAsync, { ListdataType } from '../customhook/useAsync';

async function getData() {
    try{
        const response = await fetch('http://localhost:3003/functions')
        const data = response.json()
        return data;
    }
    catch(e){
        console.log(e);
    }
}

const ListWrapper = styled.div`
    text-align: center;
    h2 {
        padding: 50px;
        font-size: 28px;
    }
    table {
        width: 100%;
        max-width: 0 auto;
        margin: 0 auto;
        border-collapse: collapse;
        th {
            border-top: 3px solid #333;
            border-bottom: 1px solid #ccc;
            padding: 20px;
        }
        td {
            padding: 20px;
            border-bottom: 1px solid #ccc;
        }
    }
`;

type ListsProps = {
    subject: number;
}
const List = ({subject}: ListsProps) => {
    const [functions, fetchData] = useAsync(getData);
    let { data, loading, error } = functions;
    if(loading) return <div>로딩 중입니다.</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>데이터가 없습니다.</div>
    if(data) {
        if(subject > 0){
            data = (data as Array<ListdataType>).filter(da => da.subjects === subject);
        }
    }
    return (
        <ListWrapper>
            <h2>주요 내장 함수</h2>
            <table>
                <tbody>
                    <tr>
                        <td>번호</td>
                        <td>함수명</td>
                        <td>데이터타입</td>
                        <td>구문</td>
                        <td>설명</td>
                    </tr>
                    {(data as Array<ListdataType>).map(da=> <tr>
                        <td>{da.id}</td>
                        <td>{da.name}</td>
                        <td>{da.type}</td>
                        <td>{da.syntax}</td>
                        <td>{da.desc}</td>
                    </tr>)}
                </tbody>
            </table>
        </ListWrapper>
    );
};

export default List;