'use server'

const getAuthKey =async () => {
    const secretKey = process.env.USER_TOKEN_SECRET_KEY
    console.log(secretKey)
    return secretKey
}

export {getAuthKey}