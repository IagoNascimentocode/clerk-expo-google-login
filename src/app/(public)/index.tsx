import { View, Text, StyleSheet } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import * as Linking from 'expo-linking'
import { Button } from '@/components/Button'
import { useOAuth } from '@clerk/clerk-expo'
import { useEffect, useState } from 'react'

WebBrowser.maybeCompleteAuthSession()
export default function SignIn() {

  const [isloading, setIsLoading] = useState(false)

  const googleOAuth = useOAuth({ strategy: 'oauth_google' })

  async function onGoogleSignIn() {
    try {
      setIsLoading(true)

      const redirectUrl = Linking.createURL('/')
      const oAuthFlow = await googleOAuth.startOAuthFlow({ redirectUrl })
      if (oAuthFlow.authSessionResult?.type === 'success') {
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId })
        }
      } else {
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    WebBrowser.warmUpAsync()

    return () => {
      WebBrowser.coolDownAsync()
    }

  }, [])

  return (
    <View style={styles.contianer}>
      <Text style={styles.title}>Entrar</Text>
      <Button
        icon='logo-google'
        title='Entrar com o Google'
        onPress={onGoogleSignIn}
        isLoading={isloading} />

    </View >
  )
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    gap: 12
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  }
})