# az login 
# az account set --subscription f5d34933-7b5f-40ed-b742-a7722c7b63c5
az deployment group create --name DeployFactoViaARMTemplate --resource-group rg-factoviaweb-frce-prod-fr --template-file azuredeploy.json --parameters azuredeploy.parameters.json --verbose