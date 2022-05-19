module.exports = (records, page, count, limit) => {
    let last = Math.ceil(count/limit)
    return {
        records,
        nvRecords :count,
        page : {
            current : page,
            previous :(page>1) ? page -1 : null,
            next :  (page< last) ? page+1 : null,
            last : last
        }
    }
}