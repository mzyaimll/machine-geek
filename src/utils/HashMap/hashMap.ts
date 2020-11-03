/*
 *                        ::
 *                       :;J7, :,                        ::;7:
 *                       ,ivYi, ,                       ;LLLFS:
 *                       :iv7Yi                       :7ri;j5PL
 *                      ,:ivYLvr                    ,ivrrirrY2X,
 *                      :;r@Wwz.7r:                :ivu@kexianli.
 *                     :iL7::,:::iiirii:ii;::::,,irvF7rvvLujL7ur
 *                    ri::,:,::i:iiiiiii:i:irrv177JX7rYXqZEkvv17
 *                 ;i:, , ::::iirrririi:i:::iiir2XXvii;L8OGJr71i
 *               :,, ,,:   ,::ir@mingyi.irii:i:::j1jri7ZBOS7ivv,
 *                  ,::,    ::rv77iiiriii:iii:i::,rvLq@huhao.Li
 *              ,,      ,, ,:ir7ir::,:::i;ir:::i:i::rSGGYri712:
 *            :::  ,v7r:: ::rrv77:, ,, ,:i7rrii:::::, ir7ri7Lri
 *           ,     2OBBOi,iiir;r::        ,irriiii::,, ,iv7Luur:
 *         ,,     i78MBBi,:,:::,:,  :7FSL: ,iriii:::i::,,:rLqXv::
 *         :      iuMMP: :,:::,:ii;2GY7OBB0viiii:i:iii:i:::iJqL;::
 *        ,     ::::i   ,,,,, ::LuBBu BBBBBErii:i:i:i:i:i:i:r77ii
 *       ,       :       , ,,:::rruBZ1MBBqi, :,,,:::,::::::iiriri:
 *      ,               ,,,,::::i:  @arqiao.       ,:,, ,:::ii;i7:
 *     :,       rjujLYLi   ,,:::::,:::::::::,,   ,:i,:,,,,,::i:iii
 *     ::      BBBBBBBBB0,    ,,::: , ,:::::: ,      ,,,, ,,:::::::
 *     i,  ,  ,8BMMBBBBBBi     ,,:,,     ,,, , ,   , , , :,::ii::i::
 *     :      iZMOMOMBBM2::::::::::,,,,     ,,,,,,:,,,::::i:irr:i:::,
 *     i   ,,:;u0MBMOG1L:::i::::::  ,,,::,   ,,, ::::::i:i:iirii:i:i:
 *     :    ,iuUuuXUkFu7i:iii:i:::, :,:,: ::::::::i:i:::::iirr7iiri::
 *     :     :rk@Yizero.i:::::, ,:ii:::::::i:::::i::,::::iirrriiiri::,
 *      :      5BMBBBBBBSr:,::rv2kuii:::iii::,:i:,, , ,,:,:i@petermu.,
 *           , :r50EZ8MBBBBGOBBBZP7::::i::,:::::,: :,:,::i;rrririiii::
 *               :jujYY7LS0ujJL7r::,::i::,::::::::::::::iirirrrrrrr:ii:
 *            ,:  :@kevensun.:,:,,,::::i:i:::::,,::::::iir;ii;7v77;ii;i,
 *            ,,,     ,,:,::::::i:iiiii:i::::,, ::::iiiir@xingjief.r;7:i,
 *         , , ,,,:,,::::::::iiiiiiiiii:,:,:::::::::iiir;ri7vL77rrirri::
 *          :,, , ::::::::i:::i:::i:i::,,,,,:,::i:i:::iir;@Secbone.ii:::
 * 
 * @Author: JackM
 * @Date: 2020-11-03 08:56:36
 * @LastEditors: JackM
 * @LastEditTime: 2020-11-03 21:07:38
 */

import { ValuePair } from './dictionary-list-models';
import Map from "./Map"

export class HashMap<K, V> implements Map<K, V>{
    protected table: { [key: number]: ValuePair<K, V> };
    constructor(protected toStrFn: (key: K) => string = toString) {
        this.table = {};
    }
    // 生成哈希码

    hashCode(key: K): number {
        return this.loseloseHashCode(key);
    }

    // loselose实现哈希函数  
    loseloseHashCode(key: K): number {
        if (typeof key === "number") {
            return key;
        }
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {
            // 获取每一个字符的ASCII码将其拼接至hash中
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
    }
    // djb2实现哈希函数
    djb2HashCode(key: K): number {
        if (typeof key === "number") {
            return key;
        }
        // 将参数转为字符串
        const tableKey = this.toStrFn(key);
        let hash = 5381;
        for (let i = 0; i < tableKey.length; i++) {
            hash = (hash * 33) + tableKey.charCodeAt(i);
        }
        return hash % 1013;
    }
    put(key: K, value: V): boolean {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            this.table[position] = new ValuePair(key, value);
            return true;
        } return false;
    }
    get(key: K): V | undefined {
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }
    hasKey(key: K): boolean {
        return this.table[this.hashCode(key)] != null;
    }
    remove(key: K): boolean {
        if (this.hasKey(key)) {
            delete this.table[this.hashCode(key)];
            return true;
        }
        return false;
    }
    keyValues(): ValuePair<K, V>[] {
        const valuePairs = [];
        // 获取对象中的全部key并将其转为int类型数组
        const keys = Object.keys(this.table).map(item => parseInt(item));
        for (let i = 0; i < keys.length; i++) {
            valuePairs.push(this.table[keys[i]]);
        }
        return valuePairs;
    }
    keys(): K[] {
        const keys = [];
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            keys.push(valuePairs[i].key);
        }
        return keys;
    }
    values(): V[] {
        const values = [];
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            values.push(valuePairs[i].value);
        }
        return values;
    }
    isEmpty(): boolean {
        return this.values().length === 0;
    }
    size(): number {
        return this.keyValues().length;
    }
    clear(): void {
        this.table = {};
    }
    forEach(callbackFn: (key: K, value: V) => any): void {
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
            if (result === false) {
                break;
            }
        }
    }
    toString(): string {
        if (this.isEmpty()) {
            return ``
        }

        const valuePairs = this.keyValues(); let objString = `${valuePairs[0].toString()}`; for (let i = 1; i < valuePairs.length; i++) { objString = `${objString},${valuePairs[i].toString()}`; } return objString;
    }
}