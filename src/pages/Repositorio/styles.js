import styled from "styled-components";

export const Container = styled.div`
    max-width: 700px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    padding: 30px;
    margin: 80px auto;

    h1{
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;

        svg{
            margin-right: 10px;
        }
    }
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    a{
        color: #7159c1;
        font-size: 16px;
        text-decoration: none;
    }

    img{
        width: 120px;
        border-radius: 50%;
        margin-top: 20px;
    }

    h1{
        font-size: 24px;
        margin-top: 10px;
    }

    p{
        margin-top: 5px;
        font-size: 14px;
        color: #666;


        line-height: 1.4;
        text-align: center;
        max-width: 400px;
    }
`;

export const Loading = styled.div`

    color: #FFF;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const BackButton = styled.button`
    border: 0;
    outline: 0;
    background: transparent;

    svg{
        color: #7159c1;
        width: 30px;
        height: 30px;
    }

    &:hover{
        opacity: 0.7;
    }


    


`;

export const IssuesList = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;

    li{
        display: flex;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;

        & + li{
            margin-top: 10px;
        }

        img{
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 2px solid #eee;
        }

        div{
            flex: 1;
            margin-left: 15px;

            strong{
                font-size: 16px;

                a{
                    text-decoration: none;
                    color: #333;

                    &:hover{
                        color: #7159c1;
                    }

                }

                span{
                    background: #eee;
                    color: #333;
                    border-radius: 2px;
                    font-size: 12px;
                    font-weight: 600;
                    height: 20px;
                    padding: 3px 4px;
                    margin-left: 10px;
                }
            }

            p{
                margin-top: 5px;
                font-size: 12px;
                color: #999;
            }
        }
    }
`;

export const PageActions = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    button{
        outline: 0;
        border: 0;
        background: #7159c1;
        color: #FFF;
        padding: 5px 10px;
        border-radius: 4px;

        &:disabled{
            cursor: not-allowed;
            opacity: 0.6;
        }
    }
`;

export const FilterList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    button{
        outline: 0;
        border: 0;
        padding: 8px;
        border-radius: 4px;
        margin: 0 3px;

        &:nth-child(${props => props.active + 1}){
            background: #7159c1;
            color: #FFF;
        }
    }
`;












