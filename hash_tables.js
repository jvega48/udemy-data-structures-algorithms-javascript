class HashTables {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i);
            this.data.length
        }

        return hash
    }

    _index(hash) {
        return hash % this.data.length;
    }

    _get_keys() {
        let keys = []
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keys.push(this.data[i][0][0])
            }
        }

        return keys
    }

    _get_values() {
        let values = []
        let keys = this._get_keys()
        for (let i = 0; i < keys.length; i++) {
            if (keys[i]) {
                values.push(this._get(keys[i]))
            }
        }
        return values
    }

    _get(key) {
        let hash_key = this._hash(key)
        let bucket = this.data[hash_key]
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] == key) {
                    return bucket[i][1]
                }
            }
        }
        return null
    }

    // THIS IS ONLY TO PREVENT DUPLICATED KEYS UPDATES THE KEY VALUE
    _put(key, value) {
        let hash_key = this._hash(key)
        if (!this.data[hash_key]) {
            this.data[hash_key] = []
            this.data[hash_key].push([key, value])
        } else {
            if (this._search(key)) {
                this.data[hash_key].pop(hash_key)
                this.data[hash_key].push([key, value])
            }
        }
    }

    _search(key) {
        let hash_key = this._hash(key);
        let bucket = this.data[hash_key]
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] == key) {
                    return true
                }
            }
        }
        return false
    }

    _print_hash_table() {
        let string = ''
        let keys = this._get_keys()
        for (let a = 0; a < keys.length; a++) {
            if (keys[a]) {
                string += "{ key: " + keys[a] + ", value:" + this._get(keys[a]) + "} \n"
            }

        }
        return string
    }
}

let hstable = new HashTables(5);

hstable._put('aa', 0)
hstable._put('bb', 0)
hstable._put('cc', 6656)
hstable._put('dd', 1000000)
hstable._put('ee', 0)
hstable._put('ff', 6656)
hstable._put('gg', 10)
hstable._put('hh', 000)
hstable._put('ii', 987)
hstable._put('jj', 8958453489054389)
hstable._put('kk', 0)
console.log(hstable._get("kk"))
hstable._put('kk', 11)
console.log("mm seacg", hstable._search("jj"))
console.log(hstable._get("kk"))

console.log("the hash table", hstable._get_keys())
console.log("the hash table", hstable._get_values())
console.log("the hash table\n", hstable._print_hash_table())

function duplicates2(params) {
    if (!params || params.length == 0) {
        return undefined
    }

    for (let i = 0; i < params.length; i++) {
        for (let b = i + 1; b < params.length; b++) {
            if (params[i] == params[b]) {
                return params[i];
            }
        }
    }
    return undefined
}

function duplicates(params) {
    if (!params || params.length == 0) {
        return undefined
    }
    // buiild in new Map()
    let seen = {}

    for (let i = 0; i < params.length; i++) {
        // build in seen.get(key)
        if (seen[params[i]]) {
            return params[i]
        }
        // seen.set(<key, value>)
        seen[params[i]] = true
    }
    return undefined
}

console.log(duplicates2([2, 1, 1, 2, 3, 5, 1, 2, 4]))
console.log(duplicates([2, 1, 1, 2, 3, 5, 1, 2, 4]))
console.log(duplicates([2, 5, 1, 2, 3, 5, 1, 2, 4]))
console.log(duplicates([2, 3, 4, 5]))
console.log(duplicates([2, 5, 5, 2, 3, 5, 1, 2, 4]))

function poptars(params) {
    if (params.length < 0 || params == undefined) {
        return 0
    }

    let seen = new Set()
    let missing = undefined
    let lowest = seen[0]
    let max = 0
    for (let i = 0; i < params.length; i++) {
        if (!seen.has(params[i]) && params[i] >= 0) {
            seen.add(params[i])
        }
    }
    // TODO: FIgure out the smallest when the last smallest is 7 -> n + 
    max = seen[seen.length - 1]
    for (let i = 0; i < max; i++) {

        if (!seen.has(i) && i != 0) {
            missing = i
            if (missing < lowest && missing < i) {
                missing = lowest
            } else {
                missing = lowest
            }
        }
    }
    return missing
}

console.log(poptars([1, 2, 0]))
console.log(poptars([3, 4, -1, 1]))
console.log(poptars([7, 8, 9, 11, 12]))