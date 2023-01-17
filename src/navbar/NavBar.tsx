import {Dispatch, ReactElement, SetStateAction} from "react";
import {Pages, pages} from "../Layout";
import {Container, Greeting, Header, Page, PagesMenu} from "./NavBar.styles";


export function NavBar({handleChangePage}: { handleChangePage: Dispatch<SetStateAction<Pages>> }): ReactElement {

    const handleClick = (page: Pages) => handleChangePage(page);

    return <Container><Header>
        <PagesMenu>{
            Object.entries(pages).map(
                ([key, value]) => <Page onClick={() => handleClick(key as Pages)} key={key}>{value}</Page>
            )}</PagesMenu>
        <Greeting>User</Greeting>
    </Header></Container>
}