import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useQuery } from "react-query";
import { getChampionRotation } from '../api';
import { makeChampionImagePath } from '../utils';

const Wrapper = styled.div`
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RotationTitle = styled.div`
    text-align: center;
    margin-top: 100px;
    margin-bottom: 10px;
    font-size: 40px;
`;

const NextSvg = styled.svg`
    width: 50px;
    height: 50px;
    margin: auto;
    display: block;
`;

const Slider = styled.div`
  position: relative;
  top: 40px;
`;

const RotationBox = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  position: absolute;
  margin-left: 2%;
  width: 100%;
`;

const ChampionBox = styled(motion.img)`
  border: solid 1px white;  
  border-radius: 100px;
  height: 130px;
  text-align: center;
`;

const rotationBoxVariants = {
    hidden: {
        x: window.outerWidth + 10,
    },
    visible: {
        x: 0,
    },
    exit: {
        x: -window.outerWidth - 10,
    },
};

export function ChampionRotations() {
    const [index, setIndex] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const [rotationIdx, setRotaionIdx] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
    const incraseIndex = () => {
        if (leaving) return;
        setLeaving(true);
        setIndex((prev) => prev + 1);
        if (rotationIdx[0] === 0) {
            setRotaionIdx([8, 9, 10, 11, 12, 13, 14, 15])
        } else {
            setRotaionIdx([0, 1, 2, 3, 4, 5, 6, 7])
        }

    };
    const toggleLeaving = () => setLeaving((prev) => !prev)
    const { data: rotationChampionData, isLoading } = useQuery(["lol", "platform", "v3", "champion-rotations"], getChampionRotation);
    console.log(rotationChampionData);
    return (
        <Wrapper>
            {isLoading ? (
                <Loader>Loading...</Loader>
            ) : (
                <>
                    <RotationTitle>
                        로테이션 챔피언 목록
                    </RotationTitle>
                    <NextSvg
                        fill="white"
                        onClick={incraseIndex}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z" />
                    </NextSvg>
                    <Slider>
                        <AnimatePresence
                            initial={false}
                            onExitComplete={toggleLeaving}
                        >
                            <RotationBox
                                variants={rotationBoxVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ type: "tween", duration: 1 }}
                                key={index}
                            >
                                {rotationIdx.map((i) => (
                                    <ChampionBox
                                        key={i}
                                        src={makeChampionImagePath(rotationChampionData.freeChampionNames?.[i])}
                                        alt="이미지를 불러올 수 없습니다."
                                    ></ChampionBox>
                                ))}
                            </RotationBox>
                        </AnimatePresence>
                    </Slider>
                </>
            )}
        </Wrapper>
    );
}