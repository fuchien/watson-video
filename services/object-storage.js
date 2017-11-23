let pkgcloud = require('pkgcloud')

var config = {
    provider: 'openstack',
    useServiceCatalog: true,
    useInternal: false,
    keystoneAuthVersion: 'v3',
    authUrl: 'https://identity.open.softlayer.com',
    tenantId: "07a5d8e900744943b109ea40561d202d",
    username: "admin_d610a968a55eebd12fdc9c0daabbf2714d5897bd",
    password: "WD)TH2C.7uUk-NCv",
    domainId: "da041d1847314231a4a90fcb2471825b",
    region: 'dallas'   //dallas or london region
};

let client = pkgcloud.storage.createClient(config);
module.exports = client