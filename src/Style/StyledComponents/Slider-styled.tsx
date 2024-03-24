import { motion } from "framer-motion";
import styled from "styled-components";

export const Slider = styled(motion.div)`
  position: relative;
  top: -20vmin;
  width: 100%;
  height: 10vmin;
  margin-bottom: 12vmin;
`;

export const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, minmax(100pt, 1fr));
  width: 100%;
  gap: 1vmin;
  position: absolute;
`;

export const RowVariants = {
  hidden: (direction: boolean) => {
    return {
      x: direction ? window.innerWidth : -window.innerWidth,
    };
  },
  visible: {
    x: 0,
  },
  exit: (direction: boolean) => {
    return {
      x: direction ? -window.innerWidth : window.innerWidth,
    };
  },
};

export const ShowBox = styled(motion.div)<{ $bgPhoto: string }>`
  background-color: white;
  background-image: url(${(props) => props.$bgPhoto});
  background-size: cover;
  background-position: center center;
  height: 15vmin;
  min-height: 15vmin;
  color: black;
  font-size: 5vmin;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

export const showBoxVar = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
    y: -100,
    transition: {
      delay: 0.5,
      duration: 0.3,
      type: "tween",
    },
  },
};

export const RightMove = styled(motion.div)`
  background-color: transparent;
  width: 5vmin;
  height: 15vmin;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vmin;
  cursor: pointer;
`;

export const LeftMove = styled(motion.div)`
  background-color: transparent;
  width: 5vmin;
  height: 15vmin;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vmin;
  cursor: pointer;
`;

export const SliderTitle = styled.h1`
  font-size: 2.5vmin;
  margin-left: 2vmin;
  margin-bottom: 1vmin;
  font-weight: bold;
`;

export const MovieTitle = styled(motion.div)`
  width: 100%;
  height: 20%;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 0;
  font-size: 1.5vmin;
  color: white;
  font-weight: 300;
  padding-left: 2vmin;
  box-sizing: border-box;
  opacity: 0;
`;

export const TitleView = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.2,
      type: "tween",
    },
  },
};
