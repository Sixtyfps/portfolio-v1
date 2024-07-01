import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import portfolio from "./../../../assets/images/portfolio_jk.jpg"
import counter_v1 from "./../../../assets/images/counter1.jpg"
import codewars from "./../../../assets/images/codewars.jpg"
import todolist from "./../../../assets/images/todolist.jpg"
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles"
import {AnimatePresence, motion} from "framer-motion"

const tabsItems: Array<{ status: TabsStatusType, title: string }> = [
    {
        title: "all",
        status: "all"
    },
    {
        title: "landing",
        status: "landing"
    },
    {
        title: "react",
        status: "react"
    },
    {
        title: "js",
        status: "js"
    }
]


const worksData = [
    {
        title: "Portfolio",
        src: portfolio,
        text: "My personal portfolio page, created to improve my skills in web development and single-page application design, features details about my professional skills and abilities",
        type: "landing",
        id: 1,
        codeLink: "https://github.com/Sixtyfps/portfolio-v1",
        demoLink: "https://portfolio-v1-9cv3-sixtyfps-projects.vercel.app/"
    },
    {
        title: "Codewars",
        src: codewars,
        text: "As I continuously improve my programming skills and algorithm-solving abilities, the list of solved problems grows every day. Currently, I am in the top 1% of users by honor level, with about 700 solved problems",
        type: "js",
        id: 3,
        codeLink: "https://github.com/Sixtyfps/codewars/blob/master/codewars.html",
        demoLink: "https://github.com/Sixtyfps/codewars/tree/master"
    },
    {
        title: "Todo List",
        src: todolist,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugiat harum, nesciunt odio qui vitae?",
        type: "react",
        id: 2,
        codeLink: "",
        demoLink: ""
    },
    {
        title: "Counter",
        src: counter_v1,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugiat harum, nesciunt odio qui vitae?",
        type: "react",
        id: 4,
        codeLink: "",
        demoLink: ""
    }
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }
    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }
    if (currentFilterStatus === "js") {
        filteredWorks = worksData.filter(work => work.type === "js")
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <AnimatePresence>
                        {filteredWorks.map((w) => {
                            return (
                                <motion.div style={{width: "400px", flexGrow: 1, maxWidth: "540px"}}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={w.id}
                                >
                                    <Work title={w.title}
                                          src={w.src}
                                          text={w.text}
                                          key={w.id}
                                          codeLink={w.codeLink}
                                          demoLink={w.demoLink}
                                    />
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

