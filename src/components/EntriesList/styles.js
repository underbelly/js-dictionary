import styled from 'styled-components';
import { colors } from "../../identity";

export const StyledContainer = styled.li`
    padding: 25px 10px;
    border-bottom: 1px solid ${colors.grey1};
    cursor: pointer;
    list-style: none;
`;

export const StyledContent = styled.div`
    padding: 15px 0;
    border-bottom: 1px solid ${colors.grey2};

    &:hover {
        color: ${colors.grey1};
        transition: color .2s ease;
    }

    &::before {
        content: attr(data-icon);
        margin-right: 15px;
        font-size: 1.25em;
    }
`;
