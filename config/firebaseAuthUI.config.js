export const uiConfig = (githubAuth, googleAuth) => {
    return {
        signInSuccessUrl: '/',
        signInOptions: [
            githubAuth.providerId,
            googleAuth.providerId
        ],
        signInFlow: 'popup'
    }
}