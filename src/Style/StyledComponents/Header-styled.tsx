import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Nav = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  /* min-width: 100vmin; */
  top: 0;
  background-color: black;
  font-size: 1.2rem;
  z-index: 1;
  padding-top: 1rem;
`;

export const Col = styled(motion.div)`
  display: flex;
  align-items: center;
`;

// Logo, logoVariants
export const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 7rem;
  height: 6vmin;
  margin-left: 10vmin;
  fill: ${(props) => props.theme.red} path {
    stroke-width: 6px;
    stroke: white;
  }
`;

//Items, Item, Circle
export const Items = styled(motion.ul)`
  display: flex;
  align-items: center;
`;

export const Item = styled(motion.li)`
  margin-right: 2rem;
  color: ${(props) => props.theme.white.darker};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;

export const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.red};
`;

//Search, input
export const Search = styled(motion.form)`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 10vmin;
  svg {
    height: 25px;
  }
`;

export const Input = styled(motion.input)`
  transform-origin: right center;
  position: absolute;
  left: -170px;
  padding: 5px 10px;
  padding-left: 40px;
  z-index: -1;
  color: white;
  font-size: 16px;
  background: transparent;
  border: 1px solid ${(props) => props.theme.white.lighter};
`;
