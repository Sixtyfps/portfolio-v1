import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/images/proj1.png"
import todoImg from "./../../../assets/images/proj2.png"
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
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugiat harum, nesciunt odio qui vitae?",
        type: "spa",
        id: 1
    },
    {
        title: "Todo List",
        src: todoImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugiat harum, nesciunt odio qui vitae?",
        type: "react",
        id: 2
    },
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugiat harum, nesciunt odio qui vitae?",
        type: "spa",
        id: 3
    },
    {
        title: "Todo List",
        src: todoImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugiat harum, nesciunt odio qui vitae?",
        type: "react",
        id: 4
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

