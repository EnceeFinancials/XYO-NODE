/*
 * @Author: XY | The Findables Company <ryanxyo>
 * @Date:   Tuesday, 21st August 2018 3:41:00 pm
 * @Email:  developer@xyfindables.com
 * @Filename: xyo-number-signed.ts
 * @Last modified by: ryanxyo
 * @Last modified time: Tuesday, 21st August 2018 5:27:14 pm
 * @License: All Rights Reserved
 * @Copyright: Copyright XY | The Findables Company
 */

import { XYOObject } from '../xyo-object';
import { XYONumberType } from './xyo-number-type';

export abstract class XYONumberSigned extends XYOObject {
  public abstract readonly size: XYONumberType;
  public abstract readonly val: number;

  get data() {
    let buf: Buffer;

    switch (this.size) {
      case XYONumberType.BYTE:
        return Buffer.from([this.val]);
      case XYONumberType.SHORT:
        buf = new Buffer(2);
        buf.writeInt16BE(this.val, 0);
        return buf;
      case XYONumberType.INT:
        buf = new Buffer(4);
        buf.writeInt32BE(this.val, 0);
        return buf;
      case XYONumberType.LONG:
        buf = new Buffer(8);
        buf.writeUInt32BE(Math.floor((this.val / Math.pow(2, 32))), 0);
        buf.writeUInt32BE(this.val % Math.pow(2, 32), 4);
        return buf;
      default:
        buf = new Buffer(4);
        buf.writeInt32BE(this.val, 0);
        return buf;
    }
  }
}
