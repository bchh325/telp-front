import * as dotenv from 'dotenv'
import path from 'path';


dotenv.config({
  path: [path.resolve(__dirname, '.env.local')],
})

console.log("GOOGLE_SERVICES_JSON_PLIST:", process.env.GOOGLE_SERVICES_JSON_PLIST);
console.log("GOOGLE_SERVICES_JSON:", process.env.GOOGLE_SERVICES_JSON);
export default {
  "expo": {
    "name": "telp-front",
    "slug": "telp-front",
    "version": "1.0.0",
    "orientation": "portrait",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "splash": {
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "infoPlist": {
        "ITSAppUsesNonExemptEncryption": false
      },
      "supportsTablet": true,
      "googleServicesFile": process.env.GOOGLE_SERVICES_JSON_PLIST,
      "bundleIdentifier": "com.tofushop.telp"
    },
    "android": {
      "adaptiveIcon": {
        "backgroundColor": "#ffffff"
      },
      "googleServicesFile": process.env.GOOGLE_SERVICES_JSON,
      "package": "com.tofushop.telp"
    },
    "web": {
      "bundler": "metro",
      "output": "static",
    },
    "plugins": [
      
      "expo-router",
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
      [
        "expo-build-properties",
        {
          "ios": {
            "useFrameworks": "static"
          }
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "router": {
        "origin": false
      },
      "eas": {
        "projectId": "1db38a78-a824-477d-9153-340547251973"
      }
    }
  }
}
