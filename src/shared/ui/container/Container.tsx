import styled from "styled-components";

type ContainerProps = {
    direction?: "row" | "column";
    justify?: "flex-start" | "center" | "flex-end" | "space-between";
    align?: "flex-start" | "center" | "flex-end" | "stretch";
    gap?: number;
};

export const Container = styled.div<ContainerProps>`
    display: flex;

    flex-direction: ${(props) => props.direction ?? "row"};
    justify-content: ${(props) => props.justify ?? "flex-start"};
    align-items: ${(props) => props.align ?? "stretch"};
    gap: ${(props) => props.gap ?? 0}px;
`;