
// UNCOMMENT WHEN CREATING IOS BUILD
// Build notes:
// It seems that for building locally (IOS), eas uses git tracked files. 
// Therefore, things like .env files need to be removed from .gitignore, 
// which should not be a problem as long as the .env points to a directory that contains
// the keys and does not contain the keys itself.
// For Android, on EAS build servers, files should be uploaded as .json, not pasted in. 
// Also any .env files need to be untracked or commented out, or else eas build servers will
// interpret it as the path from the local machine and not the environment variables on EAS itself.

// import * as dotenv from 'dotenv'
// import path from 'path';


// dotenv.config({
//   path: [path.resolve(__dirname, '.env.local')],
// })

// console.log("GOOGLE_SERVICES_JSON_PLIST:", process.env.GOOGLE_SERVICES_JSON_PLIST);
// console.log("GOOGLE_SERVICES_JSON:", process.env.GOOGLE_SERVICES_JSON);
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
