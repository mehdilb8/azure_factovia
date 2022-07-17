param name string
@allowed([ 'centralus', 'eastus2', 'eastasia', 'westeurope', 'westus2' ])
param location string
@allowed([ 'Free', 'Standard' ])
param sku string = 'Standard'

resource swa_resource 'Microsoft.Web/staticSites@2021-01-15' = {
    name: 'swavthbicep010'
    location: 'westeurope'
    tags: null
    
    properties: {
      branch: 'string'
      buildProperties: {
        apiBuildCommand: 'string'
        apiLocation: 'string'
        appArtifactLocation: 'string'
        appBuildCommand: 'string'
        appLocation: 'string'
        githubActionSecretNameOverride: 'string'
        outputLocation: 'string'
        skipGithubActionWorkflowGeneration: 'bool'
      }
      provider: 'string'
      repositoryToken: 'string'
      repositoryUrl: 'string'
    }

    sku: {
        name: sku
        size: sku
    }
}



