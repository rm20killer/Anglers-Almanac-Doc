---
draft: false
tags:
  - API
  - Config
  - Dev
---
The mods allow other mods to get and modify the config in real time.
Anglers Almanac will provide the config back the API that you can access using 

```java
AnglersAlmanacAPI.getConfig()
AnglersAlmanacAPI.getMinigameConfig()
```

To learn more about what each settings in the configs do look at:
[[Config]] - Mods config
[[MinigameConfig_TensionBar]] - Tension bar minigame
### Implementation Example

```java
val anglersConfig = AnglersAlmanacAPI.getConfig().get()  
anglersConfig.shouldUseBait = true  
anglersConfig.minigameToUse = "TensionBar"  
anglersConfig.shouldHabCheck = false  
anglersConfig.shouldEnvironmentCheck = false  
anglersConfig.hookEntities = true   
AnglersAlmanacAPI.getConfig().save()
```