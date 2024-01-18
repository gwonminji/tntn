import { css, CSSProp } from 'styled-components';

export interface DeviceProps {
  [key: string]: number;
}

export const DeviceSize: DeviceProps = {
  mobile: 767,
  tablet: 1023,
};

export const DeviceQuery = Object.keys(DeviceSize).reduce(
  (acc, label) => {
    acc[label] = (
      literals: TemplateStringsArray,
      ...placeholders: any[]
    ) => css`
      @media only screen and (max-width: ${DeviceSize[label]}px) {
        ${css(literals, ...placeholders)};
      }
    `;
    return acc;
  },
  {} as Record<
    keyof typeof DeviceSize,
    (l: TemplateStringsArray, ...p: any[]) => CSSProp
  >,
);
