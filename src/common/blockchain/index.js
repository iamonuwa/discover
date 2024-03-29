/* global web3 */
import utils from './utils'
import EmbarkJS from '../../embarkArtifacts/embarkjs'

import SNTService from './services/snt-service/snt-service'
import DiscoverService from './services/discover-service/discover-service'

const initServices = function() {
  const sharedContext = {
    account: '0x0000000000000000000000000000000000000000',
  }

  sharedContext.SNTService = new SNTService(sharedContext)
  sharedContext.DiscoverService = new DiscoverService(sharedContext)

  return {
    SNTService: sharedContext.SNTService,
    DiscoverService: sharedContext.DiscoverService,
    utils,
  }
}

const getInstance = async () => {
  return new Promise((resolve, reject) => {
    const returnInstance = () => {
      try {
        const services = initServices()
        resolve(services)
      } catch (error) {
        reject(error.message)
      }
    }

    EmbarkJS.onReady(err => {
      if (err) reject(err)

      returnInstance()
    })
  })
}

export default { getInstance, utils }
