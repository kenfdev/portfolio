import { createStitches } from '@stitches/react';
import { Property } from '@stitches/react/types/css';

export const { styled, css } = createStitches({
  theme: {
    colors: {
      gray200: '#f2f2f2',
      gray300: '#e5e5e5',
      gray400: '#cccccc',
    },
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
  utils: {
    typography: (value: 'h1' | 'h2' | 'h3') => {
      switch (value) {
        case 'h1':
          return {
            // not implemented
          };
        case 'h2':
          return {
            // not implemented
          };
        case 'h3':
          return {
            // not implemented
          };
        default:
          return {
            // not implemented
          };
      }
    },
    // Abbreviated margin properties
    m: (value: Property.Margin) => ({
      margin: value,
    }),
    mt: (value: Property.Margin) => ({
      marginTop: value,
    }),
    mr: (value: Property.Margin) => ({
      marginRight: value,
    }),
    mb: (value: Property.Margin) => ({
      marginBottom: value,
    }),
    ml: (value: Property.Margin) => ({
      marginLeft: value,
    }),
    mx: (value: Property.Margin) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Property.Margin) => ({
      marginTop: value,
      marginBottom: value,
    }),
    // Abbreviated padding properties
    p: (value: Property.Padding) => ({
      padding: value,
    }),
    pt: (value: Property.Padding) => ({
      paddingTop: value,
    }),
    pr: (value: Property.Padding) => ({
      paddingRight: value,
    }),
    pb: (value: Property.Padding) => ({
      paddingBottom: value,
    }),
    pl: (value: Property.Padding) => ({
      paddingLeft: value,
    }),
    px: (value: Property.Padding) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Property.Padding) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    // A property for applying width/height together
    size: (value: Property.Width | Property.Height) => ({
      width: value,
      height: value,
    }),
  },
});
