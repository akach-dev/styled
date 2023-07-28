const em = (value: number) => value / 16

export const theme = {
  colors: {
    primaryBg: '#1F1F20',
    secondaryBg: "#252527",
    accent: '#7572D5',
    font: '#fff',
    borderColor: '#4A4A4A',
    placeholderColor: '#495057',
  },
  media: {
    tablet: `screen and (max-width: ${em(767.98)}em)`,
    mobile: `screen and (max-width: ${em(576)}em)`
  }
}

