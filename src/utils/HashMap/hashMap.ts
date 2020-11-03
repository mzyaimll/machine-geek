addexport class HashMap<K, V> implements Map<K, V>{
    protected table: { [key: number]: ValuePair<K, V> };
    constructor(protected toStrFn: (key: K) => string = defaultToString) {
        this.table = {};
    }
}