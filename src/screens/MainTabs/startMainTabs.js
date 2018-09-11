import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
//se iniciar aqui

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("ios-share-alt", 30)

    ]).then(source => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'the-pratical-guide.FindPlaceScreen',
                    label: "find Place",
                    title: "find place",
                    icon: source[0]

                }, {
                    screen: 'the-pratical-guide.SharePlaceScreen',
                    label: "Share Place",
                    title: "Share place",
                    icon: source[1]

                }
            ]
        })
    })
}

export default startTabs;