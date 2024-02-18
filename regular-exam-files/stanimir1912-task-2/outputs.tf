output "resource_group_name" {
  value       = azurerm_resource_group.rg.name
  description = "Show the name of the resource group"
}

output "resource_group_location" {
  value       = azurerm_resource_group.rg.location
  description = "Show the location of the resource group"
}

