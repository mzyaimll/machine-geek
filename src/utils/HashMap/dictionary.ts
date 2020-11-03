/*
 *                   江城子 . 程序员之歌
 * 
 *               十年生死两茫茫，写程序，到天亮。
 *                   千行代码，Bug何处藏。
 *               纵使上线又怎样，朝令改，夕断肠。
 * 
 *               领导每天新想法，天天改，日日忙。
 *                   相顾无言，惟有泪千行。
 *               每晚灯火阑珊处，夜难寐，加班狂。
 * 
 * 
 * @Author: JackM
 * @Date: 2020-11-03 08:56:36
 * @LastEditors: JackM
 * @LastEditTime: 2020-11-03 21:07:55
 */


import { ValuePair } from './dictionary-list-models';
import Map from "./Map"
export default class Dictionary<K, V> implements Map<K, V> {

    private table: { [key: string]: ValuePair<K, V> };

    constructor(private toStrFn: (key: K) => string = toString) {
        this.table = {}
    }
    set(key: K, value: V) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value); return true;
        }
        return false;
    }
    hasKey(key: K): boolean {
        return this.table[this.toStrFn(key)] != null
    }
    remove(key: K): boolean {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }
    get(key: K): V | undefined {
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }
    keyValues(): ValuePair<K, V>[] {
        const valuePairs = []
        const keys = Object.keys(this.table);
        for (let i = 0; i < keys.length; i++) {
            valuePairs.push(this.table[keys[i]])
        }
        return valuePairs;
    }
    keys(): K[] {
        const keys = [];
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            keys.push(valuePairs[i].key);
        }
        return keys
    }
    values(): V[] {
        const values = [];
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            values.push(valuePairs[i].value);
        }
        return values;
    }
    forEach(callbackFn: (key: K, value: V) => any): void {
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
            if (result === false) break
        }
    }
    size(): number {
        return this.keyValues().length;
    }
    isEmpty(): boolean {
        return this.size() === 0;
    }
    clear(): void {
        this.table = {}
    }
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString},${valuePairs[i].toString()}`;
        }
        return objString;
    }

}