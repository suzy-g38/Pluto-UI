import t from"react";import i from"prop-types";const r=({variant:i,size:r,children:e,onClick:n,disabled:o})=>{const s=[i,r].join(" ");return t.createElement("button",{type:"button",className:`pluto-button ${s}`,onClick:n,disabled:o},e)};r.propTypes={variant:i.string,size:i.string,onClick:i.func,children:i.string,disabled:i.bool},r.defaultProps={variant:"primary",size:"medium"};export{r as Button};
