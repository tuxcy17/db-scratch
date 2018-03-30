function copy (val: any) {
    return JSON.parse(JSON.stringify(val));
}

export {copy}