// Copyright IBM Corp. 2017,2018. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {
  del,
  get,
  getFilterSchemaFor,
  param,
  patch,
  post,
  put,
  requestBody,
} from '@loopback/rest';
import {Redeem} from '../models';

import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();

export class RedeemController {
  constructor() {}

  @post('/redeem', )
  async createIssue(@requestBody() requestBody: Redeem): Promise<any> {
    console.log('Buy, requestBody: ')
    console.log(requestBody)

    let networkObj = await blockchainClient.connectToNetwork();
    if (!networkObj) {
      let errString = 'Error connecting to network';
      return errString;
    }
    console.log('newtork obj: ')
    console.log(networkObj)
    
    let dataForRedeem = {
      function: 'redeem',
      issuer: requestBody.issuer,
      paperNumber: requestBody.paperNumber,
      redeemingOwner: requestBody.redeemingOwner,
      redeemDateTime: requestBody.redeemDateTime,
      contract: networkObj.contract
    };

    var result = await blockchainClient.redeem(dataForRedeem);

    console.log('result from blockchainClient.submitTransaction in controller: ')
    console.log(result.toString())

    return result;       
  }

  // @get('/buy/{id}')
  // async findTodoById(
  //   @param.path.number('id') id: number,
  //   @param.query.boolean('items') items?: boolean,
  // ): Promise<Buy> {
  //   throw new Error('Not implemented');
  // }
}
