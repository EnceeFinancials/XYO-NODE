/*
 * @Author: XY | The Findables Company <ryanxyo>
 * @Date:   Wednesday, 19th September 2018 2:23:32 pm
 * @Email:  developer@xyfindables.com
 * @Filename: xyo-origin-chain-types.ts
 * @Last modified by: ryanxyo
 * @Last modified time: Tuesday, 9th October 2018 3:12:32 pm
 * @License: All Rights Reserved
 * @Copyright: Copyright XY | The Findables Company
 */

import { XyoBoundWitness } from '../xyo-bound-witness/bound-witness/xyo-bound-witness';
import { XyoHash } from '../xyo-hashing/xyo-hash';
import { XyoIndex } from '../xyo-bound-witness/components/index/xyo-index';
import { XyoPreviousHash } from '../xyo-bound-witness/components/previous-hash/xyo-previous-hash';
import { IXyoSigner } from './xyo-signing';
import { XyoNextPublicKey } from '../xyo-bound-witness/components/next-public-key/xyo-next-public-key';

export interface IXyoOriginBlockRepository {
  removeOriginBlock(hash: Buffer): Promise<void>;
  containsOriginBlock(hash: Buffer): Promise<boolean>;
  getAllOriginBlockHashes(): Promise<Buffer[]>;
  addOriginBlock(hash: XyoHash, originBlock: XyoBoundWitness): Promise<void>;
  getOriginBlockByHash(hash: Buffer): Promise<XyoBoundWitness | undefined>;
}

export interface IXyoOriginChainStateRepository {
  getIndex(): Promise<XyoIndex>;
  getPreviousHash(): Promise<XyoPreviousHash | undefined>;
  getSigners(): Promise<IXyoSigner[]>;
  addSigner(signer: IXyoSigner): Promise<void>;
  removeOldestSigner(): Promise<void>;
  getNextPublicKey(): Promise<XyoNextPublicKey | undefined>;
  updateOriginChainState(hash: XyoHash): Promise<void>;
  getWaitingSigners(): Promise<IXyoSigner[]>;
  setCurrentSigners(signers: IXyoSigner[]): Promise<void>;
}
