import {Children, cloneElement} from 'react';
export const filhosComProps = (props) =>{
  return Children.map(props.children, child => {
    return cloneElement(child,{...props});
  });
};