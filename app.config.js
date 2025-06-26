const IS_DEV = process.env.APP_VARIANT === 'development'

module.exports = {
    expo: {
        name: IS_DEV ? 'LEXAmeta (DEV)' : 'ChatTCP',
        newArchEnabled: true,
        slug: 'lexameta',
        version: '0.5.1',
        orientation: 'default',
        icon: './assets/images/icon.png',
        scheme: 'chattcp',
        userInterfaceStyle: 'automatic',
        assetBundlePatterns: ['**/*'],
        ios: {
            icon: {
                dark: './assets/images/ios-dark.png',
                light: './assets/images/ios-light.png',
                tinted: './assets/images/icon.png',
            },
            supportsTablet: true,
            package: IS_DEV ? 'com.LEXAmeta.ChatTCPDev' : 'com.LEXAmeta.ChatTCP',
            bundleIdentifier: IS_DEV ? 'com.LEXAmeta.ChatTCPDev' : 'com.LEXAmeta.ChatTCP',
        },
        android: {
            adaptiveIcon: {
                foregroundImage: './assets/images/adaptive-icon-foreground.png',
                backgroundImage: './assets/images/adaptive-icon-background.png',
                monochromeImage: './assets/images/adaptive-icon-foreground.png',
                backgroundColor: '#000',
            },
            package: IS_DEV ? 'com.LEXAmeta.ChatTCPDev' : 'com.LEXAmeta.ChatTCP',
            userInterfaceStyle: 'dark',
            permissions: [
                'android.permission.FOREGROUND_SERVICE',
                'android.permission.WAKE_LOCK',
                'android.permission.FOREGROUND_SERVICE_DATA_SYNC',
            ],
        },
        web: {
            bundler: 'metro',
            output: 'static',
            favicon: './assets/images/adaptive-icon.png',
        },
        plugins: [
            [
                'expo-asset',
                {
                    assets: ['./assets/models/aibot.png', './assets/models/llama3tokenizer.gguf'],
                },
            ],
            [
                'expo-build-properties',
                {
                    android: {
                        largeHeap: true,
                        usesCleartextTraffic: true,
                        enableProguardInReleaseBuilds: true,
                        enableShrinkResourcesInReleaseBuilds: true,
                        useLegacyPackaging: true,
                        extraProguardRules: '-keep class com.rnllama.** { *; }',
                    },
                },
            ],
            [
                'expo-splash-screen',
                {
                    backgroundColor: '#000000',
                    image: './assets/images/adaptive-icon.png',
                    imageWidth: 200,
                },
            ],
            [
                'expo-notifications',
                {
                    icon: './assets/images/notification.png',
                },
            ],
            [
                './expo-build-plugins/androidattributes.plugin.js',
                {
                    'android:largeHeap': true,
                },
            ],
            'expo-localization',
            'expo-router',
            'expo-sqlite',
            './expo-build-plugins/bgactions.plugin.js',
            './expo-build-plugins/copyjni.plugin.js',
            './expo-build-plugins/usercert.plugin.js',
        ],
        experiments: {
            typedRoutes: true,
        },
        extra: {
            router: {
                origin: false,
            },
            eas: {
                // projectId: '0c7812a2-6d6b-405b-bf9e-b52226dae5bf',
            },
        },
    },
}
