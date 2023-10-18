const toJSONParse = (obj: string | undefined | null) => {
    if (obj) {
        return JSON.parse(obj)
    }

    return {}
}

export {toJSONParse}
