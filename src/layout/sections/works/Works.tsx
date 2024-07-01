import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import portfolio from "./../../../assets/images/portfolio_jk.jpg"
import counter_v1 from "./../../../assets/images/counter1.jpg"
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
        title: "spa",
        status: "spa"
    }
]


const worksData = [
    {
        title: "Portfolio",
        src: portfolio,
        text: "Exact that webpage you are currently on (:",
        type: "spa",
        id: 1,
        codeLink: "https://github.com/Sixtyfps/portfolio-v1",
        demoLink: "https://portfolio-v1-9cv3-sixtyfps-projects.vercel.app/"
    },
    {
        title: "Todo List",
        src: counter_v1,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugiat harum, nesciunt odio qui vitae?",
        type: "react",
        id: 2,
        codeLink: "",
        demoLink: ""
    },
    {
        title: "Codewars",
        src: counter_v1,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugiat harum, nesciunt odio qui vitae?",
        type: "spa",
        id: 3,
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
    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
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

