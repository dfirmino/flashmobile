import{ AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'
const NOTIFICATION_KEY = 'NOTIFICATIONS'


export function removeNotificacao () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
  }
  
  function criarNotificacao () {
    return {
      title: 'Já estudou?',
      body: "👋 Ei, Não esqueça de estudar hoje!",
      ios: {
        sound: true,
      },
      android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true,
      }
    }
  }
  
  export function setNotificacao () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()
  
                let prox = new Date()
                prox.setDate(prox.getDate() + 1)
                prox.setHours(20)
                prox.setMinutes(0)
  
                Notifications.scheduleLocalNotificationAsync(
                  criarNotificacao(),
                  {
                    time: prox,
                    repeat: 'day',
                  }
                )
  
                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
              }
            })
        }
      })
  }