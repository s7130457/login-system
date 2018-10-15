module.exports = {
    success: (data, msg) => {
        let resObj = {
            statusCode: 200,
            error: false,
            data: data,
            msg: msg || 'success'
        };
        return resObj;

    }
};