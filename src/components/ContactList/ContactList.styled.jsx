import styled from 'styled-components';

export const ContactListUl = styled.ul`
    background-color: rgba(255,255,255,0.2);
    padding: 0.5em;
    border-radius: 20px;
    border-left: 1px solid $white;
    border-top: 1px solid $white;
    backdrop-filter: blur(10px);
    box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.5);
    text-align: center;
    text-decoration: none;
    position: relative;
    transition: all 0.2s ease-in-out;
`;

export const ContactListLi = styled.li`
    display: flex;
    justify-content: space-between;
    flex-basis: 100%;
    min-block-size: 35px;
    box-sizing: border-box;
`;

export const ItemParagraph = styled.p`
    display: block;
    font-weight: 400;
    color: #fff;
    opacity: 0.7;
    font-size: 1rem;
    margin-right: 20px;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
`;

export const ItemButton = styled.button`
    background-color: transparent;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: none;
    border-left: 1px solid $white;
    border-top: 1px solid $white;
    border-radius: 5000px;
    backdrop-filter: blur(5px);
    box-shadow: 4px 4px 60px rgba(0,0,0,0.2);
    color: #fff;
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    transition: all 0.2s ease-in-out;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    width: 100px;
    height: 35px;
    font-size: 14px;
        
    &:hover {
        background-color: rgba(255,255,255,0.1);
        box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
        cursor: pointer;
    }

    &:focus {
        background-color: rgba(255,255,255,0.1);
        box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
    }
        
    &:active {
        background-color: rgba(255,255,255,0.2);
    }
`;