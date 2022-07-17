param skuName string = 'Free'
param skuTier string = 'Free'

param appName string = 'stapp-factoviaweb-fr-weeu-prd'

resource staticWebApp 'Microsoft.Web/staticSites@2020-12-01' = {
  name: appName
  location: 'westeurope'
  sku: {
    name: skuName
    tier: skuTier
  }
  properties: {
  }
}

output deployment_token string = listSecrets(staticWebApp.id, staticWebApp.apiVersion).properties.apiKey


