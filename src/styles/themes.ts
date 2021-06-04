import { DefaultTheme } from 'styled-components'

const lightTheme: DefaultTheme = {
  name: 'light',
  backgroundColor: '#ffffff',
  textColor: '#000000',
  colors: {
    transparent: 'transparent',
    black: '#000000',
    white: '#ffffff',
    grey: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
    },
    teal: {
      50: '#E6FFFA',
      100: '#B2F5EA',
      200: '#81E6D9',
      300: '#4FD1C5',
      400: '#38B2AC',
      500: '#319795',
      600: '#2C7A7B',
      700: '#285E61',
      800: '#234E52',
      900: '#1D4044',
    },
    red: {
      50: '#FFF5F5',
      100: '#FED7D7',
      200: '#FEB2B2',
      300: '#FC8181',
      400: '#F56565',
      500: '#E53E3E',
      600: '#C53030',
      700: '#9B2C2C',
      800: '#822727',
      900: '#63171B',
    },
  },
  fontFamily: 'SourceSerifPro-Regular serif',
  fontSize: {
    xxs: '0.75rem',
    xs: '0.875rem',
    sm: '1rem',
    md: '1.125rem',
    ml: '1.5rem',
    lg: '2.25rem',
    xl: '3rem',
    xxl: '3.75rem',
  },
  spacing: {
    xxs: '0.25rem',
    xs: '0.5rem',
    sm: '0.75rem',
    base: '1rem',
    md: '1.25rem',
    lg: '2rem',
    xl: '3.25rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
}

const darkTheme: DefaultTheme = {
  name: 'dark',
  backgroundColor: '#000000',
  textColor: '#ffffff',
  colors: {
    transparent: 'transparent',
    black: '#000000',
    white: '#ffffff',
    grey: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
    },
    teal: {
      50: '#E6FFFA',
      100: '#B2F5EA',
      200: '#81E6D9',
      300: '#4FD1C5',
      400: '#38B2AC',
      500: '#319795',
      600: '#2C7A7B',
      700: '#285E61',
      800: '#234E52',
      900: '#1D4044',
    },
    red: {
      50: '#FFF5F5',
      100: '#FED7D7',
      200: '#FEB2B2',
      300: '#FC8181',
      400: '#F56565',
      500: '#E53E3E',
      600: '#C53030',
      700: '#9B2C2C',
      800: '#822727',
      900: '#63171B',
    },
  },
  fontFamily: 'SourceSerifPro-Regular serif',
  fontSize: {
    xxs: '0.75rem',
    xs: '0.875rem',
    sm: '1rem',
    md: '1.125rem',
    ml: '1.5rem',
    lg: '2.25rem',
    xl: '3rem',
    xxl: '3.75rem',
  },
  spacing: {
    xxs: '0.25rem',
    xs: '0.5rem',
    sm: '0.75rem',
    base: '1rem',
    md: '1.25rem',
    lg: '2rem',
    xl: '3.25rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
}

export { lightTheme, darkTheme }
