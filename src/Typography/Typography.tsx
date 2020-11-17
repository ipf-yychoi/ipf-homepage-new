import { css } from "styled-components";

type TextType = "hero" | "heading1" | "heading2" | "body" | "caption";

function Typography(type?: TextType, size?: number, weight?: number) {
  switch (type) {
    case "hero":
      return css`
        font-size: 3.125rem;
        font-weight: ${weight ? weight : 900};
        line-height: 1.08;
      `;
    case "heading1":
      //38px
      return css`
        font-size: 2.375rem;
        font-weight: ${weight ? weight : 700};
        line-height: 1.5;
      `;
    case "heading2":
      return css`
        font-size: 1.125rem;
        font-weight: ${weight ? weight : 700};
        line-height: 1.5;
      `;
    case "body":
      return css`
        font-size: ${size ? size : 1}rem;
        font-weight: ${weight ? weight : 400};
        line-height: 1.5;
      `;
    case "caption":
      return css`
        font-size: 0.75rem;
        font-weight: ${weight ? weight : 400};
        line-height: 1.5;
      `;
  }
}

export default Typography;
