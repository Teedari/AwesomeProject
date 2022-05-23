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
    lineHeight: 30,
    fontSize: 21,
    fontWeight: '700',
  },
  h2: {
    lineHeight: 30,
    fontSize: 18,
    fontWeight: '700',
  },
  h3: {
    lineHeight: 30,
    fontSize: 15,
    fontWeight: '700',
  },
  h4: {
    lineHeight: 30,
    fontSize: 12,
    fontWeight: '700',
  },

  /** Components */
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContainer: {
  width: '100%',
   marginHorizontal: 20,
   backgroundColor: '#fff',
   shadowColor: 'rgba(0,0,0,0.2)',
   shadowOffset: {width: 1, height: 1},
   shadowRadius: 4,
   shadowOpacity: '1',
   elevation: 3
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  modalBody: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  }
})