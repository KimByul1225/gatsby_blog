import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import lastIcon from "../../images/blog/icon_pagination_last.png";
import lastIconOn from "../../images/blog/icon_pagination_last_on.png";
import firstIcon from "../../images/blog/icon_pagination_first.png";
import firstIconOn from "../../images/blog/icon_pagination_first_on.png";
import nextIcon from "../../images/blog/icon_pagination_next.png";
import nextIconOn from "../../images/blog/icon_pagination_next_on.png";
import prevIcon from "../../images/blog/icon_pagination_prev.png";
import prevIconOn from "../../images/blog/icon_pagination_prev_on.png";

interface IPagination{
    total: number;
    limit: number; 
    offset: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

/**
 * @description Blog Pagination을 위한 component 
 */

const Pagination = ( {total, limit, page, setPage} : IPagination) => {
     //pagination 갯수 계산. 5개 이상이면 5리턴, 5개 이하면 전체게시물 갯수 / 리밋수 만큼만 리턴
    const numPages = Math.ceil(total / limit) > 5 ? 5 : Math.ceil(total / limit);
    
    //마지막 페이지 계산.
    const lastPage = Math.ceil(total / limit);

    //pagination 마지막 버튼 처리를 위한 조건. 5개보다 적으면 numPages 갯수만큼 보여주고 5개보다 많을 때 lastPage/numPages(5개보다 많은 조건이라 무조건 5임.)의 나머지 값만큼 갯수 생성
    const pagingLastNum = lastPage > 5 ? lastPage % numPages : numPages;

    //pagination 버튼의 첫번째 숫자 계산. 1~5까지는 1, 6~10까지 6, ...
    const pagingFirstNum = (page - 1) - ((page - 1) % 5) + 1;
    
    const paginationgArr = new Array(
        page <= (lastPage - pagingLastNum) ? numPages : pagingLastNum
        ).fill(null); 




    
    return (
        <>
            <PaginationWrap>
                {
                    paginationgArr.length > 0 && <>
                        <FirstButton
                            onClick={() => setPage(1)} disabled={page === 1}
                        >
                            <span className="ir_so">맨 앞페이지로 이동</span>
                        </FirstButton>
                        <PrevButton
                            onClick={() => setPage(page - 1)} disabled={page === 1}
                        >
                            <span className="ir_so">이전 페이지로 이동</span>
                        </PrevButton>
                    </>
                }
                <NumberBox>
                    {
                        paginationgArr.map((_, index)=>{
                            return(
                                <button
                                    key={index + 1}
                                    onClick={() => setPage(pagingFirstNum + index)}
                                    className={
                                        pagingFirstNum + index === page ? "on" : undefined
                                    }
                                >
                                    {pagingFirstNum + index}
                                </button>
                            )
                        })
                    }
                </NumberBox>
                {/* <NumberBox>
                    {
                        paginationgArr.map((_, index)=>{
                            return(
                                <button
                                    key={index + 1}
                                    onClick={() => setPage(index + 1)}
                                    className={
                                        index + 1 === page ? "on" : undefined
                                    }
                                >
                                    {index + 1}
                                </button>
                            )
                        })
                    }
                </NumberBox> */}
                {
                    paginationgArr.length > 0 && <>
                        <NextButton
                            onClick={() => setPage(page + 1)} disabled={page === lastPage}
                        >
                            <span className="ir_so">다음 페이지로 이동</span>
                        </NextButton>
                        <LastButton
                            onClick={() => setPage(lastPage)} disabled={page === lastPage}
                        >
                            <span className="ir_so">마지막 페이지로 이동</span>
                        </LastButton>
                    </>
                }
                
            </PaginationWrap>
        </>
    );
};

export default Pagination;



const PaginationWrap = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 60px 0 170px;
    @media screen and (max-width: 1200px){
        margin: 60px 0 80px;
    }
    @media screen and (max-width: 768px){
        margin: 30px 0 50px;
    }
`
const FirstButton = styled.button`
    width: 40px; 
    height: 40px; 
    background: #fff url(${firstIconOn}) center left no-repeat;
    background-size: 20px; 
    margin-right: 10px;
    &:disabled{
        background: #fff url(${firstIcon}) center left no-repeat; 
        cursor: unset;
    }
`
const PrevButton = styled(FirstButton)`
    background: #fff url(${prevIconOn}) center left no-repeat;
    background-size: 20px; 
    &:disabled{
        background: #fff url(${prevIcon}) center left no-repeat; 
        cursor: unset;
    }
`

const NextButton = styled(FirstButton)`
    background: #fff url(${nextIconOn}) center left no-repeat;
    background-size: 20px; 
    &:disabled{
        background: #fff url(${nextIcon}) center left no-repeat; 
        cursor: unset;
    }
`
const LastButton = styled(FirstButton)`
    background: #fff url(${lastIconOn}) center left no-repeat;
    background-size: 20px; 
    &:disabled{
        background: #fff url(${lastIcon}) center left no-repeat; 
        cursor: unset;
    }
`

const NumberBox = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    button{
        background-color: #fff;
        color: #828282;
        font-size: 16px;
        font-weight: 400;
        height: 40px;
        margin-right: 10px;
        width: 40px;
    }
    button.on{
        background-color: #ff4d15;
        border-radius: 4px;
        color: #fff;
    }
    @media screen and (max-width: 768px){
        button {
            font-size: 12px;
            height: 25px;
            width: 25px;
        }
    }
`