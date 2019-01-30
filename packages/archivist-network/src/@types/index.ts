/*
 * @Author: XY | The Findables Company <ryanxyo>
 * @Date:   Monday, 28th January 2019 11:41:08 am
 * @Email:  developer@xyfindables.com
 * @Filename: index.ts
 * @Last modified by: ryanxyo
 * @Last modified time: Tuesday, 29th January 2019 3:59:59 pm
 * @License: All Rights Reserved
 * @Copyright: Copyright XY | The Findables Company
 */

import { IXyoHash } from '@xyo-network/hashing'
import { IXyoBoundWitness } from '@xyo-network/bound-witness'

export interface IXyoArchivistNetwork {
  startFindingPeers(): void
  getIntersections(partyOne: string[], partyTwo: string[], markers: string[], direction: 'FORWARD' | 'BACKWARD'): Promise<IXyoHash[]>
  getBlock(hash: IXyoHash): Promise<IXyoBoundWitness|undefined>
}
