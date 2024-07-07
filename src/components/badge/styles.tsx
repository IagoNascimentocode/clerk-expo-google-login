import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
  },
  motiView: {
    marginTop: -32
  },
  band: {
    marginBottom: -24, zIndex: 1
  },
  badge: {
    width: '100%',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: 500,
    backgroundColor: '#161618',
    borderRadius: 18,
    overflow: 'hidden',
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 32
  },
  company: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    paddingTop: 54
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  id: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  name: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 24
  },
  email: {
    color: '#ccc',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 24
  }
})