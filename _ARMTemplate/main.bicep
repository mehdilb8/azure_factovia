resource storageAccount 'Microsoft.Storage/storageAccounts@2021-08-01' = {
    name: 'stovthhellowbicep'
    location: 'westus3'
    sku: {
      name: 'Standard_LRS'
    }
    kind: 'StorageV2'
    properties: {
      accessTier: 'Hot'
    }
  }
