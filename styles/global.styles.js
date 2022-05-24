import { StyleSheet } from 'react-native'


export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10
  },
  lato:{
    fontFamily: 'nunito'
  },
  latoBold:{
    fontFamily: 'lato-bold'
  },
  p: {
    lineHeight: 18,
    fontSize: 13
  },
  h1: {
    paddingVertical: 10,
    fontSize: 21,
    fontWeight: '700',
  },
  h2: {
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: '700',
  },
  h3: {
    paddingVertical: 10,
    fontSize: 15,
    fontWeight: '700',
  },
  h4: {
    paddingVertical: 10,
    fontSize: 12,
    fontWeight: '700',
  },

  /** Components */
  formGroup: {
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  inputTextArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 30,
  }
})