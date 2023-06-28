export const getResponse = (data, message, success)=>{
    return JSON.stringify({
        data,
        message,
        success
    })
}